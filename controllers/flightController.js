const Flights = require("../models/flightModel");

const getFlights = async (req, res) => {
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

module.exports = getFlights;
