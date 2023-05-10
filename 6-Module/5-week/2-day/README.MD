# WK 37 Day 2 - DOCKER

## Docker is a tool that allows developers to create, deploy, and run applications in a containerized environment. Containers are isolated environments that bundle an application and all its dependencies into a single package that can be easily moved between different systems.

- Docker simplifies the process of creating and managing containers by providing a simple interface and a set of tools that make it easy to package and deploy applications. It does this by using containerization technology to create lightweight, portable, and self-sufficient containers.

### The benefits of using Docker include:

- Portability - Containers can be easily moved between different systems, making it easy to deploy applications across multiple environments.

- Consistency - Containers ensure that an application runs the same way across different environments, reducing the risk of errors and compatibility issues.

- Isolation - Containers are isolated from each other and from the host system, providing an extra layer of security and stability.

- Efficiency - Containers are lightweight and use fewer resources than virtual machines, allowing for more efficient use of hardware.

- Docker has become a popular tool for modern software development because of its ease of use, portability, and efficiency. It has also become a standard for containerization technology and is widely used in cloud computing environments.

### Images

- A Docker image is a standalone and immutable package that contains everything needed to run an application, including its code, dependencies, and any additional configuration or runtime environment settings. It is essentially a snapshot of a specific version of an application or service and can be thought of as a template for creating Docker containers.

- Docker images are built using a Dockerfile, which is a text file that contains a set of instructions that Docker uses to build the image. These instructions typically include installing packages, copying files, and running commands to set up the environment needed to run the application.

- Once an image is built, it can be stored in a registry such as Docker Hub, where it can be easily shared and downloaded by others. To run an application using a Docker image, you start a container from the image, which creates a runtime instance of the image.

### Containers

- A Docker container, on the other hand, is a running instance of a Docker image. It is a lightweight and portable executable package that encapsulates an application and its dependencies, allowing it to run reliably and consistently across different computing environments. Each container runs in its own isolated environment, with its own file system, networking, and process space, making it an ideal solution for building and deploying microservices-based architectures.

- Docker ensures that containers produce the same environment on all machines, solving the issue of "But it worked on my machine!".

- Containers can be started, paused, stopped, and disposed of quickly, making them perfect for temporal tasks. They can run long-running daemons (background processes) like web servers.

## Docker Video (30 minutes)

- [Docker 1 lecture ](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/lecture--docker-i)

<br></br>

### Reading/Video Discussion (10 Minutes)

<br></br>

## Container Reading and Videos (30 minutes)

- [Containers Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/containers)

- [Container Intro Video](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/container-intro)

- [Container Command Sheet](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/container-command-sheet)

- [Container Process Monitoring](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/container-process-monitoring)

<br></br>

### Reading/Video Discussion (10 Minutes)

## Persisting Data Reading/Videos (25 Minutes)

- [Persisting Data In Docker Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/persisting-data-in-docker)

- [Persisting Data : Bind Mounts](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/persistent-data-in-docker--bind-mounts)

- [Persisting Data : Volumes](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/persistent-data-in-docker-volumes)
  <br></br>

### Reading/Video Discussion (10 Minutes)

<br></br>

## Container Networking In Docker Readings/Videos (25 minutes)

- [Container Networking In Docker Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/container-networking-in-docker)
- [Docker Networking](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/docker-networking)
- [Container Health Checks Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/container-health-checks)
  <br></br>

### Reading/Video Discussion (10 Minutes)

<br></br>

## EOD First Containers Project Walkthrough

- [First Containers Project](https://github.com/appacademy/practice-for-week-19-docker-first-containers-long-practice)

## HMWK

- [Docker II Lecture](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-37---docker/finish-lecture--docker-ii)
