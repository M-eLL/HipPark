const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Booking, Spot } = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const booking = await Booking.findByPk(id);

    res.json(booking);
  })
);

router.post(
  "/:booking/id",
  requireAuth,
  asyncHandler(async (req, res) => {
    // const user = await User.findByPk(req.body.userId);
    // const spot = await Spot.findByPk(req.params.spotId);
    const bookingObj = req.body.booking;
    const newBooking = await Booking.create(bookingObj);
    res.json({ newBooking: bookingObj });
  })
);

module.exports = router;
