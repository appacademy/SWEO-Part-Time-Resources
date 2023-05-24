const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.disable('etag');

let posts = {
  1: {
    postId: 1,
    title: 'Hello World!',
    description: 'first post!',
    comments: [
      {
        commentId: 1,
        text: 'Bye!'
      },
      {
        commentId: 3,
        text: 'See you!'
      }
    ]
  },
  2: {
    postId: 2,
    title: 'Hola!',
    description: 'second post!',
    comments: [
      {
        commentId: 2,
        text: 'Adios!'
      }
    ]
  },
};

let nextPostId = 3;
let nextCommentId = 3;

class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NotFoundError);
    }

    if (!this.message) this.message = 'Not Found';
    this.name = 'NotFoundError';
    this.status = 404;
    this.statusCode = 404;
  }
}

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BodyError);
    }

    if (!this.message) this.message = 'Something is wrong with the body';
    this.name = 'BodyError';
    this.status = 422;
    this.statusCode = 422;
  }
}

app.get('/', (req, res) => {
  const data = {

  };

  return res.render('index', data);
});

app.get('/posts', (req, res) => {
  const data = {
    posts
  };

  return res.render('posts', data);
});

app.get('/posts/new', (req, res) => {
  const data = {

  };

  return res.render('create-post', data);
});

app.post('/posts', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) throw new BodyError();

  const postId = nextPostId;
  nextPostId++;

  const newPost = {
    postId,
    title,
    description,
    comments: []
  };

  posts[postId] = newPost;

  res.redirect('/posts/' + postId);
});

app.get('/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  const data = {
    post
  };

  res.render('post-details', data);
});

app.get('/posts/:postId/edit', (req, res) => {
   const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  const data = {
    post
  };

  res.render('edit-post', data);
});

app.post('/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');
  const { title, description } = req.body;

  if (!title && !description) throw new BodyError();

  const data = {};
  if (title) data.title = title;
  if (description) data.description = description;

  posts[postId] = {
    ...post,
    ...data
  };

  res.redirect('/posts/' + postId);
});

app.post('/posts/:postId/delete', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  delete posts[postId];

  res.redirect('/posts');
});

app.post('/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const post = posts[postId];

  if (!post) throw new NotFoundError('Post not found');

  const { text } = req.body;

  post.comments.push({ commentId: nextCommentId, text });

  nextCommentId++;

  res.redirect('/posts/' + postId);
});

app.get('/comments/:commentId/edit', (req, res) => {
  const commentId = req.params.commentId;
  const post = Object.values(posts).find(post => {
    const comment = post.comments.find(comment => {
      return comment.commentId == commentId;
    });
    return comment;
  });

  if (!post) throw new NotFoundError('Comment not found');

  const comment = post.comments.find(comment => comment.commentId == commentId);

  const data = {
    comment
  }

  res.render('edit-comment', data);
});

app.post('/comments/:commentId', (req, res) => {
  const commentId = req.params.commentId;
  const post = Object.values(posts).find(post => {
    const comment = post.comments.find(comment => {
      return comment.commentId == commentId;
    });
    return comment;
  });

  if (!post) throw new NotFoundError('Comment not found');
  const comment = post.comments.find(comment => comment.commentId == commentId);

  const { text } = req.body;

  comment.text = text;

  res.redirect('/posts/' + post.postId);
});

app.post('/comments/:commentId/delete', (req, res) => {
  const commentId = req.params.commentId;
  const post = Object.values(posts).find(post => {
    const comment = post.comments.find(comment => {
      return comment.commentId == commentId;
    });
    return comment;
  });

  if (!post) throw new NotFoundError('Comment not found');

  const commentIdx = post.comments.findIndex(comment => {
    return comment.commentId == commentId
  });
  post.comments.splice(commentIdx, 1);

  res.redirect('/posts/' + post.postId);
});

app.use("/assets", express.static("assets", {
  etag: false,
  lastModified: false
}));

app.use((req, res) => {
  res.status(404);
  
  const data = {
    title: "404 - Page Not Found"
  }
  return res.render('error', data);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const data = {
    title: err.message
  }
  return res.render('error', data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is listening on port', port));
