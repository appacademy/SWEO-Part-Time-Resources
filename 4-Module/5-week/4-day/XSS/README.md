# Exercise: XSS Attack

In this exercise, you will see how an XSS attack policy on an application
can affect how a different malicious application can access the server.

## Set up

`cd` into the __malicious-app__ folder.

Run `npm install`.

Start the server by running `npm run dev`.

Open another terminal and `cd` into the __real-app__ folder.

Run `npm install`, `npm run migrate`, and `npm run seed`. Start the server by
running `npm run dev`.

## Not Escaping HTML

Take a look at the LAST seed file for the real application in the
__real-app/backend/db/seeders/20220128194409-malicious-tweets.js__.

Some of the tweets in the database are HTML strings. Let's see if they display
as HTML or just a string on the frontend of the application.

Navigate to the frontend of the real application [http://localhost:5001].
The HTML is NOT escaped on the frontend so the HTML is actually rendered as
HTML rather than a plain text string. You should get a popup alert saying
"Localhost 5001 says if you see this alert pop up on your screen, then this page
is prone to an XSS attack".

## XSS Attack

Try [logging into the real application] with the credentials `DemoUser` for the
`Username` field and `password` for the `password` field.

After logging in successfully, try submitting HTML in the form to create a
tweet, (ex: "`<h1>Hello World!!</h1>`").

This new tweet should be rendered on the page as HTML elements, so that means a
malicious user could perform an XSS attack through this form.

For example, if you click on the button on the 6th tweet displayed on the page,
it copies a link to your clipboard. If you open the link in an new Incognito
window, you will see that the malicious third-party application stole your "DemoUser" login
credentials in the real application.

Try making another tweet on the malicious application in the Incognito window.
After submitting, you should see a message that the tweet has been submitted to
the real application.

Go back to the other window with the real application and refresh the page. You
should see the tweet created in the malicious application at the bottom of the
application!

What does this mean? This means that through XSS, an attacker can steal your
login credentials and perform actions on your behalf without your permission.

## Escaping HTML

Take a look at the end of the frontend file
__real-app/frontend/js/tweet-list.js__. This file is responsible for taking
the data in tweets and converting them into HTML to display on the frontend.

The end of the file shows two different sections of code. One section, if
run, will prevent XSS attacks, and the other section will allow XSS attacks.
Currently, the section that **allows** XSS attacks is commented in. Comment that
out and comment in the other section that **does not allow** the XSS attacks.

Navigate again to the frontend of the real application [http://localhost:5001].
The HTML is now escaped on the frontend, so the HTML is **NOT** rendered as
HTML. It is rendered as a plain text string.

If a malicious user tries to perform an XSS attack through injecting HTML when
submitting the HTML through the body of a tweet, it will now be prevented.

Comment in and comment out the code section to see the difference
in how the content is displayed on the main page of the real
application.

Try submitting HTML as a tweet through the malicious application again to
see if the content on the real application will show as HTML or as plain text.

[http://localhost:5001]: http://localhost:5001
[logging into the real application]: http://localhost:5001/login