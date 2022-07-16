// 3.
fetch('/artists', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Z' }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 4.
fetch('/artists/2', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Zaviar' }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 5.
fetch('/artists/2', {
  method: 'DELETE',
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 6.
fetch('/artists/1/albums').then((res) => console.log(res.status));
fetch('/artists/1/albums').then((res) =>
  console.log(res.headers.get('Content-Type'))
);
fetch('/artists/1/albums')
  .then((res) => res.json())
  .then((res) => console.log(res));

// 7.
fetch('/albums/1', {
  method: 'GET',
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 8.
fetch('/artists/1/albums', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'MusicSongs',
  }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 9.
fetch('/albums/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'SongsMusic',
  }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 10.
fetch('/albums/2', {
  method: 'DELETE',
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 11.
fetch('/artists/1/songs')
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 12.
fetch('/albums/1/songs')
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 13.
fetch('/trackNumbers/1/songs')
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 14.
fetch('/songs/1/')
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 15.
fetch('/albums/1/songs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Dreamwave',
    lyrics: 'Lofi sounds',
    trackNumber: 2,
  }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 16.
fetch('/songs/2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Chillhop',
    lyrics: 'MORE lofi sounds',
    trackNumber: 10,
  }),
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));

// 17.
fetch('/songs/2', {
  method: 'DELETE',
})
  .then((res) => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    return res.json();
  })
  .then((res) => console.log(res));
