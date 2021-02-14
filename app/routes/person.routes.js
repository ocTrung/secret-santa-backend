module.exports = app => {
  const people = require("../controllers/person.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", people.create);

  // Retrieve all Tutorials
  router.get("/", people.findAll);

  // Retrieve all published Tutorials
  router.get("/published", people.findAllPublished);

  // Retrieve all published Tutorials
  router.put("/generate", people.generateGiftees);

  // Retrieve a single Tutorial with id
  router.get("/:id", people.findOne);

  // Update a Tutorial with id
  router.put("/:id", people.update);

  // Delete a Tutorial with id
  router.delete("/:id", people.delete);

  // Delete all Tutorials
  router.delete("/", people.deleteAll);

  app.use('/api/people', router);
};