<img width="360" alt="Screen Shot 2021-03-15 at 12 25 22 PM" src="https://user-images.githubusercontent.com/68613271/111188817-d5de5c00-858b-11eb-96e0-c446ea4291fa.png">


# Hip Park
Hip Park is a clone of Hipcamp that allows a user to discover and book convenient parking spots that suit their lifestyle.

## Technologies
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
<a href="https://www.heroku.com/"><img src="https://img.shields.io/badge/-Heroku-430098?logo=Heroku" /></a>
<a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express.js-000000?logo=Express" /></a>
<a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL" /></a>
<a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=333333" /></a>
<a href="https://redux.js.org/"><img src="https://img.shields.io/badge/-Redux-764ABC?logo=Redux" /></a>
<a href="https://sequelize.org/"><img src="https://img.shields.io/badge/-Sequelize-039BE5" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=ffffff" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>

## Installation
* Clone the GitHub repository.
* Run npm install in the base directory.
* Use  PostgreSQL to create a database user with a password
* cd into the backend directory.
* Create a .env file with: DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, JWT_SECRET, JWT_EXPIRES_IN
* Run npx dotenv sequelize-cli db:create.
* Run npx dotenv sequelize-cli db:migrate.
* Run npx dotenv sequelize-cli db:seed:all.
* Run npm start in both frontend and backend folders to start the server

## Key Features

Spots
* Parking spot information such as price, location, description

Bookings
* Book parking spots
* Add notes to booked spots
* Update notes
* Delete booked spots

## Live Link
https://hippark.herokuapp.com/
