# Bonus Exercise: CORS Policy

In this exercise, you will see how to add multiple origins to a CORS policy on
an application's server.

## Multiple-Origin CORS Policy

Comment out the previous CORS policy defined from lines 38-41 of the
__real-app/backend/app.js__ file.

Comment in the very last CORS policy defined from lines 45-48 of the
__real-app/backend/app.js__ file.

This CORS policy is a specific policy on the server. The CORS
policy will set the `Access-Control-Allow-Origin` header to
`"http://localhost:5001"` most of the time. However, if the origin of the URL is
`"http://localhost:5002"`, then it will be set to `"http://localhost:5002"`.
That means CORS will not be blocked for `"http://localhost:5001"` OR
`"http://localhost:5002"` from a browser.

Navigate to the frontend of the real application, [http://localhost:5001].
You should see the front page of the real application (a clone of Twitter)
populated with the tweets received from the API of the real application.

Now, navigate to the frontend of the malicious application
[http://localhost:5002]. You should see the front page of the malicious
application which should also be populated with the tweets received from the API
of the real application.

Try logging in to the real application by navigating to
[http://localhost:5001/login]. Try submitting the form with
the credentials of `DemoUser` for the `Username` field and `password` for the
`password` field. You should be successful in logging in.

Log out from the real application.

Then try logging in to the real application through the malicious application by
navigating to [http://localhost:5002/login]. If you try submitting the form with
the same credentials (`DemoUser` for the `Username` field and `password` for the
`password` field), you should also be successful on this app to logging in.

[http://localhost:5001]: http://localhost:5001
[http://localhost:5002]: http://localhost:5002
[http://localhost:5001/login]: http://localhost:5001/login
[http://localhost:5002/login]: http://localhost:5002/login