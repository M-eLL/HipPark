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
          locationId: 1,
          imageLink:
            "https://brokeassstuart.com/wp-content/pictsnShit/2014/04/dolores-park.jpg",
        },
        {
          name: "Warfield, Westfield Mall, Union Square",
          description:
            "Private parking garage in a quiet alley. There are people living in the tents- please dont disturb them.",
          price: 30,
          available: true,
          userId: 2,
          locationId: 2,
          imageLink:
            "https://rtxevent.com/wp-content/uploads/TheVenueReport-TheWarfield-01.jpg",
        },
        {
          name: "DOGPATCH",
          description: "renting out driveway of my business.",
          price: 6,
          available: true,
          userId: 2,
          locationId: 3,
          imageLink:
            "https://www.we-heart.com/upload-images/smokestacksanfrancisco11.jpg",
        },
        {
          name: "Presidio",
          description: "Garage parking",
          price: 4,
          available: true,
          userId: 2,
          locationId: 4,
          imageLink:
            "https://californiathroughmylens.com/wp-content/uploads/2012/12/Palace-of-Fine-Arts-11.jpg",
        },
        {
          name: "Lower Pac Heights",
          description: "the left half of the driveway",
          price: 9,
          available: true,
          userId: 2,
          locationId: 5,
          imageLink:
            "https://lh3.googleusercontent.com/proxy/D5Mc8GZ73taEc-8ZKH1n42IPprzRUYzBpGRjrjjKrXNuPWe2NV7WJTqlUkk_OjhuvcuuIg51v_1f5d0puE2Y9imnWVrRUNlUysx7ZDqK2N5Bip9WepvvZUy3IKG08Q",
        },
        {
          name: "Tenderloin",
          description:
            "hourly spots inside of an auto shop. Business has been slow so I'm renting out some space for parking. Cheaper and easier than tryin to find parking elsewhere.",
          price: 5,
          available: true,
          userId: 2,
          locationId: 6,
          imageLink:
            "https://s.hdnux.com/photos/75/05/30/16012805/5/rawImage.jpg",
        },
        {
          name: "Ocean Beach",
          description:
            "monthly parking for a compact car. Just dont pull in all the way so I can fit my vespa at the front of the spot.",
          price: 5,
          available: false,
          userId: 3,
          locationId: 7,
          imageLink:
            "https://i.pinimg.com/originals/83/00/3c/83003c7df32d24099d95a6f5d5924ce6.jpg",
        },
        {
          name: "Stow Lake",
          description:
            "driveway parking. hourly. safe and convenient location. Go hiking through golden gate park for the day. ",
          price: 5,
          available: true,
          userId: 3,
          locationId: 8,
          imageLink:
            "https://www.marinmommies.com/sites/default/files/stories/stow-lake-1.jpg",
        },
        {
          name: "Inner Sunset",
          description:
            "Safe garage parking available for day use. I work right upstairs so I can let you in and out when you need. Explore the park, grab some Fresh Squeezed and play darts in the hidden back room at the Shamrock, have some of the best dang chicken wings you'll ever taste at San Tung, order a breakfast special from Howards and get them to deliver it to the Mucky Duck right next door where you can enjoy it with one of their famous bloody marys",
          price: 25,
          available: true,
          userId: 3,
          locationId: 9,
          imageLink:
            "https://i.pinimg.com/originals/c2/89/60/c2896034fcf1491bccd5f1c3faf14bda.jpg",
        },
        {
          name: "Civic Center",
          description: "my work parking spot. very safe place to park",
          price: 13,
          available: true,
          userId: 2,
          locationId: 10,
          imageLink:
            "https://cdn.funcheap.com/wp-content/uploads/2012/08/Market-Landscape-Small-1024x871.jpg",
        },
        {
          name: "Chelsea Market",
          description: "parking in the back behind my business.",
          price: 17,
          available: true,
          userId: 4,
          locationId: 11,
          imageLink: "https://media.timeout.com/images/105683484/image.jpg",
        },
        {
          name: "Echo Park",
          description: "a dirt alley next to Sunset Beer.",
          price: 7,
          available: true,
          userId: 4,
          locationId: 12,
          imageLink:
            "https://static01.nyt.com/images/2019/11/12/realestate/12LIVING-CA-ECHOPARK-slide-KUMX/12LIVING-CA-ECHOPARK-slide-KUMX-superJumbo.jpg",
        },
        {
          name: "close to university",
          description:
            "cheap uncompetitive parking for reliable parking for an all-nigher at the library or the school sportsball game tonight",
          price: 3,
          available: true,
          userId: 4,
          locationId: 13,
          imageLink:
            "https://i.insider.com/590768992f6ae45e008b5897?width=1100&format=jpeg&auto=webp",
        },
        {
          name: "Capitol Hill",
          description: "day parking in Capitol Hill",
          price: 11,
          available: true,
          userId: 4,
          locationId: 14,
          imageLink:
            "https://www.tripsavvy.com/thmb/5P2BBlvYgYXv0kUSxlbed4VJDKQ=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6B3A6832-5c6349a2c9e77c0001662817.jpg",
        },
        {
          name: "Logan Square",
          description:
            "garage parking. dont stress out trying to park in this busy area. just park here so you can focus on having fun",
          price: 20,
          available: true,
          userId: 4,
          locationId: 15,
          imageLink:
            "https://cdn.vox-cdn.com/uploads/chorus_asset/file/16072066/logansquare_051618_18_76240634.jpg",
        },
        {
          name: "French Quarter",
          description: "safe parking while you wait in line for beignets",
          price: 8,
          available: true,
          userId: 4,
          locationId: 16,
          imageLink:
            "https://www.tripsavvy.com/thmb/4UoRafyiPOCtLFetynTTQQJS3yc=/2573x2573/smart/filters:no_upscale()/potted-plants-in-balcony-of-building-at-french-quarter-629129963-591da6b53df78cf5fa28a048.jpg",
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
