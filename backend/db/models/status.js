'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    label: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    Status.hasMany(models.Booking, { foreignKey: "statusId" });

  };
  return Status;
};