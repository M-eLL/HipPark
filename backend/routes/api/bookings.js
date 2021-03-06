const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Booking } = require("../../db/models");

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
  "/:spotId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.spotId);
    const userId = parseInt(req.body.userId);
    const newBooking = await Booking.create({
      userId,
      spotId,
      statusId: 8,
      startDate: new Date(),
      endDate: new Date(),
    });
    res.json({ newBooking });
  })
);

router.put(
  "/spots/:spotId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const spotId = req.params.spotId;
    const { userId, nickname } = req.body;
    const booking = await Booking.findOne({
      where: { spotId, userId },
    });
    await booking.update({ nickname: nickname });
    res.json({ booking });
  })
);

module.exports = router;
