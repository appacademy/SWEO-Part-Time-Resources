# Requests

- Click a link to an Instagram post that your friend thought was funny.

```json
{
  "method": "GET",
  "URI": "/posts/:postId",
  "headers": {
    "host": "instagram.com"
  },
  "body": "none"
}

```

- Edit your Facebook Comment

```js

{
  id: represents an individual comment,
  userId: user who owns comment,
  postId: where the comment was left,
  msg: content of comment
}

```

```json

{
  "method": "put",
  "uri": "/post/:postId",
  "header": {
    "host": "facebook.com"
    "Content-Type": "application/json"
  },
  "body": {

    userId

    "msg": "new content"
  }
}

```
