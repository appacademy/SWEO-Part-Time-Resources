/*
* Ports
  A virtual interface, means it's defined by software, that acts as a connection point for a particular service or application.
  There are 65536 port numbers available, 0 - 65535
  TCP 25, UDP 128
  We most often use port to refer to TCP Ports.
  0 - 1023 : System Ports : Ports reserved for well-known services. (80 HTTP, 443 HTTPS, 25 SMTP-Email);
  1024 - 49151 : User Ports : You'll see custom software run on these ports such as 3000, 5000, 8080
  49152 - 65535 : Dynamic Ports : Intended to be ephemeral. They're used when building sockets for TCP Connections.
* MAC Addresses
  Media Access Control aka Physical Address
  Permanent Identifiers assigned to network interface hardware at the time of manufacturing.
  Only way to change MAC Address is to change the physical hardware.
  - 1a-2b-3c-4d-5e-6f
  - 1A2B3C4D5E6F

  Very near to cable level, the data here is refered to as frames.
  A frame contains: 
  - External Wrapper for Data
  - All other protocols discussed
  - Source MAC Address
  - Destination MAC Address
  - Payload containing transport protocol wrapper, IP wrapper and additional data.
  MAC filtering is a semi-security feature because you can spoof the MAC address being reported.
* DNS (Domain Name System)
A method for translating long numeric identifiers into human-readable addresses.
Domain is not a URL, it is a part of the URL
`https://students.appacademy.com/my-homework?username="coolstudent"`
  - Top Level Domain : .com, .net, .org, .gov
  - Second Level Domain : appacademy
  - Subdomain: students
*/