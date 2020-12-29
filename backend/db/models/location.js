"use strict";
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
    },
    {}
  );
  Location.associate = function (models) {
    // associations can be defined here
    Location.hasMany(models.Spot, { foreignKey: "locationId" });
  };
  return Location;
};
