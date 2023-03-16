# `M6W5D3`


## Minimum Viable Product (MVP) 

### A version of a product with just enough features to be usable by early customers who can then provide feedback for future product development

- What features are needed to make this an application that people would use?
- What features would be nice to have if the minimum viable product gets finished?
- Will these features demonstrate everything we've learned during the bootcamp?

### Each feature should include the CRUD functionality

## Example MVP list for a Instagram clone

# MVP LIST (Instagram)

## 1. Images
- Users can read image posts
- Users can create a new post with an image and a caption
- Users can update and delete image posts
## 2. Likes
- Users can read the amount of likes an image post has
- Users can create a new like and unlike (delete likes) the posts of other users
- Users can read who has liked a post
## 3. Comments
- Users can read comments on a post
- Users can create a comment on posts
- Users can update comments on posts
- Users can delete comments
## 4. Follows
- Users can follow (create a follow) other users
- Users can read other users' followers/following lists
- Users can unfollow (delete a follow)
## 5. Direct Messaging (Bonus)
## 6. Hashtags (Bonus)
## 7. Search (Bonus)

# If you finish this early, please start another wiki page called User Stories

## User stories will tell the begining-to-end User experience of your app
- Should at minimum have a user story for each CRUD functionality of each one of your features
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

---

Github: philling83
