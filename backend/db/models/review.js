"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      bookingId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Booking, { foreignKey: "bookingId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
