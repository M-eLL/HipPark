const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { User, Booking, Spot } = require("../../db/models");
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

// const userId = parseInt(req.session.auth.userId);
// let bookings = await db.Booking.findByPk(bookingId);
// bookings = bookings.toJSON();

router.get(
  "/:id/bookings",
  restoreUser,
  asyncHandler(async (req, res) => {
    const user = await req.user.toJSON();
    // console.log(userId);
    let bookings = await Booking.findAll({
      where: { userId: user.id },
    });
    bookings = await bookings.map((record) => record.toJSON());
    console.log("(!!!!!!!!!!!!!!!!!!!!)", bookings);
    return res.json(bookings);
    // return res.json({});
  })
);

module.exports = router;
