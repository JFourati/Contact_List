const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Contact name is reqired"]
  },
  mobile: {
    type: Number,
    required: [true, "Contact mobile number is reqired"]
  },
  email: {
    type: String
  }
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
