const Flights = require("../models/flightModel");
const path = require("path");

//controller1
const getIndexPage = (req, res) => {
  const parentDirectory = path.dirname(__dirname);
  res.sendFile(parentDirectory + "/pages/indexPage.html");
};

//controller2
const getFlightPrices = async (req, res) => {
  const querySource = req.query.source || req.query.Source;
  const queryDestination = req.query.destination || req.query.Destination;
  const queryDate = req.query.date || req.query.Date;

  try {
    const flight = await Flights.findOne({
      source: querySource,
      destination: queryDestination,
      date: queryDate,
    });
    res.status(200).json(flight.flightPrice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getFlightPrices, getIndexPage };
