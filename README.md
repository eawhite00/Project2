# SpotifindMe

## Try the app @ https://immense-caverns-47364.herokuapp.com/

## Contributors
Kensen Hirohata - Front End
Elizabeth Holmes - Song Selection Algorithm
Jeff Huang - API Routes
Elliott White - Data Model

## App Overview

This application allows users to listen to and discover new music. Users are prompted to listen to and either like or dislike a random song, and the application tracks their preferences to recommend music they’re more likely to be interested in. 

## Using the App

### App installation and Setup

Pull the repo and do a run “npm install” to install all dependencies. If you’re running your database locally, you’ll need to make enter your sql server root password into the “password” field in config.json. Once you’ve set this up, run “node server.js” and navigate to “http://localhost:3000/” in your browser.

### Using the App

When you first navigate to the app, you’ll be prompted to create an account or log in. If you just wish to quickly view and test the features, you can use the prepopulated test account:
Username: starwars
Password: starwars

When creating a new account, you’ll be prompted to choose your favorite genre of music from the acceptable fields to prepopulate your account with some data about your preferences.

Once you’ve logged in, you can select “Give me a random song!” to have a song suggested randomly, or “Recommend a song for me!” to have a song recommended to you based on your like/dislike history. You’ll be able to like or dislike each song prompted to you. Clicking “Change Module” gives you the option to change between random and recommended songs. 

## Technologies

This section is an overview of the individual technologies we used.

### Express

We decided to utilize Express to handle all of the routing that our app requires. Since the app has multiple pages and handles data, multiple routing functions were required to achieve full functionality. Below are a few examples of the routes that we used. 

* GET: GET routes were used to grab both random and recommended songs from our database.

* POST: We used POST routes twice for our user authentication -- Once for user account creation and another for cross-checking our database for an existing user.

* PUT: PUT routes are used in multiple places. Whenever a user likes or dislikes a song, the database updates the user’s song data accordingly.

* DELETE: One DELETE route is in the code, but is not utilized as of yet. The intention is to remove a previously liked song from the user’s list of favorite songs should the user choose to do so.

### AJAX

We used AJAX to query our database from the frontend. This is used for the login as well as querying song data from the database and displaying it in the client.

### Handlebars

Handlebars was leveraged mainly to serve (static) HTML pages.  The original intent was to use handlebars to render each one of a user’s favorite songs.  However, the favorite songs section was incomplete (mainly on the front end), and was not implemented in the app at launch.  Other than that, there isn’t much data that would need to be rendered in “list” fashion.   

### Node Spotify API

Node Spotify API is an NPM package that we dynamically generate Spotify data from. The one-piece of data we needed from the API is the Spotify preview link. By having a hold of this link, we were able to manipulate it in our code to display the Spotify preview player for each song.

### MySQL / Sequelize

The application uses Sequelize as an ORM tool to connect to a MySQL database. There are three tables in the database:
*Users - Stores user information and tracks user likes and dislikes
*Ratings - Contains the individual user likes/dislikes of songs
*Songs - Contains data about each song the application can suggest

The populateDB.js script runs on the application’s launch to seed the Songs table with data.

### Chalk

During our debugging process we found that running our application created massive console logs as data was inserted into the database, making it challenging to identify what was happening when and console log errors. Chalk is a simple library that lets you color code to highlight different messages in your console. We removed extra console logs for the final version of this app, but we used it while we were debugging to help highlight the logs we were looking for.

### jQuery

Extensive use of jQuery is present in this application. On the front end, the following functions utilize jQuery and its associated Ajax (Get/Post) methods, depending on context and purpose for each visual component:  

* **Creating a New Account** (POST with username and password, followed by a nested PUT to this same SQL row (which was POST’ed with initial song genre clicked)
* **Logging in** (POST with username and password, callback to set a userID in the response in localstorage)
* **Getting a song** (GET a random song, and use song data in local variables for displaying on screen)
* **Liking/Disliking a Song** (PUT with current song id, and updating the “score” for which genre the song belongs to)
* **(UNUSED) Favoriting a Song** (POST with current song id, etc, and creating a new row for a user’s favorite songs)

### Sorting Algorithm

This algorithm took the stored like and dislike data and used it to identify which genres the users prefer. It identifies the user’s preference by finding the like percentage of each genre. After each genre’s like percentage has been calculated it then compares them to identify the most liked genre. This is used to prompt a random song from their preferred genre.

## Improvement Areas

Make new friends!
This feature will allow users to connect to each other based on their music tastes. Using the same matching algorithm we used to link users to songs of their preference we will link to other like-minded individuals.

View your liked songs!
This feature will create a new page that will allow users to quickly see a comprehensive list of all the songs they have liked and even search for specific songs.

Share your music history!
This feature will allow users to share their favorite songs to their respective social media accounts. 

View your stats!
With this feature, the user can take an in-depth look at their music tastes. Which country’s music do they listen to the most? Which genre is their favorite? How does it compare to the other genres they listen to? Which songs have they listened to the most? All these questions and more will be answered via our View your Stats feature.


