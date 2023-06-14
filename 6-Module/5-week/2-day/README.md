
# Docker Containers

A Docker container is a running instance of a Docker image. Think of a Docker container as a lightweight, standalone, executable software package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files. A container is launched by running an image.

The container relies on the host machine's kernel, making it significantly lighter than a virtual machine. Containers are designed to be ephemeral and disposable, which aligns well with the modern software paradigms like microservices, cloud-native, and 12-factor applications.

Let's go through an example. Suppose we want to run a simple Apache web server. We can use the command below to start an Apache server:

```
docker run -d -p 8080:80 httpd:2.4
```
Here's what's happening:

docker run tells Docker to run a new container.
-d tells Docker to run the container in the background (detached mode).
-p 8080:80 tells Docker to map port 8080 on the host machine to port 80 on the Docker container.
httpd:2.4 is the name of the Docker image to use to create the container. This particular image is for Apache HTTP Server version 2.4.


# Docker Images

A Docker image is a read-only template that contains a set of instructions for creating a container that can run on the Docker platform. It provides a convenient way to package up applications and preconfigured server environments, which you can use for your own private use or share publicly with other Docker users.

Images are created from Dockerfiles. A Dockerfile is a text document that contains all the commands you would normally execute manually in order to build a Docker image. Using docker build, you can start a build that executes all of the command-line instructions contained in the Dockerfile.

Let's consider a simple Dockerfile for a Python Flask application:

```
# Use an official Python runtime as a parent image
FROM python:3.7-slim

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
CMD ["python", "app.py"]
"""
```


This Dockerfile tells Docker to do the following:

Use the official Python 3.7 image from Docker Hub.
Set the working directory to /app.
Copy the current directory (.) into the container at the working directory (/app).
Run the command pip install --no-cache-dir -r requirements.txt to install the Python dependencies.
Expose port 80 for the app to be accessible.
Launch the application by running the command python app.py.
To build the Docker image from this Dockerfile, you'd use the following command:

```
docker build -t my-python-app .
```

The -t flag lets you tag your image so it's easier to find later. The . is the location of the Dockerfile and application code, in this case, the current directory.

These two concepts - Docker containers and images - are fundamental to understanding and working with Docker.
