# Adventure Game Navigation

In this project, you will be creating UI through web pages for the Adventure
Game that you created some weeks ago. At that time, the terminal was the UI and
you could interact with the game through the terminal. This time, you will be
creating a UI through creating a server with page navigations and form
submissions.

## Set up

Clone the project from the [starter].

## Background and Context

You will create an Adventure Game, a simulation game of a world that users can
interact with through clicking and navigating around HTML web pages.

The project folder contains a **game** folder which holds files that handle the
game data logic. In the **game/class** folder, there are several classes that
are used to define the resources in the game, `Food`, `Item`, `Player`, `Room`,
and `World`.

A user can will be initialized as a `Player`. They can explore a `World` which
contains many `Room`s. Each `Room` can have different `Item`s that a `Player` in
that `Room` can interact with. A `Food` is just an extension or a child class of
an `Item`, but with extra functionality A `Player` can pick up and drop `Item`s.
A `Player` holds an inventory of `Item`s or `Food`s that they have picked up in
various `Room`s. A `Player` can also eat `Food`s that are in their inventory.

The **game/data** folder holds the seed data for the resources. You will use the
**basic-world-data.js** to as the seed for the world you will be using to test
the server.

The server and the server data is in the **server.js** file. After the imports
at the top of the file, the **basic-world-data.js** seed file is loaded into a
`new World` to initialize the game data in the server.

Your goal is to create an interface for the game using HTML pages, HTML links,
and HTML form submissions. In this practice, you will create the following
endpoints that display the HTML pages and process the forms:

-   `GET /` - Page to start the game with a form to name a new player
    <br/>Submission of the form will start the Game

-   `POST /player` - Create a new player of the game
    <br/>Note: Only one player can be created for this game, so `player` is a
    singular resource and not a collection, which is why the resource in the
    route is singular and not plural

-   `GET /rooms/:roomId` - Page to view a room in the world
    <br/>The player of the game should only be able to view the room they are
    currently in

-   `GET /rooms/:roomId/:direction` - Navigate to a room in a direction
    <br/>The player of the game should only be able to go in a specified
    direction from their current room

-   `POST /items/:itemId/action` - Attempt an action with the specified item
    <br/>The player should only be able to interact with the items in their
    inventory or the room

Start the server by typing in the command `node server.js`, and you can use
either the browser or Postman to test your endpoints. Let's get started!

## Phase 1: `GET /`

The `GET /` endpoint should display the **new-player.html** view page. This page
has a form for filling out the name of the player and the room that the player
should start in. Assume that there is only one player in this game.

Take a look at the **new-player.html** view page and take note of all the
variables that should be replaced in the HTML.

You should have identified `#{availableRooms}` as a section that should be
replaced in the HTML page. This section should be replaced with a list of
options for all the available rooms in the loaded `World` instance.

Take a look at the `World` class API and identify the appropriate property or
method for the `availableRooms` variable.

You should have identified the `availableRoomsToString()` method on a `World`
instance which returns a string of HTML containing `<option>` HTML tags for
each `Room` in the `World` instance.

Instructions:

-   In the server.js file under Phase 1, create a route handler for `GET /`.

-   The route handler will display the **new-player.html** view page.
    (Don't forget to specify that the encoding is `utf-8` for the
    fs.readFileSync)

-   Set your route up so that it will replace the `availableRooms` variable
    with the string returned from the `availableRoomsToString()` instance
    method, which was imported from the `World` instance at the top of the file.

-   Complete the status code, headers, etc.

-   Make sure to test this route by starting the server and making a `GET /`
    request on the browser or Postman.

In the next phase, you will create the route handler which will process this
form in this view page.

## Phase 2: `POST /player`

The `POST /player` endpoint creates a new player for the game with the `name`
given in the request body and will start the player in the starting `Room` with
the specified `roomId`. The request body is already parsed into a JavaScript
object for you and is saved on `req.body`. For this endpoint, expect `req.body`
to have two keys, `name` and `roomId`.

When the form on the **new-player.html** view page is submitted, the request
body should contain the `name` of a `Player` and a `roomId` which should
correspond to an available `Room`'s `id`.

Examine the `Player` class to see how you can initialize a new `Player`. A new
`Player` should be created with a `name` string and a `startingRoom` which
should be the `Room` instance which the `Player` should start in.

The player can start in the room specified in the form data. The form data
should include a `roomId` which you can use to grab the `Room` instance. You can
select the room by `roomId` from the `World` instance created at the top of the
server file with `world.rooms[roomId]`. Replace `roomId` with the `roomId` from
the form data submitted from the form in the **new-player.html** view page.

Assign the created player to the `player` variable defined at the top of the
server file. There can only be one player per server instance.

Instructions:

-   Create a route handler for `POST /player`.

-   Obtain the room ID and name from the request. (Hint: You can use
    destructuring to achieve this!)

-   Create a new player with the info obtained. Make sure you are **NOT**
    creating the player directly with the room ID, and is instead passing in the
    room object of the chosen room into the new player.

-   Redirect the client to the route `/rooms/:roomId` where the `:roomId` route
    parameter is replaced with the starting room of the newly created player.

**Note**:
(This endpoint won't return a response until phase 3 is completed, come back to
see the response after you've completed phase 3)
Make sure to test this endpoint! Test the endpoint on Postman first, when
testing on Postman without implementing phase 3 the expected result will be
loading... Postman is expecting a response but since phase 3 has not been
implemented it's waiting for one. After you confirm that it is loading in
Postman proceed to phase 3.

Come back to this after phase 3 and try submitting the player creation form on
the browser and confirm that it works.

## Phase 3: `GET /rooms/:roomId`

At this point, you may have noticed that every time the server restarts, the
information the player is reset. Do you understand why that is? Make sure to
confirm your hypothesis by analyzing the `player` variable in your server
before submitting the form to create a new player, after submitting the form to
create a new player, and then after restarting your server. (Hint: use
`console.log` to log the `player` variable for every request that gets processed
by your server.)

The `GET /rooms/:roomId` endpoint should display the details of the specified
room. Take a look at the **room.html** view page and take note of all the
variables that should be replaced in the HTML.

-   `roomName` - specified room's name
-   `roomId` - specified room's id
-   `roomItems` - list of the specified room's items
-   `inventory` - list of the player's items
-   `exits` - links to each of the rooms connected to the specified room

Take a look at the `Player` and `Room` class API's and identify the appropriate
properties or methods for each of these values.

Create the route handler for this endpoint that returns the replaced HTML
content as the response body. Make sure you set the appropriate response
components before sending the response.

Test this route by making the request on Postman. After you confirm the response
components in Postman, try submitting the player creation form on the browser.

Instructions:

**Note**: All route handlers after phase 2 should require a player. Type in your
code before the route handler of Phase 3 to redirect to the home page if there
is no player. Since redirect will be use a lot, consider adding a helper
function for that.

-   Create a route handler for `GET /rooms/:roomId`.

-   Obtain the current room Id by parsing the URL.

-   Update the html file for `room.html` to replace all the variables with
    details obtained from the player's current room.

-   Complete the status code, headers, etc.

-   Make sure to test this route by starting the server and on the browser,
    navigate to the home page, submit a new player, and make sure the
    redirect from phase 2 works.

### Redirect to the current room

If the specified `:roomId` route parameter is not the `roomId` of the
player's current room, then the server's response should redirect the client to
the correct current room of the player instead of displaying the **room.html**
view page as the response.

## Phase 4: `GET /rooms/:roomId/:direction`

In the room details view, **room.html** you should be able to see the links to
each of the rooms connected to the specified room with a direction.

Create the `GET /rooms/:roomId/:direction` endpoint to allow the player to
navigate to a different room by specifying a direction they wish to travel from
their current room when they click on one of the links in the "Exits" section.

The server should redirect the client to the room detail page of the room in
the specified direction from the current room.

To move the player to the room in the specified direction, take a look at the
`Player` class to identify and use a method to move the player.

Instructions:

**Note:** just like in the previous phase, if the specified `:roomId` route
parameter is not the `roomId` of the player's current room, then the server's
response should redirect the client to the correct current room of the player
instead of moving the player to a different room.

-   Create a route handler for `GET /rooms/:roomId/:direction`

-   Obtain the current room Id and the directions by parsing the URL

-   Make sure to check that the roomId matches the player's current room

-   Use a method imported from the `Player` class to move the player (Hint:
    the move direction does not take the whole word, just the first letter of
    each direction.)

-   Redirect the player to the next room

-   Try to implement a try/catch to redirect the player back to the current room
    in case of errors!

-   Make sure to test this route by making the request on Postman. After you
    confirm the response components in Postman, try navigating to another room
    using one of the links in the room detail page on the browser

## Phase 5: `POST /items/:itemId/:action`

If you inspect the HTML elements in the first room details view in the browser
or the response in Postman, you should see a form for taking the rock which is
one of the available items in the "Crossroad" room. Based on the form attributes
the form will make a `POST /items/0/take` call when submitted, where `0` is the
`itemId` and `take` is an `action`.

Create a `POST /items/:itemId/:action` endpoint that will allow the player to
do an action on the specified item. The `:action` route parameter can be one of
the following phrases:

-   `drop`
-   `eat`
-   `take`

Examine the `Player` class to identify methods for these actions on an item
that has the same `itemId` as the `:itemId` route parameter.

Based on the `:action` route parameter, try allowing the player to perform the
action on the specified item by the `:itemId` route parameter.

Instructions:

-   Create a route handler for `POST /items/:itemId/:action`.

-   Obtain the current itemId and player action by parsing the URL.

-   Create a switch statement to handle the different actions taken, and refer
    to the `Player` class for the methods available. (Hint: You can find out
    more about switch statements (here)[switch]!)

-   Redirect the player to the next room

-   Try to implement a try/catch to redirect the player back to the current room
    in case of errors!

-   Make sure to test this route by making the requests for different actions on
    Postman. After you confirm the response components in Postman, try
    performing those actions in the browser.

### Error handling

A `Food` can be `eat`en but a regular `Item` cannot be. You should handle the
case when an incorrect action like `eat` on an `Item` is attempted.

If there is an error thrown from performing an action on an item, then render
the message of the error in the `error.html` view.

## Phase 6: Redirect if no matching route handlers

If there are no matching route handlers, redirect the user to the player's
current room.

## Bonus Phase: Style!

Style the HTML views! Add CSS styling and images to make the game look better.

## Bonus Phase: Add more rooms and items

Add more interesting rooms and items to the seed. You can even make different
kinds of items that are not just food, like weapons! You can also include
logic that will change the CSS styling of the page when the player is holding a
particular item. Like a flashlight!

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy/practice-for-week-08-adventure-game-navigation-long-practice
[switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
