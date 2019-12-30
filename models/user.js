'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password : DataTypes.STRING,
  }, {
    underscored: true,
    defaultScope:{
      attributes:{
        exclude:['password']
      },
    }
  });
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.addresses,{
        foreignKey:'email'
    })
  };
  return user;
};
