const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connect");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(1900, () => {
  console.log("hi");
});
