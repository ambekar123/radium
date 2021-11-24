const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
   mobile: Number,    
    password: String,
    isDeleted: {type: Boolean, default: false},
    email:String,
  },
    { timestamps: true }
);

module.exports = mongoose.model("UserName", userSchema);
