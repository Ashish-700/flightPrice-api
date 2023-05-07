const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightPriceSchema = new Schema({
  indigo: String,
  airAsia: String,
  vistara: String,
});

const flightsSchema = new Schema({
  Source: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  flightPrice: flightPriceSchema,
});

module.exports = mongoose.model("Flights", flightsSchema);
