'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    judul: DataTypes.STRING,
    isi: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};