'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    price: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};