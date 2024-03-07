//For testing purposes
// console.log("Hello there")

const express = require("express");
const productRouter = require("./routes/product.route");
const { default: mongoose } = require("mongoose");
const app = express();
//To enable or to extract the crendtentials form .env file
require("dotenv").config();

//Helps in accessing the data on console in json format
app.use(express.json());

//Defining routes to handle the multiple CRUD operations
app.use("/api/product", productRouter);

//Connection to Database
mongoose.connect(process.env.MONGO_URI).then(() => {
  try {
    app.listen(8082, () => {
      console.log(`Connected to Database and Server is up at 8082`);
      // return res.send("Server is Running");
    });
  } catch (error) {
    console.log("Couldn't Connect to dartabase");
  }
});
