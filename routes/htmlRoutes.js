var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.render("login", {});
  });

  app.get("/main", function(req, res) {
    res.render("index", {
      msg: "Spotifind Me!"
    });
    // I think we'll also need to do a sequelize query for the song database.  this one is for favorite songs
    // db.favoriteSongs.findAll({}).then(function(response) {
    //   res.render("index", {
    //     msg: "Spotifind Me!",
    //     favoriteSongs: response
    //   });
    // });
  });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function(req, res) {
  //     res.render("404");
  //   });
};
