const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { User, Booking, Spot, Location } = require("../../db/models");
const { db } = require("../../config");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// get user's bookings
router.get(
  "/:id/bookings",
  restoreUser,
  asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();
    let bookings = await Booking.findAll({
      where: { userId: user.id },
      include: [{ model: Spot, include: [Location] }, User],
    });
    bookings = await bookings.map((record) => record.toJSON());
    return res.json(bookings);
  })
);

// get user's booked spots
router.get(
  "/:id/spots",
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.params.id;
    let spots = await Spot.findAll({
      where: { userId },
    });
    res.json(spots);
  })
);

module.exports = router;
