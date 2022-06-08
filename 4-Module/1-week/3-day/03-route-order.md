# Discussion Questions for Route Handler Order

- Which route handler does Express attempt to match first when
  an incoming request comes in?
  - The very first route handler attached to the Express application.
- Which route handler will Express attempt to match last when an
  incoming request comes in?
  - The very last route handler attached to the Express application.
- If a response is sent when a route handler is matched and called
  by Express, does the next route handler in order of route handlers
  attached to the Express application get called?
  - No, Express will stop matching and calling route handlers after
    a response has been sent.
- If a response is sent in the first route handler matched, will other
  route handlers that match the request be called by Express?
  - No, Express will stop matching and calling route handlers after
    a response has been sent.
