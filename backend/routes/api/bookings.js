const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Booking, Spot } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.json();
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {})
);

module.exports = router;
