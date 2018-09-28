const express = require("express");
const mongoose = require("mongoose");
const Contact = require("../models/contact");

const router = express.Router();

// Get contacts from db
router.get("/contacts", (req, res) => {
  Contact.find({}).exec((err, contacts) => {
    if (err) {
      res.send({ message: "Failed to fetch contacts" });
    }
    res.send(contacts);
  });
});

// Get specific contact
router.get("/contacts/:id", (req, res) => {
  Contact.findOne({ _id: req.params.id }).exec((err, contact) => {
    if (err) {
      res.send({ message: "Failed to fetch contacts" });
    }
    res.send(contact);
  });
});

// Save contact to db
router.post("/contacts", (req, res) => {
  Contact.create(req.body)
    .then(contact => {
      res.json(contact);
    })
    .catch(err => console.log(err));
});

// Update contact in dbs
router.put("/contacts/:id", (req, res) => {
  Contact.findByIdAndUpdate({ _id: req.params.id }, req.body).then(contact => {
    res.send(contact);
  });
});

// Delete contact from db
router.delete("/contacts/:id", (req, res) => {
  Contact.findByIdAndRemove({ _id: req.params.id }).then(contact => {
    res.send(contact);
  });
});

module.exports = router;
