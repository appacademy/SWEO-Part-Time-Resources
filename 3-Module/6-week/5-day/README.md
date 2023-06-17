# M3W6D5

## Networking

Networking part-1 is on week 16 homework for Saturday. (IP, TCP/UDP)

### Recap

What is the internet?

A very general definition could be **"a series of internetworked devices"**

#### IP (Internet Protocol)

This internetworking is made possible via the Internet Protocol (IP), which
allows for individual networks to communicate with one another.

The function of an IP address is to identify the host (or networking interface),
provide a location of the host in the network, and then figure out a path to
that host. "A name indicates what we seek. An address indicates where it is. A
path indicates how to get there."

---

IPv4 vs IPv6

IPv4 addresses are made up of 4 _octets_, which are 8-bit binary numbers. You
will generally see them represented in decimal rather than binary.

localhost: `127.0.0.1` || `01111111.00000000.00000000.00000001`

IPv6 was introduced because IPv4's 4 billion unique addresses were beginning to
show signs of running out. IPv6 supports _~350 undecillion (3.5×1038)_
addresses. This is theoretically more addresses than there are grains of sand in
the world.

IPv6 manages such an astronomical jump in potential by quadrupling the number of
bits in an address. IPv4 uses 32 bits whereas IPv6 uses 128bits. IPv6 is most
often represented by colon seperated hexadecimal values.

IPv6 ex: `2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859`

In binary: `0010011000000000:0110110001011110:0001010101111111:1101010010001100:0001001110001111:1110000010111010:0110111110100111:1101100001011001`

---

There are some special addresses which are designed to be identifiers for your
local machine, you should know these as you will be using them when you develop.

The loopback address identifies the current machine, commonly called localhost

IPv4=`127.0.0.1`

IPv6=`::1`

The all interfaces address catches all incoming requests regardless of the
destination, again specific to the local machine.

IPv4=`0.0.0l0`

IPv6=`::0`

---

### TCP/UDP

---

#### HTTP

**HyperText:** Content with references to other content.

(HT)ML, HyperText Markup Language allows us to send content over the internet and allow that content to reference everything else. CSS pages, JS pages, images, ect are all included by reference in our HTML. Content that references other content.

**Transfer Protocol:** The specifications for sending the hypertext from point a to point b.

The transfer protocol defines the rules of what format a client request and server response should take, what should and should not be included, how it could fail, ect.

---

#### Properties of HTTP

**Reliability:** There are two main protocols that allow for data transmission TCP and UDP, what they are doesn't matter much at the moment. Just know that TCP is slower but lossless because it allows retratransmission of lost packets. Wheras UDP is faster, simpler, and more efficient, but it isn't lossless. There are advantages and disadvantages to both protocols. UDP is great for streaming, VoIP, video conferencing, and other applications that prioritize transmission speed over fidelity. For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer:** Each request/response cycle is fully independent, meaning all you need to deal with a request is fully contained in that request, however it also means that you cannot use the request/reponse cycle to manage persistency. Information like user information, whether someone is logged in, and saved settings, all need to be managed seperately from the request/response cycle.

---

### Ports

Transport Protocol Ports are a Virtual interface that acts as a connection point
for various services or applications.

There are 65536 port numbers available to each protocol, beginning with 0 and
ending with 65535. Since each protocol has its own port, we usually prefix them
with a protocol identifier: TCP 25, UDP 128. This means that TCP 25 and UDP 25
are two separate ports. We most often use "port" to refer to TCP ports.

Port assignments are broken down into 3 ranges:

0-1023: System Ports. [i.e: 80 (HTTP), 443 (HTTPS), 25 (SMTP-Email)]

1024-49151: User Ports. You will often see 3000, 5000, and 8080 while developing
because they are easy to remember

49152-65535: Dynamic ports. These ports are intended for system services like
building a TCP connection, mostly designed to be free for transient tasks.

---

### MAC Addresses (Media Access Control)

These are permanent identifiers assigned to network interface hardware, they are
hardcoded into the device. This is why MAC addresses are sometimes called
physical addresses. We represent a MAC address with six pairs of hexadecimal
values `A1-B2-C3-D4-E5-F6`, but unlike IP addresses MAC addresses are relatively
forgiving to syntax and this would read the same `a1b2c3d4e5f6`.

MAC addresses are used by network devices to map network interfaces to one
another. This is a fundamental piece of the network "puzzle": a MAC address is
just a step above tracing a cable from one device to another! They're key for
devices communicating with each other. They're used by all the networks you use
daily: Wi-Fi, Bluetooth, and common wired Internet all rely on MAC addresses.

---

### DNS (Domain Name System)

A distributed approach to providing easily-understood names for internetworked
devices. Practically, it's similar to a phone book: DNS allows us to look up a
specific IP address by its domain.

A website's domain refers to the "friendly" name for the website's host, or the
server providing the site's content. A domain differs from a URL in that the
domain is only the server's identifier, not other application or
protocol-related data in the URL.

`https://students.appacademy.com/my-homework?username="coolStudent`

`https`: protocol
`/students.appacademy.com`: domain name
`/my-homework`: application route
`?username="coolStudent`: query parameters

Domain name breakdown

- `students`: subdomain (`www` is the most commonly known subdomain)
- `appacademy`: second-level domain
- `.com`: top level domain

At its core a DNS Server finds an origin server using its domain and makes a client request
to it. It links names to locations.

---

## Suggested Study List

- Networking readings (from wk 16 Saturday HW)
- All readings from this week
- Practice Assessment
- Catstagram
- Storage Practices (Wednesday)
