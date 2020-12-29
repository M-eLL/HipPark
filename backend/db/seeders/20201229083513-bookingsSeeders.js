"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spotId: 31,
          statusId: 2,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 32,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 33,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 34,
          statusId: 3,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 35,
          statusId: 2,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 36,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 37,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 38,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 39,
          statusId: 1,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          spotId: 40,
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
