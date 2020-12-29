'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    // vehicleId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Booking.belongsTo(models.Status, { foreignKey: 'statusId' });
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    // Booking.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' });
    Booking.hasMany(models.Review, { foreignKey: "bookingId" });
  };
  return Booking;
};