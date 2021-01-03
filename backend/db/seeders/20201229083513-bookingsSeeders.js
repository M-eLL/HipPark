"use strict";
const { Spot, Status, User } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const spots = await Spot.findAll();
    const status = await Status.findAll();
    const user = await User.findAll();
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spotId: spots[0].id,
          statusId: status[1].id,
          userId: user[0].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[0].id,
          statusId: status[2].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[1].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[2].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[3].id,
          statusId: status[2].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[4].id,
          statusId: status[1].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[5].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[6].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[7].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[8].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[9].id,
          statusId: status[0].id,
          userId: user[1].id,
          startDate: new Date(),
          endDate: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
