'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    plateNumber: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};