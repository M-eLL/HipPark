"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      name: DataTypes.STRING,
      imageLink: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
    },
    {}
  );
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.belongsToMany(models.Type, {
      foreignKey: "spotId",
      otherKey: "typeId",
      through: "SpotTypes",
    });
    Spot.belongsTo(models.User, { foreignKey: "userId" });
    Spot.belongsTo(models.Location, { foreignKey: "locationId" });
    Spot.hasMany(models.Booking, { foreignKey: "spotId" });
  };
  return Spot;
};
