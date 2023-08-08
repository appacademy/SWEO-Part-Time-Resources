// with the tranditional web server
// where we use x-www-form-urlencoded

// our http methods are GET, POST
// to specify if its a delete or edit we include in the the URL

// we use REST convetion
// example
// POST /users/1/delete
// POST /users/1/edit

// RESTful convetion
// we are now working with JSON api/servers
// we now include PUT/PATCH and DELETE

// DELETE /users/1
// PUT/PATCH /users/1


// IP
// Internet Protocol

// Its like a postal system for the internet
// you would need to know the address to send data over the internet

// IP sends data in the form of "packets"
// data packets or what they are called packets
// this communication style is called "packet switching"
// it sends the data in to split up packets and then
// reassambles them in the destination

// IPv4

// most common and most used
// 127.0.0.1 --> localhost
// 4 dotted decimals that is the notation: 192.1.3.1
// can store up to 4 billion unique addresses

// IPv6 supports 350 undecillion address (3.5 x 10^38)

// uses 8 colon hexedecimal notation: A100:2000:1:BC:100:921:F323:23

// TCP it stands for
// Transmission Control Protocol
// Slower but completely reliable
// Data packets are stored in correct order, if any of the data packets
// are missing then it reruns
// it sends a message as soon as it was received

// it provides error checking and correction so that if any data
// is lost or corrupted than it can just retransmit

// CONS
// its very resource intensive
// uses way too much bandwith

// UDP stands for User Datagram Protocol
// it just sends data without waiting for a response
// its faster

// CONS
// data is not in any order at all
// if data is missing its just gone

