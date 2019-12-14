// fetch user data
var user = IMPORTUSERDATA;

var storageA;
var storageC;
var percentage;
var rapRate;
var rockRate;
var popRate;
var altRate;
var countryRate;

ratingStore(user.rapLike, user.rapDislike, rapRate);
rapRate = percentage;
ratingStore(user.countryLike, user.countryDislike, countryRate);
countryRate = percentage;
ratingStore(user.popLike, user.popDislike, popRate);
popRate = percentage;
ratingStore(user.rockLike, user.rockDislike, rockRate);
rockRate = percentage;
ratingStore(user.altLike, user.altDislike, altRate);
altRate = percentage;
logRatings();

// Code to store and process song ratings
function ratingStore(like, dislike) {
  //Store like count in slot A
  storageA = parseFloat(like);
  //Store total song count in slot C
  storageC = parseFloat(dislike) + storageA;
  // Math to figure out percentages
  percentage = storageA / storageC;
  percentage = percentage * 100;
  percentage = Math.round(percentage);
}

// Logs score of genres
function logRatings() {
  console.log("Rock like rating is: " + rockRate + "%");
  console.log("Country like rating is: " + countryRate + "%");
  console.log("Rap like rating is: " + rapRate + "%");
  console.log("Alternative like rating is: " + altRate + "%");
  console.log("Pop like rating is: " + popRate + "%");
}
