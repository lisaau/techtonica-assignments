# Eventonica With React

Full stack web app to manage events that uses Node, Express, Postgres, and React from [Techtonica's curriculum](https://github.com/Techtonica/curriculum/tree/master/projects/eventonica).

## Set up:

#### Database:

1. Set up the database using PostgreSQL. Make sure you have [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew) installed, which can be installed using [homebrew](https://brew.sh/). Take the eventonica.sql file and restore the database by running:

   ```
   CREATE DATABASE eventonica
   psql eventonica < eventonica.sql 
   ```

#### Express server:

1. Start with `npm install` to install necessary dependencies in the 'express-backend' folder.
2. Create a .env file following the format in .env.example and change USERNAME to the username of your machine. 
3. Run the Express server by running `node index.js`

#### React frontend:

1. Start with `npm install` to install necessary dependencies in the 'react-frontend' folder.
2. Run `npm start` to run the app

## How to use the app:

- Once both servers are running (Express on port 3000 and React on 3001), open [http://localhost:3001](http://localhost:3001/) to view it in the browser.
- Functionalities include adding users and deleting, adding and deleting events, searching events by date and category.

