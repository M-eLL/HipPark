'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotType = sequelize.define('SpotType', {
    spotId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  SpotType.associate = function(models) {
    // associations can be defined here
  };
  return SpotType;
};