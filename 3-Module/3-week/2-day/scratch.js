/* THIS IS JUST PSEUDO CODE

request = route = facebook-inner-group/comments/1

------------------------------one of the api server routes

route = api/users/:userId/posts

type = GET request

function getUserPosts(route, type, req){
	//parse the req.path to get the user id from our url for the user session id
	//from that id, go to the database, verify if the user exists, if valid, etc.
	//if successfully verified, then get the users posts from another database
	//return the posts as a json datatype (object key value pairs)
}

------------------------------comments route
backend api pseudo code -> route

route = facebook-mod/comments/:commentId
function facebookModComment(route, type, req){
	..logic
}

route = facebook-user/comments/:commentId
function  facebookUSerComment(route, type, req){
	...logic
}

*/