# Exercise: CSRF Attack

In this exercise, you will see how a CSRF attack can occur an application by a
malicious application.

## Set up

`cd` into the __malicious-app__ folder.

Run `npm install` and start the server by running `npm run dev`.

Then open another terminal and `cd` into the __real-app__ folder.

Run `npm install`, `npm run migrate`, and `npm run seed`. Start the server by
running `npm run dev`.

## Perform a CSRF Attack

You already performed a CSRF attack in the XSS attack exercise. Let's recreate it, and look at it from a
CSRF lens.

Navigate to the frontend of the real application [http://localhost:5001].

Log in to the application using the credentials `DemoUser` in the `Username`
field and `password` in the `password` field.

You should successfully log in and see the home page of the real application.
The real application is prone to an XSS attack through the posted tweets.

The `MaliciousUser` posted some tweets that can potentially steal your
credentials and perform actions on your behalf as the `DemoUser`. The
`MaliciousUser` has created a fake malicious application to try and steal your
credentials.

Click on the button in the tweet posted by the `MaliciousUser`. That will copy a
link to your clipboard. Open the copied link in a new Incognito window. The link
directs you to a malicious application that looks like the real application. But
it also steals your credentials and gives it to the malicious application.

You can now act as the `DemoUser` in the malicious application as the
`MaliciousUser`. If you submit a tweet in the malicious application, it will get
posted in the real application. Try submitting a tweet then refreshing the
window with the real application. You should see the newly created tweet at the
bottom of the page.

The `DemoUser` was just attacked with a CSRF attack! Once the `DemoUser`
interacted with the `MaliciousUser`'s tweets, the `MaliciousUser` was able to
perform actions on the `DemoUser`'s behalf.

## Prevent CSRF Attacks

Let's try to refactor the code in the real application to prevent the malicious
application from performing CSRF attacks.

Take a look at the __real-app/backend/app.js__ file. Comment in lines 33-39 to
enable CSRF protection on the entire application. Then comment in lines 44, 49,
and 54 to allow the frontend of the real application to bypass the CSRF
protection by setting the `XSRF-Token` cookie to the CSRF token.

Take a look at the frontend JavaScript files in the __real-app/frontend/js__
folder, specifically the __home.js__, __login.js__, __nav.js__, and
__tweet-form.js__ files. All those files have a section for
`Pass CSRF Protection`. This is sets the `XSRF-Token` header to the value of the
`XSRF-Token` cookie.

Now, try to submit a tweet in the real application while logged in as the
`DemoUser`. It should be successful in submitting a tweet.

Then, try to submit a tweet in the malicious application using the `DemoUser`'s
credentials. It should now be unsuccessful.

So even though the real application is prone to an XSS attack, it will not allow
a malicious application to act maliciously on behalf of a user because the
real application is properly preventing CSRF attacks.

[http://localhost:5001]: http://localhost:5001