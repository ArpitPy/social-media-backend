const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require('./routes/users');
const userAuth = require('./routes/auth');
const postRoute = require('./routes/posts');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to Database");
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoutes);
app.use("/api/auth", userAuth);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 8800;

app.listen(port, () => console.log(`Listening on localhost ${port}`));
