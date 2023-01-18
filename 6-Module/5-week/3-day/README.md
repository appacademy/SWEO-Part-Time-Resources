# Docker Lecture Week 37 Day 3

# Virtual Machines vs Docker

## Virtual Machines
- Includes a complete OS of its own
- Uses hypervisor-based virtualization, which is very resource intensive
- VM's are meant to provide more resources than a single application needs.
- Meant to act as a second fully functioning computer inside of the host OS kernel.

## Kernels
- The part of the OS that controls the hardware
- Passes information between different pieces of hardware, it is essentially the interface between your whole computer
- Allocates memory, shares resources between different hardware components, creates processes, allocates CPU threads, and so much more
- Every OS needs a kernel to interact with the hardware
- After a computer bootloader starts, the kernel program executes and is responsible for booting up the computer(when we wait for computers to boot we are actually waiting on the kernel)

## Hypervisors
- Enables the ability to use virtualization (the process of running more than one OS at a time)
    ### Bare Metal Hypervisor (Type 1)
    - AKA Dedicated Severs
    - A program that installs themselves right on the computers hardware, does not need to be installed through a "host" OS.
    - The server is "dedicated" solely to whoever is using/paying for it, does not interact or communicate with other hypervisors that might be sharing the same hardware.
    - Useful for data server/server hosting companies
    ### Hoisted Hypervisor (Type 2)
    - A program that installs itself on top of the OS
    - Translates requests to the host OS's kernel when it needs to allocate memory/use the cpu/etc
    - The host OS takes care of all of the processes and hardware requests so there is no need to worry about heavy configuration of the computers hardware
    - Much more resource intensive than a Type 1 Hypervisor, since the hypervisor is more of a translator that does not have direct access to the hardware,
    there is extra processing time required
![Hypervisor Example](https://assets.aaonline.io/Docker/hypervisor.png)

## Virtual Machine Downsides
- A virtual machine, is a fully functioning OS with its own dedicated kernel, you allocate memory and storage it is it's own computer.
- The allocated resources are "held" until the VM is turned off/paused/reconfigured to use less memory or storage.
- Long boot times, requires the kernel to boot every time you restart the VM.

# How does a Docker Container Work?
- A VERY lightweight "container" used to bundle up all of a softwares code and its dependancies into an executable package
- A docker container includes everything needed to run an application such as the code(obviously), runtime environment, system tools and system libraries
- Uses the kernel of the host OS, and is allocated it's own file system and IP address
- Takes only seconds to reboot containers rather than the longer boot up times of most computers because there is no need to start the kernel again
- Can be thought of as a process on your computer

## Differnce between a Virtual Machine and a Container
- A VM is used to mimic a fully functioning computer, there are many reasons why somebody might want to do this such as, simply trying out a linux distro on their Windows PC,
or operating in a more secure environment by isolating a partition of their hard drive.
- Containers are MUCH more lightweight than a VM is, as containers only use the resources that they need because of their ability to communicate directly with the kernel program of the host OS.
- Because containers are able to make calls directly to the host OS kernel, this also makes them much more vulnerable to malicious programs, so there is a cost to being lightweight.
- Docker containers often run inside of VM's, Heroku and Render gotta get their servers from somewhere right?(so don't think that a bundling solution only requires one or the other)

## Install Docker (30 Minutes)
- Use the AAO reading called Docker Installation, run docker -v, if you get a version number with no error messages then docker is successfully installed!
## Container Demo(10 Minutes)

## First Containers Short Practice (20 Minutes)

## Container Fun Long Practice (Until an hour before class is over)

## Project Planning Lecture (15 Minutes)

## Project Planning Time (45 Minutes)
