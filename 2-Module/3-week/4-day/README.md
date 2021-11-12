# M2W3D4
## Memory - What the h*ck is it? [10min]

## RAM
- What does it hold?
  - bits, 1s and 0s, in the form of electrical charge
- Is it slow or fast?
  - fast, to read and write
- Persistent or volatile?
  - volatile - HDDs and SSDs are for long-term storage
  - needs a constant electric power source to retain information
- Cheap or expensive compared to hard disk storage?
  - expensive
- How do we access or refer to it?
  - memory addresses, pointers, references



#### Only two kinds of things are truly stored in memory
  - Instructions
  - Raw data









## Pointers, references, etc
- What do 16/32/64-bit even mean?
  - 0000000000
  - 1111111111
- How much space is needed to store an address/reference/pointer on a 16/32/64-bit system?
- What is a variable?
- What is an array?
- What is a stack?
  - Like an array, but...
  - Things can only be added to or removed from the top
- Let's "zoom out" on Node
```
       64        65        66        67
 01101000  11110010  00000000  00001000
       68        69        6A        6B
 01110000  01110110  01110100  01110010
       6C        6D        6E        6F
 00000000  00000000  00000000  00000000
       70        71        72        73
 00000010  00101111  00000011  01000001
       74        75        76        77
 00000011  01000001  00000010  00000000
 [47, 0, 'A', 'A']
```

 