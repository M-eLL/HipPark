const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { User, Booking, Spot, SpotType, Location } = require("../../db/models");
const { db } = require("../../config");

const router = express.Router();

router.get(
  "/",
  restoreUser,
  asyncHandler(async (req, res) => {
    let spots = await Spot.findAll({
      include: [Location],
    });
    res.json({ spots });
  })
);

router.get(
  "/:id",
  restoreUser,
  asyncHandler(async (req, res) => {
    let id = await req.params.id;
    let spots = await Spot.findAll({
      include: [Location],
    });

    return res.json({ spots });
  })
);

// router.put(
//   "/spots/:spotId",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const newBookedSpot = await Spot.update();
//     res.json({ newBookedSpot });
//   })
// );
module.exports = router;
