import { Router } from 'express';
import moment from 'moment';

import { Sequelize, Visit } from '../models';
const visitRouter = Router();
const { Op } = Sequelize;

visitRouter.get('/', async (req, res, next) => {
  try {
    const total = await Visit.count();
    const today = await Visit.count({
      where: {
        createdAt: {
          [Op.gte]: moment().startOf('day'),
          [Op.lt]: moment(),
        }
      }
    });
    const yestr = await Visit.count({
      where: {
        createdAt: {
          [Op.gte]: moment().subtract(1, 'days').startOf('day'),
          [Op.lt]: moment().startOf('day'),
        }
      }
    });
    console.log(moment().subtract(1, 'days').startOf('day').toString())
    console.log(moment().startOf('day').toString())
    return res.json({
      success: true,
      total,
      today,
      yestr,
    });
  } catch (error) {
    console.log('Error from visitRouter [GET]/visit', error);
    next(error);
  }
});

visitRouter.post('/', async (req, res, next) => {
  try {
    const address = req.host;
    const isVisited = await Visit.findOne({
      where: {
        address,
        createdAt: {
          [Op.gte]: moment().startOf('day'),
          [Op.lt]: moment(),
        }
      },
    });
    console.log('Visited : ', isVisited)
    if (!isVisited) {
      console.log('방문처리')
      await Visit.create({ address });
    } else {
      console.log('이미방문함. 재방문처리.')
      await isVisited.update({ address: address + '1' });
      await isVisited.update({ address });
    }
    return res.json({ success: true });
  } catch (error) {
    console.log('Error from visitRouter [POST]/visit', error);
    next(error);
  }
});

export default visitRouter;
