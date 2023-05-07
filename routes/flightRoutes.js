const express = require("express");
const {
  getFlightPrices,
  getIndexPage,
} = require("../controllers/flightController");

//init route
const router = express.Router();

//getting index page
router.get("/", getIndexPage);

//getting flight prices
router.get("/flight-prices", getFlightPrices);

module.exports = router;
