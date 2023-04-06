//Internet Protocol (IP)
//The internet can be loosely defined as a series of internetworked systems

//The internet protocol defines a "language" for these networks to speak to eachother

//The internet is just a series of networks sharing data

//IP data is sent in the form "packets"
//Data packets use a data format that we're familiar with : meta data in headers, and a body with content

//The headers are used to get the data to its destination while the body contains the data

//This communication style is referred to as "packet switching"

//Split up data into packets, send it to destination, reassemble on arrival

//There are two commonly used IP versions, versions 4 and 6

//IPv4

//Most commonly known, still very commonly used, but running out of addresses

//IPv4 addresses are composed of 4 octets, which are 8-bit binary numbers, and we usually represent
//these binary numbers in decimal

//      127.0.0.1

//IPv4 supports around 4 billion unique addresses
//This was a lot in the 60's but we're running out

//Since we're quickly approaching that number, researchers created IPv6

//IPv6 supports 350 undecillion unique addresses (3.5 x 10^38)

//An IPv4 address has 32 bits while an IPv6 address has 128 bits

//Because of the new amount of bits, they had to make a new notation for IPv6

//So, instead of "4 dotted decimal" notation : 198.14.1.1

//IPv6 uses "8 colon hexadecimal" notation: 2000:648c:34f4:457f:435f:245d:245s:d346

//Both versions have "special" or "reserved" addresses that mean something specific

//The main reserved address is the "loopback" address
//    127.0.0.1 in IPv4
//    ::1    in IPv6

//This IP address identifies your current machine otherwise known as LOCALHOST
//Another common reserved address is known as the "all interfaces" address
//This address is listening for & accepts connections from ANY IP address

//   0.0.0.0   in IPv4
//   ::      in IPv6

//TCP and UDP
//Bridge the gap between applications and networks

//TCP - Slower but completely reliable
//Data packets stay in the correct order, and if it loses packets it reruns
//It sends a message that it was received

//UDP - Faster but things might get lost or out of place
//Packets aren't organized 