# TWEETER

## What's Elon Musk up to now?

Remember to check your code from Phase 3 against the starter code for Phase 4 to see how you did!


## PHASE 4 - Make some tweets!

The finish line is in sight!  We just need to save the posts from our form!

1. Lets get back to the `'/new'` route and add in some POST functionality!  Make
   sure to set up conditional logic for your `form.validate_on_submit()` and
   `form.errors`.  

    a. As far as creating a new tweet, your `id` can be the length of the tweets
    list.  The `author` and `tweet` fields need to be populated from the form
    data.  The `date` can just be generated at the time of the post (check out
    the datetime module, it should just be the date, no need for times). Lastly
    the `likes` attribute should be set to 0 or you can randomly generate a
    value for it. (the templates do divide likes by 1,000 and add a 'k'
    afterwards, Mr Musk has a decent amount of followers...)  Make sure to add
    that new tweet to the list of tweets when you are done!

    b. If we successfully made a new tweet, we should redirect the user to the
    `feed` page so they can see their new tweet!
    
    c. If for some reason we had errors on the form submission, we should return
    those to the browser.


If you can make new tweets and they show up in the feed, then you are all done
with this project!  There is a link to the solution for Phase 4 and the whole project below!  Unless you are bold and want to try to tackles some of these
bonuses? 💪🏻


## BONUS

Feeling pretty good about your 'Tweeter' app?  But can you take it further?
Here are some things to try out!

1. Our feed is not in order, it should display 'tweets' in order from most
   recent to least recent, but it is being displayed by ID.  If only we could
   get this `sorted` out...

2. How do those dates look?  If you used something like `date.today()` to create
   new dates, you should have gotten the date, but not in the same format as the
   'seed' tweets, can we fix that?

3. Would be pretty cool if we could actually like some of the tweets, right?
   And what if we changed our minds and wanted to un-like them?