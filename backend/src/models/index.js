'use strict';

import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const options = {
  dialect: 'mysql',
  timezone: 'Asia/Seoul',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  },
  logging:false,
}
const sequelize = new Sequelize(config.database, config.username, config.password, options);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Category = require('./category')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Visit = require('./visit')(sequelize, Sequelize);

// 카테고리 - 포스트
db.Category.hasMany(db.Post);
db.Post.belongsTo(db.Category);

// 해시태그 - 포스트
db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });

// 포스트 - 유저
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

// 포스트 - 댓글
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

// 댓글 - 대댓글
db.Comment.hasMany(db.Comment);
db.Comment.belongsTo(db.Comment);

module.exports = db;
