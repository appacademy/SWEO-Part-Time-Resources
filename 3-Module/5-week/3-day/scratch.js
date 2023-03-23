/*
* Ports
A virtual interface, meaning it's defined by software, that acts as a connection point for a particular service or application.

65536 port numbers available, 0 - 65535
TCP 25 or UDP 128
We most often use port to refer to TCP ports...
0 - 1023 : System Ports : Ports reserved for well-known services and cases
  - 80 HTTP, 443 HTTPS, 25 SMTP - Email
1024 - 49151 : User Ports : You'll see custom software run on these ports.
  - Previously known as Registered Ports and reserved by the IANA.
  - 3000, 5000, 8080
49152 - 65535 : Dynamic Ports : These ports are ephemeral, likely used when building sockets for TCP connections.

** Treat ports below 1024 as untouchable and don't use ports above 49152 unless you have a very good reason. 
* MAC Addresses (Media Access Control)
Permanant Identifier assigned to network interface hardware.
These addresses are hardcoded onto a device at the time of manufacturing.
You cannot change you MAC address without replacing the physical hardware.

6 Pairs of Hexadecimal Digits
`a1-b2-c3-d4-e5-f6`
`A1B2C3D4E5F6`
`a1.b2.c3.d4.e5.f6`

Data at the level of MAC Adresses is refered to as a 'frame'...
- Wrapper for the Data, containing all protocols
- Source MAC Address
- Destination MAC Address
- Payload
  - Transport Protocol Wrapper
  - IP Wrapper
  - Additional Application Information

MAC filtering is a security measure that only allows specified MAC Addresses specific authority.
But MAC 'spoofing' can change the MAC address reported by the OS.

* DNS (Domain Name System)
A method of translating long numeric identifier into human-readable address.
Allows us to look up a specific IP Address by its domain.

A URL is not the domain but it does include the domain
`https://students.appacademy.com/my-homework?username="coolstudent"`

- subDomain : 'students'
- second level domain: 'appacademy'
- top level domain: 'com' (.net, .gov, .edu, .io, .ru, .jp, .uk)
*/