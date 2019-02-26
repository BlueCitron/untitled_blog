import { Router } from 'express';

import { Category } from '../models';
import { authenticateByToken } from './middleware';

const categoryRouter = Router();

categoryRouter.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'title', 'order'],
      order: [ 'order' ]
    })
    return res.json({
      success: true,
      categories,
    })
  } catch (error) {
    console.log('Error from categoryRouter [GET]/category/', error);
    next(error);
  }
})

categoryRouter.post('/', authenticateByToken, async (req, res, next) => {
  try {
    const { title, order } = req.body;
    if (title) {
      const exCategory = await Category.findOne({ where: { title }});
      if (!exCategory) {
        await Category.create({ title, order });
        return res.json({
          success: true
        });
      } else {
        return res.status(401).json({
          success: false,
          message: '이미 존재하는 카테고리입니다.',
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: 'title을 입력해주세요.'
      });
    }
  } catch (error) {
    console.log('Error from categoryRouter [POST]/category/', error);
    next(error);
  }
})

categoryRouter.put('/:id', authenticateByToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, order } = req.body;
    console.log('updateCategory : ', id, title, order)
    if (title) {
      const exCategory = await Category.findOne({ where: { id }});
      if (exCategory) {
        await exCategory.update({ title, order });
        return res.json({
          success: true
        });
      } else {
        return res.status(401).json({
          success: false,
          message: '존재하지 않는 카테고리 입니다.',
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: 'title을 입력해주세요.'
      });
    }
  } catch (error) {
    console.log('Error from categoryRouter [PUT]/category/:id', error);
    next(error);
  }
})

categoryRouter.delete('/:id', authenticateByToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id }})
    if (category) {
      category.destroy();
      return res.json({
        success: true,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: '카테고리가 존재하지 않습니다.',
      })
    }
  } catch (error) {
    console.log('Error from categoryRouter [DELETE]/category/:id', error);
    next(error);
  }
})

export default categoryRouter;
