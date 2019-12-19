// fetch user data

var genrePrompt = function(userIdResult) {
  var user = userIdResult;
  console.log("within genresorter" + userIdResult);

  var storageA;
  var storageC;
  var percentage;
  var rapRate;
  var rockRate;
  var popRate;
  var altRate;
  var countryRate;
  var winnerName;
  var secondName;

  // Score Rock
  ratingStore(user.rockLike, user.rockDislike, rockRate);
  rockRate = [percentage, "Rock"];

  // Score Rap
  ratingStore(user.rapLike, user.rapDislike, rapRate);
  rapRate = [percentage, "Rap"];

  // Score Pop
  ratingStore(user.popLike, user.popDislike, popRate);
  popRate = [percentage, "Pop"];

  // Score Country
  ratingStore(user.countryLike, user.countryDislike, countryRate);
  countryRate = [percentage, "Country"];

  // Score Alternative
  ratingStore(user.alternativeLike, user.alternativeDislike, altRate);
  altRate = [percentage, "Alternative"];

  // Display current scores
  logRatings();

  // Store percentages and names for comparing
  var holder = [rockRate, rapRate, popRate, countryRate, altRate];

  // Run compare function and display results
  compare();

  function compare() {
    checkList = [];

    //Push percentages to array to sort
    for (i = 0; i < holder.length; i++) {
      checkList.push(holder[i][0]);
    }

    //Sort percentages from biggest to smallest
    checkList.sort(function(a, b) {
      return b - a;
    });

    //Find the genre name of the highest percentage holder
    for (i = 0; i < holder.length; i++) {
      if (checkList[0] === holder[i][0]) {
        console.log("***** HOLDER I I IS " + holder[i][1]);
        return holder[i][1];
      }
    }

    //Find the genre name of the second highest percentage holder
    for (i = 0; i < holder.length; i++) {
      if (checkList[1] === holder[i][0]) {
        secondName = holder[i][1];
      }
    }

    //Log the results
    console.log(
      "Your favorite genre is " +
        winnerName +
        " with a " +
        checkList[0] +
        "% like rating"
    );
    console.log(
      "Your second favorite genre is " +
        secondName +
        " with a " +
        checkList[1] +
        "% like rating"
    );
  }

  // Code to store and process song ratings
  function ratingStore(like, dislike) {
    storageA = parseFloat(like);

    storageC = parseFloat(dislike) + storageA;

    // Math to figure out percentages
    percentage = storageA / storageC;
    percentage = percentage * 100;
    percentage = Math.round(percentage);
  }

  function logRatings() {
    console.log("Rock like rating is: " + rockRate[0] + "%");
    console.log("Rap like rating is: " + rapRate[0] + "%");
    console.log("Pop like rating is: " + popRate[0] + "%");
    console.log("Country like rating is: " + countryRate[0] + "%");
    console.log("Alternative like rating is: " + altRate[0] + "%");
  }
};

exports.genrePrompt = genrePrompt;
