// NEEDED ROUTES
// Post to User when creating users **DONE**
// Get for a single random song **DONE**
// Get for a single recommended song. Read the user table to determine what your most liked genre is and display a new song with that genre. **DONE**
// Post to User? when the user likes or dislikes a song **DONE**
// Get for all your liked songs
// GET request for the spotify search
var Sequelize = require("sequelize");
var db = require("../models");

//require("dotenv").config();

//var keys = require("../keys");

var keys = {
  id: "2eecd783aacc4761818529ac1433a35e",
  secret: "a73eb004d49344f199327df1da7dca08"
};

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys);

module.exports = function(app) {
  // Get all liked songs where the userid in the database matches the userid param. Include a join from the 'users' table so we have a grab on the foreign/primary keys.
  app.get("/api/favorites/:id", function(req, res) {
    db.Song.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbFavsResult) {
      res.json(dbFavsResult);
    });
  });

  //Post to User when a song is liked
  app.put("/api/decision/like", function(req, res) {
    var columnName = req.body.genre + "Like";
    var data = {};
    console.log(req.body);
    // console.log(columnName);
    data[columnName] = setupLike(columnName);

    db.User.update(data, { where: { id: req.body.id } })
      .then(
        db.Rating.create({
          UserId: req.body.id,
          value: 1,
          songName: req.body.song,
          genre: req.body.genre,
          artist: req.body.artist
        })
      )
      .then(function(dbUpdateResult) {
        console.log(dbUpdateResult);
        res.json(dbUpdateResult);
      });
  });

  // Update the user with a +1 to their favorite genre when they create their account
  app.put("/api/start/like", function(req, res) {
    var columnName = req.body.genre + "Like";
    var data = {};
    console.log(req.body);
    // console.log(columnName);
    data[columnName] = setupLike(columnName);

    db.User.update(data, { where: { id: req.body.id } }).then(function(
      dbUpdateResult
    ) {
      console.log(dbUpdateResult);
      res.json(dbUpdateResult);
    });
  });

  //Post to User when a song is disliked
  app.put("/api/decision/dislike", function(req, res) {
    var columnName = req.body.genre + "Dislike";
    var data = {};
    console.log(req.body);
    // console.log(columnName);
    data[columnName] = setupDislike(columnName);

    db.User.update(data, { where: { id: req.body.id } })
      .then(
        db.Rating.create({
          UserId: req.body.id,
          value: 0,
          songName: req.body.song,
          genre: req.body.genre,
          artist: req.body.artist
        })
      )
      .then(function(dbUpdateResult) {
        console.log(dbUpdateResult);
        res.json(dbUpdateResult);
      });
  });

  // Get one random song from our database.
  app.get("/api/random-song", function(req, res) {
    findRandomSong(null, function(randomSong) {
      spotify.search({ type: "track", query: randomSong.songName }, function(
        err,
        data
      ) {
        if (err) {
          return console.log("Error occurred: " + err);
        }
        var spotifyPath = data.tracks.items;
        console.log(spotifyPath[0].id);
        var finalSong = {
          song: randomSong.songName,
          artist: randomSong.artist,
          genre: randomSong.genre,
          id: spotifyPath[0].id
        };
        //res.json(finalSong);
        res.json(finalSong);
      });
      // db.Song.findOne({ order: "rand()" }).then(function(randomSong) {
      //   console.log(randomSong);
      //   res.json(randomSong);
      // });
    });
  });
  // Get for a recommended song based on data for the user.
  app.get("/api/recommended-song/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
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
      var favoriteGenre = genrePrompt(userIdResult);
      findRandomSong(favoriteGenre, function(randomSong) {
        res.json(randomSong);
      });
    });
  });

  // Post method for creating a login and storing the information in our database.
  app.post("/", function(req, res) {
    db.User.create({
      username: req.body.email,
      password: req.body.password
    }).then(function(newUser) {
      console.log(newUser);
      res.json(newUser);
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

function setupLike(columnName) {
  switch (columnName) {
    case "rockLike":
      return Sequelize.literal("rockLike + 1");
    case "rapLike":
      return Sequelize.literal("rapLike + 1");
    case "alternativeLike":
      return Sequelize.literal("alternativeLike + 1");
    case "countryLike":
      return Sequelize.literal("countryLike + 1");
    case "popLike":
      return Sequelize.literal("popLike + 1");
  }
}

function setupDislike(columnName) {
  switch (columnName) {
    case "rockDislike":
      return Sequelize.literal("rockDislike + 1");
    case "rapDislike":
      return Sequelize.literal("rapDislike + 1");
    case "alternativeDislike":
      return Sequelize.literal("alternativeDislike + 1");
    case "countryDislike":
      return Sequelize.literal("countryDislike + 1");
    case "popDislike":
      return Sequelize.literal("popDislike + 1");
  }
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
