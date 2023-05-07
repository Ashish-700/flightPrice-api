const express = require("express");
require("dotenv").config();
const flightRouter = require("./routes/flightRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

//port
const port = process.env.PORT;

//express app
const app = express();

//middleware
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

//routes
app.use("/flights", flightRouter);

//connect to db and listning
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to db and listing on port", port);
    });
  })
  .catch((err) => console.log(err));
