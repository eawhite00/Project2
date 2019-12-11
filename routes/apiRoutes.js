var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/favsong", function(req, res) {
    db.favoriteSongs
      .create({
        songName: req.body.name,
        artistName: req.body.artist,
        songDetails: req.body.details
      })
      .then(function(response) {
        console.log(response);
        res.json({ id: response.insertId });
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
