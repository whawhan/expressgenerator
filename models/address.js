'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('addresses', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    country: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    underscored: true,
  });
  address.associate = function(models) {
    // associations can be defined here
    address.belongsTo(models.user,{
      foreignKey:'email'
    })
  };
  return address;
};