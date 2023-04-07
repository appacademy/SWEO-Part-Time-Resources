//Internet Protocol (IP)
//How networks communicate

//The internet can be loosely described as internetworked systems

//The Internet Protocol as a shared language for networks to communicate

//The internet is basically just a series of interconnected networks sharing data

//IP data transmitted in the form of "packets". These packets use a data format that we've seen before:
// meta data in the headers, and a body with the content

//We refer to this style of communication as "packet switching"

//When we send data, we split it into multiple packets, deliver it to it's destination, and then assemble it on arrival


//There are two most commonly used version of the internet protocol

//Version 4 and 6 (IPv4 and IPv6)

//IPv4 is the best known version of the internet protocol

//IPv4 addresses are composed of 4 octets, which are 8-bit binary numbers
//We usually represent them as decimals, however.

// IPv4 example address:   154.23.1.9

//IPv4 supports around 4 billion unique addresses

//That used to be a big number, but we're rapidly approaching
//Due to this researches created IPv6 and we're slowly phasing into version 6

//IPv6 - supports 350 undecillion IP addresses 3.5 X 10^38

//It handles this by quadrupling the number of bits in the address
//IPv4 uses 32 bits and IPv6 uses 128

//Because of the new amount of bits, IPv6 required a new notation

//So instead of "4 dotted decimal" notation (IPv4) => 198.14.1.1 

//IPv6 uses "8 coloned hexadecimal" notation =>

//   2000:45f3:25f3:d456:9874:25a3:234f:d245

//Both versions have reserved addresses

//localhost ip address - using this will make a  request to the machine that you're on
//IPv4 :   127.0.0.1
//IPv6 :      ::1

//all interfaces - this address is listening for & accepts all requests from ANY ip address
//IPv4 :    0.0.0.0
//IPv6 :       ::



//TCP vs UDP
//They are transfer protocols; they bridge the gap between applications and networks

//TCP - Incredibly reliable, will rerun if a packet is missing, everything arrives in order, and you get a 
//confirmation when the data arrives     -Pretty slow

//UDP - Not organized, sometimes packets go missing, but it'll get there fast

