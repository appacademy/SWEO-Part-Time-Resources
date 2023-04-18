//Browser Storage

//Most of the data on the internet is stored in a database on a server

//Data can also be stored locally on a users device (in the browser)

//The most common type of data stored in the browser is "stateful data" meaning it's only
//relevant to one user in their browser for a specific amount of time

//Ex: light or dark mode, shopping cart, page history, form data

//Two approaches to persistent data in the browser; cookies and web storage

//Cookies - A tiny baby file (less than 4kb)

//They used to store stateful info about the user and there are two types of cookies
//"session" cookies - Only last as long as the user is actively in the browser

//and 

//"persistent" cookies - Will last as long as their expiration date allows

//Cookies can be sent between the browser and the server
//Cookies are sent in HTTP Requests

//Browsers store cookies as a long string of key=value pairs inside of a "cookie" object

//Example cookies -              "favoriteColor=blue"     "authorized=true"

//Creating cookies

//Since cookies are stored in the browser, we use the document object to create & access them

document.cookie = "favoriteCookie=thinmints";
const cookieBoi = "favoriteCat=King";

document.cookie = cookieBoi;

//If we printed it =   "favoriteCookie=thinmints; favoriteCat=King"

//Deleting cookies
//We would set it's expiration date to sometime in the past

document.cookie = "favoriteCookie=; expires = Thu, 01 Jan 1970 00:00 GMT";

//TO SET A VALID EXPIRATION DATE
document.cookie = "favoriteCat=King; expires = Thu, 01 Jan 2030 00:00 GMT";

//Web Storage
//Before HTML5 cookies were the only way to store data in the browser

//But then they created Web Storage
//Web Storage has more storage for data & does not get sent between the browser and the server

//Two types of Web Storage:

//SessionStorage = is cleared whenever the browser is refreshed
//LocalStorage = persists even when you close & reopen the browser

// "userId=12345; authorized=false"

//SessionStorage - 
//       -Stores data for a session and then deletes
//       -Has a storage limit of 4mb (more storage than cookies)
//       -Never tranfers data to the server

//LocalStorage -
//       -Stores data with no expiration date
//       -Deleted when user clears the cache
//       -Largest amount of storage within the browser


window.localStorage.setItem('key', 'value')

window.sessionStorage = 'favorite=clajjfj'