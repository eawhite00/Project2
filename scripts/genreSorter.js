// fetch user data
var user = IMPORTUSERDATA;

ratingStore();

var storageA;
var storageB;
var percentage;

function ratingStore() {
  // Rock Storage
  storageA = parseFloat(user.rockLike);
  storageB = parseFloat(user.rockDislike);
  ratingMath();
  rockRate = percentage;

  // Country Storage
  storageA = parseFloat(user.countryLike);
  storageB = parseFloat(user.countryDislike);
  ratingMath();
  countryRate = percentage;

  // Rap Storage
  storageA = parseFloat(user.rapLike);
  storageB = parseFloat(user.rapDislike);
  ratingMath();
  rapRate = percentage;

  // Alternative Storage
  storageA = parseFloat(user.altLike);
  storageB = parseFloat(user.altDislike);
  ratingMath();
  altRate = percentage;

  // Pop Storage
  storageA = parseFloat(user.popLike);
  storageB = parseFloat(user.popDislike);
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
