import { Router } from 'express';

import { authenticateByToken } from './middleware';
import { Post, Category, Hashtag } from '../models';

const postRouter = Router();
const ROWS_PER_PAGE = 5;
const LATEST_POSTS = 4;

postRouter.get('/latest', async (req, res, next) => {
  try {
    const latestPosts = await Post.findAll({
      attributes: [ 'id', 'title' ],
      order: [ ['createdAt', 'DESC'] ],
      limit: LATEST_POSTS,
    });
    return res.json({
      success: true,
      latestPosts,
    })
  } catch (error) {
    console.log('Error from postRouter [GET]/latest', error);
    next(error);
  }
})

postRouter.get('/', async (req, res, next) => {

  try {
    const { post, page, category } = req.query;
    // post가 있을 경우 = 한 개의 Post
    if (post) {
      const exPost = await Post.findOne({
        where: { id: post },
        attributes: {
          exclude: [ 'deletedAt' ]
        },
        include: [{
          model: Category,
          attributes: [ 'id', 'title' ]
        },{
          model: Hashtag,
          attributes: [ 'id', 'title' ]
        }]
      });

      return res.json({
        success: true,
        post: exPost,
      });
    }

    // post가 없을 경우 = List 정보
    if (page && !isNaN(page)) {
      const where = category ? { categoryId: category } : {};
      const posts = await Post.findAll({
        where,
        attributes: {
          exclude: [ 'deletedAt' ]
        },
        include: [{
          model: Category,
          attributes: [ 'title' ],
        },{
          model: Hashtag,
          attributes: [ 'id', 'title' ],
        }],
        order: [ ['createdAt', 'DESC'] ],
        offset: ROWS_PER_PAGE * (page - 1),
        limit: ROWS_PER_PAGE,
      });
      const count = await Post.count({ where });

      return res.json({
        success: true,
        posts,
        pageinfo: {
          totalPost: count,
          totalPage: Math.ceil(count / ROWS_PER_PAGE),
          page,
          perPage: ROWS_PER_PAGE,
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'page를 입력해주세요.',
      })
    }
  } catch (error) {
    console.log('Error from postRouter [GET]/', error);
    next(error);
  }
})

postRouter.post('/', authenticateByToken, async (req, res, next) => {
  try {
    const { user } = req;
    const { title, content, category, hashtags } = req.body;
    console.log('Post Insert : ', { title, content, category, hashtags })
    if (!Array.isArray(hashtags)) {
      return res.status(400).json({
        success: false,
        message: '해시태그를 올바르게 입력해주세요. (Array형태 - [])',
      });
    }

    const post = await Post.create({
                          title,
                          content,
                          categoryId: category,
                          userId: user.id,
                        });

    const result = await Promise.all(hashtags.map(tag => Hashtag.findOrCreate({
      where: { title: tag },
    })));
    await post.setHashtags(result.map(r => r[0]));
    return res.json({
      success: true,
    })
  } catch (error) {
    console.log('Error from postRouter [POST]/', error);
    next(error);
  }
})

postRouter.put('/:id', authenticateByToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, category, hashtags } = req.body;
    const exPost = await Post.findOne({ where: { id }});
    if (exPost) {
      // 업데이트
      exPost.update({
        title,
        content,
        categoryId: category,
      });
      // 해시태그 생성
      const result = await Promise.all(hashtags.map(tag => Hashtag.findOrCreate({
        where: { title: tag },
      })));
      // 포스트 - 해시태그 관계 설정
      await exPost.setHashtags(result.map(r => r[0]));
      return res.json({
        success: true,
      });
    } else {
      return res.json({
        success: false,
        message: '포스트가 존재하지 않습니다.',
      });
    }
  } catch (error) {
    console.log('Error from postRouter [PUT]/post/:id', error);
    next(error);
  }
})

postRouter.delete('/:id', authenticateByToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id }});
    if (post) {
      post.destroy();
      return res.json({
        success: true,
      });
    } else {
      return res.json({
        success: false,
        message: '포스트가 존재하지 않습니다.',
      });
    }
  } catch (error) {
    console.log('Error from postRouter [DELETE]/post/:id', error);
    next(error);
  }
})

export default postRouter;
