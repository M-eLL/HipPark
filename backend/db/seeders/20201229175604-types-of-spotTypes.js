"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Types",
      [
        {
          type: "Public",
        },
        {
          type: "Private",
        },
        {
          type: "Overnight",
        },
        {
          type: "Day",
        },
        {
          type: "Hourly",
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
    return queryInterface.bulkDelete("Types", null, {});
  },
};
