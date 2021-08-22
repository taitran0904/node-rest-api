const express = require("express");
const router = express.Router();
const User = require('../model/User')


//register
router.post("/register", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
//     username: "taitran100920",
//     email: "tai123@gmail.com",
//     password: "123456"
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);				 	        
  }
});

module.exports = router;
