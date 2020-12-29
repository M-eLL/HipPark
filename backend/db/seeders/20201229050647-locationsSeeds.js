"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          address: "3674 18th Street",
          city: "San Francisco",
          state: "California",
          zipcode: 94114,
          latitude: "37.76171",
          longitude: "-122.42541",
        },
        {
          address: "485 Jessie",
          city: "San Francisco",
          state: "California",
          zipcode: 94103,
          latitude: "37.781633",
          longitude: "-122.408894",
        },
        {
          address: "2520 3rd St",
          city: "San Francisco",
          state: "California",
          zipcode: 94107,
          latitude: "37.7576",
          longitude: "-122.38859",
        },
        {
          address: "4076 19th St",
          city: "San Francisco",
          state: "California",
          zipcode: 94114,
          latitude: "37.75951",
          longitude: "-122.43435",
        },
        {
          address: "2827 California St",
          city: "San Francisco",
          state: "California",
          zipcode: 94115,
          latitude: "37.78797",
          longitude: "-122.44091",
        },
        {
          address: "150 Turk St",
          city: "San Francisco",
          state: "California",
          zipcode: 94102,
          latitude: "37.78315",
          longitude: "-122.41163",
        },
        {
          address: "1800 46th Ave",
          city: "San Francisco",
          state: "California",
          zipcode: 94122,
          latitude: "37.75288",
          longitude: "-122.505082",
        },
        {
          address: "1324 20th Ave",
          city: "San Francisco",
          state: "California",
          zipcode: 94122,
          latitude: "37.76304",
          longitude: "-122.47783",
        },
        {
          address: "1353 9th Ave",
          city: "San Francisco",
          state: "California",
          zipcode: 94122,
          latitude: "37.76299",
          longitude: "-122.46657",
        },
        {
          address: "603 Eddy Street",
          city: "San Francisco",
          state: "California",
          zipcode: 94109,
          latitude: "37.783118",
          longitude: "-122.417834",
        },
        {
          address: "4059 High Line",
          city: "New York",
          state: "New York",
          zipcode: 10001,
          latitude: "40.742458",
          longitude: "-74.007477",
        },
        {
          address: "1489 Sunset Blvd",
          city: "Los Angeles",
          state: "California",
          zipcode: 17086,
          latitude: "34.075908",
          longitude: "-118.254866",
        },
        {
          address: "1717 SW Park Ave",
          city: "Portland",
          state: "Oregon",
          zipcode: 97201,
          latitude: "45.51289",
          longitude: "-122.685104",
        },
        {
          address: "1620 Broadway",
          city: "Seattle",
          state: "Washington",
          zipcode: 98122,
          latitude: "47.616266",
          longitude: "-122.320463",
        },
        {
          address: "2400 N Bernard Street",
          city: "Chicago",
          state: "Illinois",
          zipcode: 98122,
          latitude: "41.925001",
          longitude: "-87.713292",
        },
        {
          address: "1423 St Philip St",
          city: "New Orleans",
          state: "Louisiana",
          zipcode: 70116,
          latitude: "29.96475",
          longitude: "-90.068058",
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
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
