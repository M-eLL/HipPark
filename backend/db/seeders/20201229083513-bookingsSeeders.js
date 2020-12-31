"use strict";
const {Spot} = require("../models")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const spots = await Spot.findAll()
    console.log(spots[0].id)
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spotId: spots[0].id,
          statusId: 2,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[1].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[2].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[3].id,
          statusId: 3,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[4].id,
          statusId: 2,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[5].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[6].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[7].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[8].id,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: spots[9].id,
          statusId: 1,
          userId: 1,
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
