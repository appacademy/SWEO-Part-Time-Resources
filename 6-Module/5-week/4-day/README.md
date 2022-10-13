## User stories will tell the begining to end User experience of your application
- You should at minimum have a user story for each crud functionality of each one of your features
- Include stories for logged in and logged out users
- Start with a small example of how you would like to see that feature used
### Then give Acceptance criteria below
- acceptance criteria will be a description of everything that will happen to make this user experience possible 

# Example of a one features user stories for Instagram 

## 1. POSTS
### CREATE
- As a logged in user, I would like to make a post so that I can share my day with other people.

#### Acceptance Criteria: I should be able to...
- Click a button on the home/feed page that takes me to a 'create new post' form
- Click a button on my user page that takes me to a 'create new post' form
- Choose the picture/video that I want to post
- Know whenever the picture/video is done loading (uploading to S3)
- Enter in a caption for the post
- Receive error messages if I type too many characters for my caption
- Click a button to cancel the upload if needed and get redirected back to the page I came from
- Click a button that uploads my post when I'm done
- See my new post on my feed after getting redirected to the feed
- See the new post on my profile page
### READ
- As a logged in user, I want to be able to see every user's posts.

#### Acceptance Criteria: I should be able to...
- Go to my home page/feed and see the posts from the people that I follow in chronological order
- Go to someone's profile page and see all of their posts in chronological order
- Go to my profile page and see all of my posts in chronological order
- See the post image/video, author, and caption of all of the posts
- Click on a post to see more details such as the post caption and comments
### UPDATE
- As a logged in user, I want to update a post of mine so that I can correct any mistakes I've made.

#### Acceptance Criteria: I should be able to...
- Click a button on the post's page to take me to a form that has the existing caption there for me to edit
- Change my post's caption
- Receive error messages if I type too many characters
- Click a button to cancel the edit if needed and take me back to the post page
- Click a button that posts the update when I'm ready
- See my updated post on the post page once the edit goes through
### DELETE
- As a logged in user, I want to be able to delete a post of mine.

#### Acceptance Criteria: I should be able to...
- Click a button on the post page that will pop up a confirmation message before completely deleting the post
- Cancel or confirm deletion
- See my post disappear off the page so that I know it's been deleted
- Never see the post on the site again

# Database Schema

## Database Schemas
Database Schemas help plan out and visualize all of the data that will be stored in a database for your application. In this reading,
you'll learn how to determine what needs to be stored in the database, tools to use to go about actually creating the schema, and how
the schema will be used in the grading process of the project.

## Creating the Schema
After analyzing the API documentation, you can start laying out the groundwork for how your database will be structured. There are many
tools available online for creating diagrams, but one of the simplest solutions can be found at https://dbdiagram.io/ 

When creating your first diagram, dbdiagram will present you with a sample database schema with comments on its formatting and advanced
features. The table definitions on the left will generate a visual representation of the table on the right.

## How will the database schema be used for grading?
It's important to note that not all schemas for the same application will look identical, and that is perfectly okay! The ability to
generate the requested responses for each endpoint is the goal.

The database schema should be displayed directly within your API documentation. When your schema is created, include a screenshot at the
beginning of the API documentation. Be sure to get approval of the database design from your Project Manager. Again, the overall design
should be able to accomplish each endpoint's requested functionality, but the details will primarily up to you as the backend developer.

## Database Schema Changes
There may be times during the project where you wish to make a database schema change to fit the data and its relationships better.

If you make a change to your database schema for your project, you should update your database schema diagram within your API documentation.
Keep your database schema diagram up to date!
