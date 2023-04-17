//Browser Storage
//The majority of data on the web is stored in a database on a server,
//but data can also be stored locally on a users device

//Their are three ways to store data in the browser, cookies, local, and session storage

//The most common use of persistent storage is for stateful data, meaning it only matters
//to one user in their browser for a particular amount of time

//Session storage - Form data
//Local - Shopping cart

//Cookies
//Tiny baby files that store key value pairs with less than 4KB of data

//Cookies are used to store stateful info about the user, such as their personal info,
//browser history, form input, etc.

//Cookies can be transferred from browser to server and cookies are stored in the browser
//as a long string of key value pairs

//ex:     "lightmode=true; favoriteColor=blue; authorized=true"

//By default cookies only last as long the browser window is open, but you can use "persistent cookies"
//instead and give them a custom expiration date

//Cookies are sent through HTTP requests

//Creating cookies

//Again since cookies are accessible in the browser, we use the DOM to create and access them

const cookieBoi1 = "favoriteCookie=thinmints";

document.cookie = cookieBoi1;

const cookieBoi2 = "favoriteCat=King";

document.cookie = cookieBoi2;

//Return =>      "favoriteCookie=thinmints; favoriteCat=King"

//Deleting cookies

//The best way to delete a cookie is to set it's expiration date, to a date from the past

//Ex:

document.cookie = "favoriteCookie=thinmints; expires = Thu, 01 Jan 1970 00:00 GMT";

//Web Storage
//A long long time ago we only had cookies
//BUT THEN with HTML5 we got the web storage api

//Web storage is also used for stateful information about a user. however it has more space than cookies

//Web storage is not sent w server calls

//If you want data to disappear after the browser window closes, use sessionStorage

//If you want the data to persist even after closing and reopening the browser, use localStorage

//Just like cookies both are objects

//sessionStorage
//      -Stores data for a session
//      -Never transfers data to the server
//      -Has a storage limit of 4mb (more than cookies)

//localStorage
//      -Stores data w/no expiration date
//      -Deleted when you clear the cache
//      -Largest storage limit within the browser
