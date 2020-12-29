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
          // spotId: 1,
          // statusId: 1,
          // userId: 1,
          // startDate: DataTypes.DATE,
          // endDate: DataTypes.DATE,
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
