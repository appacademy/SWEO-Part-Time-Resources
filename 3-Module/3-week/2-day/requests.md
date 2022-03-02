# Requests

- Click a link to an Instagram post that your friend thought was funny.

```json
{
  "method": "GET",
  "URI": "/users/:userId/posts/:postId", //universal resource indicator
  "headers": {
    "host": "insta.com"
  },
  "body": "none"
}
```

- Edit your Facebook comment

```js

//comment from database
{
  id: identifier
  userId: connection to user
  postId: connection to post
  content: comment body
}
```

```json
{
"method": "patch",
"uri": "/feed/:commentId",
"header": {
  "Content-Type": "application/json",
  "host" : "facebook.com"
},
"body": {
  "username": "name",
  "msg": "stuff"
}

}
```

- Upload your sick mixtape to SoundCloud
- Submit an Amazon review for a product through an HTML form
- Sell one of your stocks on Robinhood
- Browse GIPHY for a cute puppy gif
- Send a picture to a friend on Snapchat
