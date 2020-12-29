"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          name: "Dolores Park/Castro/Mission",
          description:
            "Driveway available for day parking. Heavy pedestrian and vehicular traffic. Safe from tickets, but not a good neighborhood to leave valuables in your vehicle. Park here while you grab some strawberry balsamic ice cream from BiRite Creamery or a 6-pack of Fort Point KSA and a Vegan Hippie sandwich from BiRite Market to enjoy the day at Dolo!",
          price: 10,
          available: true,
          userId: 2,
          locationId: 17,
        },
        {
          name: "Inner Sunset",
          description:
            "Safe garage parking available for day use. I work right upstairs so I can let you in and out when you need. Explore the park, grab some Fresh Squeezed and play darts in the hidden back room at the Shamrock, have some of the best dang chicken wings you'll ever taste at San Tung, order a breakfast special from Howards and get them to deliver it to the Mucky Duck right next door where you can enjoy it with one of their famous bloody marys",
          price: 25,
          available: true,
          userId: 3,
          locationId: 25,
        },
        {
          name: "Tenderloin",
          description:
            "hourly spots inside of an auto shop. Business has been slow so I'm renting out some space for parking. Cheaper and easier than tryin to find parking elsewhere.",
          price: 5,
          available: true,
          userId: 2,
          locationId: 22,
        },
        {
          name: "outer sunset",
          description:
            "monthly parking for a compact car. Just dont pull in all the way so I can fit my vespa at the front of the spot.",
          price: 5,
          available: false,
          userId: 3,
          locationId: 23,
        },
        {
          name: "20th & Irving",
          description:
            "driveway parking. hourly. safe and convenient location. Go hiking through golden gate park for the day. ",
          price: 5,
          available: true,
          userId: 3,
          locationId: 24,
        },
        {
          name: "Warfield, Westfield Mall, Union Square",
          description:
            "Private parking garage in a quiet alley. There are people living in the tents- please dont disturb them.",
          price: 30,
          available: true,
          userId: 2,
          locationId: 18,
        },
        {
          name: "DOGPATCH",
          description: "renting out driveway of my business.",
          price: 6,
          available: true,
          userId: 2,
          locationId: 19,
        },
        {
          name: "Lower Pac Heights",
          description: "the left half of the driveway",
          price: 9,
          available: true,
          userId: 2,
          locationId: 21,
        },
        {
          name: "Civic Center",
          description: "my work parking spot. very safe place to park",
          price: 13,
          available: true,
          userId: 2,
          locationId: 26,
        },
        {
          name: "Chelsea Market",
          description: "parking in the back behind my business.",
          price: 17,
          available: true,
          userId: 4,
          locationId: 27,
        },
        {
          name: "Echo Park",
          description: "a dirt alley next to Sunset Beer.",
          price: 7,
          available: true,
          userId: 4,
          locationId: 28,
        },
        {
          name: "close to university",
          description:
            "cheap uncompetitive parking for reliable parking for an all-nigher at the library or the school sportsball game tonight",
          price: 3,
          available: true,
          userId: 4,
          locationId: 29,
        },
        {
          name: "Cal Anderson Park",
          description: "day parking in Capitol Hill",
          price: 11,
          available: true,
          userId: 4,
          locationId: 30,
        },
        {
          name: "Logan Square",
          description:
            "garage parking. dont stress out trying to park in this busy area. just park here so you can focus on having fun",
          price: 20,
          available: true,
          userId: 4,
          locationId: 31,
        },
        {
          name: "French Quarter",
          description: "safe parking while you wait in line for beignets",
          price: 8,
          available: true,
          userId: 4,
          locationId: 32,
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
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
