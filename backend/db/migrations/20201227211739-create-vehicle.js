"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plateNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sizeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Sizes" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Vehicles");
  },
};
