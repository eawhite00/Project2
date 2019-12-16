// For this to work:
// - Create a table named 'songs' that holds all the songs in our database.
// - Create a table named 'users' that holds usernames and passwords of our users.

var db = require("../models");

module.exports = function(app) {
  // Get all favorite songs where the userId in the database matches the userId param. Include a join from the 'users' table so we have a grab on the foreign/primary keys.
  app.get("/api/favorites/:userId", function(req, res) {
    db.Song.findAll({
      where: {
        userId: req.params.userId
      },
      include: [db.users]
    }).then(function(dbFavsResult) {
      res.json(dbFavsResult);
    });
  });

  // Get 10 random songs from our database and list them out in JSON format. I'm thinking we can then format this data as an array and loop through it on the front-end and display them as questions to the user.
  app.get("/api/random-songs", function(req, res) {
    db.Song.findAll({ order: db.Sequelize.literal("rand()"), limit: 10 }).then(
      function(randomSongs) {
        console.log(randomSongs);
        res.json(randomSongs);
      }
    );
  });

  // Post method for creating a login and storing the information in our database.
  // ** Still need to create the model for 'users'. **
  app.post("/api/login", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(username) {
      console.log(username);
      res.json(username);
    });
  });

  // Delete a favorite song by id
  app.delete("/api/favorites/:id", function(req, res) {
    db.Song.destroy({ where: { id: req.params.id } }).then(function(deletion) {
      res.json(deletion);
    });
  });
};

// *NOT SURE IF THIS IS NEEDED **
// app.post("/api/favsong", function(req, res) {
//   db.songs
//     .create({
//       songName: req.body.name,
//       artistName: req.body.artist,
//       songDetails: req.body.details
//     })
//     .then(function(response) {
//       console.log(response);
//       res.json({ id: response.insertId });
//     });
// });
