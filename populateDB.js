var populate = function(db) {
  db.User.bulkCreate([
    { username: "THawk", password: "pr0sk8", rockLike: 1 },
    { username: "starwars", password: "starwars", popLike: 1 },
    { username: "TacoTruck", password: "horchata", altLike: 1 }
  ]);

  db.Song.bulkCreate([
    { songName: "Satisfaction", genre: "Rock", artist: "The Rolling Stones" },
    { songName: "Stairway to Heaven", genre: "Rock", artist: "Led Zeppelin" },
    { songName: "Light My Fire", genre: "Rock", artist: "The Doors" },
    { songName: "Purple Haze", genre: "Rock", artist: "	Jimi Hendrix" },
    {
      songName: "Tonight, Tonight",
      genre: "Rock",
      artist: "Smashing Pumpkins"
    },
    { songName: "Bohemian Rhapsody", genre: "Rock", artist: "Queen" },
    { songName: "London Calling", genre: "Rock", artist: "The Clash" },
    { songName: "California Girls", genre: "Rock", artist: "The Beach Boys" },
    { songName: "Don't Speak", genre: "Rock", artist: "No Doubt" },
    { songName: "Pictures of You", genre: "Rock", artist: "The Cure" },
    {
      songName: "The Kids Aren't Alright",
      genre: "Rock",
      artist: "The Offspring"
    },
    {
      songName: "Cut to the Feeling",
      genre: "Pop",
      artist: "Carly Rae Jepsen"
    },
    { songName: "Toxic", genre: "Pop", artist: "Britney Spears" },
    { songName: "Thank U, Next", genre: "Pop", artist: "Ariana Grande" },
    { songName: "Good As Hell", genre: "Pop", artist: "Lizzo" },
    { songName: "You Belong With Me", genre: "Pop", artist: "Taylor Swift" },
    { songName: "Like a Prayer", genre: "Pop", artist: "Madonna" },
    { songName: "Single Ladies", genre: "Pop", artist: "Beyoncé" },
    { songName: "Dancing On My Own", genre: "Pop", artist: "Robyn" },
    {
      songName: "Can't Get You Out of My Head",
      genre: "Pop",
      artist: "Kylie Minogue"
    },
    { songName: "Mamma Mia", genre: "Pop", artist: "ABBA" },
    { songName: "Party in the USA", genre: "Pop", artist: "Miley Cyrus" },
    { songName: "Truth Hurts", genre: "Rap", artist: "Lizzo" },
    { songName: "Old Town Road", genre: "Rap", artist: "Lil Nas X" },
    { songName: "Money in The Grave", genre: "Rap", artist: "Drake" },
    { songName: "Goodbyes", genre: "Rap", artist: "Post Malone" },
    { songName: "Cash Shit", genre: "Rap", artist: "Megan Thee Stallion" },
    { songName: "Caro", genre: "Rap", artist: "Bad Bunny" },
    { songName: "ROXANNE", genre: "Rap", artist: "Arizona Zervas" },
    {
      songName: "Smells Like Teen Spirit",
      genre: "Alternative",
      artist: "Nirvana"
    },
    { songName: "Mitski", genre: "Alternative", artist: "Nobody" },
    { songName: "Hysteria", genre: "Alternative", artist: "Muse" },
    {
      songName: "When I Come  Around",
      genre: "Alternative",
      artist: "Green Day"
    },
    { songName: "Feel Good Inc", genre: "Alternative", artist: "Gorillaz" },
    { songName: "In The End", genre: "Alternative", artist: "Linkin Park" },
    { songName: "Pompeii", genre: "Alternative", artist: "Bastille" },
    { songName: "Demons", genre: "Alternative", artist: "Imagine Dragons" },
    { songName: "Love And Anger", genre: "Alternative", artist: "Kate Bush" },
    {
      songName: "Seven Nation Army",
      genre: "Alternative",
      artist: "The White Stripes"
    },
    {
      songName: "All The Small Things",
      genre: "Alternative",
      artist: "Blink-182"
    },
    {
      songName: "Before He Cheats",
      genre: "Country",
      artist: "Carrie Underwood"
    },
    { songName: "Need You Now", genre: "Country", artist: "Lady Antebellum" },
    { songName: "Jolene", genre: "Country", artist: "Dolly Parton" },
    { songName: "Rainbow", genre: "Country", artist: "Kacey Musgraves" },
    {
      songName: "Friends in Low Places",
      genre: "Country",
      artist: "Garth Brooks"
    },
    {
      songName: "Here You Come Again",
      genre: "Country",
      artist: "Dolly Parton"
    },
    {
      songName: "There Goes My Everything",
      genre: "Country",
      artist: "Kane Brown"
    }
  ]);
};
exports.populate = populate;
