# Assignment: Data Modeling

Now that you've learned about relational databases and SQL, let's put together what we've learned and create a database.

## Submission Process

- Once you are finished, or the due date has arrived, please export your entire database as a SQL file and include a copy of this file with your example queries.
- You can use CLI [psql](https://www.postgresql.org/docs/9.1/backup-dump.html) or a [GUI app like pgadmin](https://www.pgadmin.org/) to export the file
- Add them to a new folder in your assignments repo
- Make a pull request


## App Domain

The domain is similar to Instagram. You might want to read through the queries first to decide how best to store the data.


## Tables & Data

- Each **User** has a username
  - since this username can change so you should also include a primary key that will not change (its format is up to you)
  - also store their email so we can send them messages
  - the date they joined is stored so we can show how long they've been a member
- Users can upload zero to many **Photos**
  - Store the URL of a photo already on the internet (we will not store the photos themselves)
  - Store the date the photo was added
  - Each photo should belong to one and only one user
- Users can Heart a photo
  - Store the time this like occurred
- Users can Un-Heart a photo


## Queries

After designing and creating your tables above, include SQL for the following queries 

### Creating/Updating Data

1. Insert a new user that is joining the platform

   ```sql
   INSERT INTO users VALUES (<primary key>, userName, email, date_joined);
   ```

1. Insert record that a user uploaded a photo of a given url

   ```sql
   INSERT INTO photos VALUES (<primary key>, user_id, url, date_added);
   ```

3. Update the database to record that a user Heart'ed a specific photo  

   ```sql
   INSERT INTO hearted VALUES (user_id, photo_id);
   ```

   

### Reading Data

1. Find all the photos of one user (given their username)

   ```sql
   SELECT users.userName, photos.url FROM users
   INNER JOIN photos
   	ON users.user_id = photos.user_id
   WHERE users.userName = 'username';
   ```

1. Find all the photos that one user Hearted

   ```sql
   SELECT photos.photo_id FROM users
   INNER JOIN hearted
   	ON hearted.user_id = users.user_id
   INNER JOIN photos
   	on hearted.photo_id = photos.photo_id
   WHERE users.userName = 'username';
   ```

1. Find all the Hearts for a given photo (given its primary key)

   (note: replace PHOTO_ID with the actual photo_id)

   ```sql
   SELECT COUNT(user_id) AS Total_Hearts FROM hearted 
   WHERE hearted.photo_id = PHOTO_ID;
   ```

   alternatively to get see the user's name of the user who hearted the photo:

   ```sql
   SELECT users.user_id, users.userName FROM users
   INNER JOIN hearted
   	ON hearted.user_id = users.user_id
   WHERE hearted.photo_id = PHOTO_ID;
   ```

   

## End of Requirements

If you have completed the above, or the due date has arrived, please submit according to instructions above. If you want more challenges, please continue.

## Bonus Queries

1. Find the user with the most Hearts across all their photos

   ```sql
   SELECT users.userName, COUNT(hearted.user_id) FROM photos
   INNER JOIN hearted
   	ON hearted.photo_id = photos.photo_id
   INNER JOIN users
   	ON photos.user_id = users.user_id
   GROUP BY users.user_id;
   ```

   

1. Find the single most recently added photo of one user (given their username)

1. Find the photo with the most Hearts

   

## Bonus

- Make the database enforce that the usernames:
  - are unique
  - can be used in a url easily (no spaces, no URL characters - e.g. it can't contain a '?'
  or '/' since those having meaning in a URL)
- Create a way to store which users follow each other (hint: following is unidirectional)