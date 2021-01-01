const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const {
  setTokenCookie,
  requireAuth,
  restoreUser,
} = require("../../utils/auth");
const { User, Booking, Spot, SpotType } = require("../../db/models");
const { db } = require("../../config");

const router = express.Router();

router.get(
  "/",
  restoreUser,
  asyncHandler(async (req, res) => {
    let id = await req.params.id;
    let spots = await Spot.findAll();

    return res.json({ spots });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const spot = await Spot.findByPk(id);
  })
);

module.exports = router;
