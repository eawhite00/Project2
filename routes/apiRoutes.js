// NEEDED ROUTES
// Post to User when creating users **DONE**
// Get for a single random song **DONE**
// Get for a single recommended song. Read the user table to determine what your most liked genre is and display a new song with that genre. **DONE**
// Post to User? when the user likes or dislikes a song and join that with the ratings table
// Get for all your liked songs
var Sequelize = require("sequelize");
var db = require("../models");

module.exports = function(app) {
  // Get all liked songs where the userid in the database matches the userid param. Include a join from the 'users' table so we have a grab on the foreign/primary keys.
  app.get("/api/favorites/:userid", function(req, res) {
    db.Song.findAll({
      where: {
        userid: req.params.userid
      },
      include: [db.users]
    }).then(function(dbFavsResult) {
      res.json(dbFavsResult);
    });
  });

  // Get one random song from our database.
  app.get("/api/random-song", function(req, res) {
    findRandomSong(null, function(randomSong) {
      // var finalSong = {
      //   song: randomSong.song,
      //   artist: "test",
      //   id: "test"
      // };
      // res.json(finalSong);
      res.json(randomSong);
    });
    // db.Song.findOne({ order: "rand()" }).then(function(randomSong) {
    //   console.log(randomSong);
    //   res.json(randomSong);
    // });
  });

  // Get for a recommended song based on data for the user.
  app.get("/api/recommended-song/:id", function(req, res) {
    db.User.findOne({
      where: {
        userid: req.params.id
      },
      attributes: [
        "rockLike",
        "rockDislike",
        "rapLike",
        "rapDislike",
        "popLike",
        "popDislike",
        "countryLike",
        "countryDislike",
        "altLike",
        "altDislike"
      ]
    }).then(function(userIdResult) {
      // var favoriteGenre = 'Beth's favorite genre function'(userIdResult);
      findRandomSong(favoriteGenre, function(randomSong) {
        res.json(randomSong);
      });
    });
  });

  // Post method for creating a login and storing the information in our database.
  app.post("/", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(username) {
      console.log(username);
      res.json(username);
    });
  });

  // Delete a liked song by id
  app.delete("/api/favorites/:id", function(req, res) {
    db.Song.destroy({ where: { id: req.params.id } }).then(function(deletion) {
      res.json(deletion);
    });
  });
};

// Reusable function to find a random song or a recommended song depending on if the 'where' parameter    is populated.
function findRandomSong(genre, cb) {
  var whereOption = genre ? { genre: genre } : {};

  db.Song.findOne({
    order: Sequelize.literal("rand()"),
    where: whereOption
  }).then(function(randomSong) {
    console.log(randomSong);
    cb(randomSong);
  });
}

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
