// fetch user data
var user = IMPORTUSERDATA;

ratingStore(user.rapLike, user.rapDislike);
ratingStore(user.countryLike, user.countryDislike);
ratingStore(user.popLike, user.popDislike);
ratingStore(user.rockLike, user.rockDislike);
ratingStore(user.altLike, user.altDislike);

var storageA;
var storageB;
var percentage;

function ratingStore(like, dislike) {
  // Rock Storage
  storageA = parseFloat(like);
  storageB = parseFloat(dislike);
  ratingMath();
  rockRate = percentage;

  // Country Storage
  storageA = parseFloat(like);
  storageB = parseFloat(dislike);
  ratingMath();
  countryRate = percentage;

  // Rap Storage
  storageA = parseFloat(like);
  storageB = parseFloat(dislike);
  ratingMath();
  rapRate = percentage;

  // Alternative Storage
  storageA = parseFloat(like);
  storageB = parseFloat(dislike);
  ratingMath();
  altRate = percentage;

  // Pop Storage
  storageA = parseFloat(like);
  storageB = parseFloat(dislike);
  ratingMath();
  popRate = percentage;

  // console log ratings
  logRatings();
}

// Math to figure out percentages
function ratingMath() {
  var storageC = storageA + storageB;

  // divide likes by total to get like percentage
  percentage = storageA / storageC;
  percentage = percentage * 100;
  percentage = Math.round(percentage);
}

function logRatings() {
  console.log("Rock like rating is: " + rockRate + "%");
  console.log("Country like rating is: " + countryRate + "%");
  console.log("Rap like rating is: " + rapRate + "%");
  console.log("Alternative like rating is: " + altRate + "%");
  console.log("Pop like rating is: " + popRate + "%");
}
