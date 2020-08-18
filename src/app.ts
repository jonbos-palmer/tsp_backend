import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

const userRoutes = require("../src/routes/user");
// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch((err) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    );
    // process.exit();
  });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRoutes);

// app.use(
//   express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// );

export default app;
