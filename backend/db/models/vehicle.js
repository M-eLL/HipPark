'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    plateNumber: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.belongsTo(models.User, { foreignKey: "userId" });
    Vehicle.belongsTo(models.Size, { foreignKey: "sizeId" });
    Vehicle.hasMany(models.Booking, { foreignKey: "vehicleId" });
  };
  return Vehicle;
};