const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://Hamza:Hamza@hamzaproject.6dif7c9.mongodb.net/Movie?retryWrites=true&w=majority&appName=HamzaProject");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adminid: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;