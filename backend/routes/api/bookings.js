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

router.delete(
  "/:spotId/:userId",
  asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.spotId);
    const userId = parseInt(req.params.userId);
    const booking = await Booking.findOne({
      where: {
        spotId,
        userId,
      },
    });
    const bookingId = booking.id;
    await booking.destroy();
    res.json({ bookingId });
  })
);

router.post(
  "/:booking/id",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json({ newBooking: bookingObj });
  })
);

module.exports = router;
