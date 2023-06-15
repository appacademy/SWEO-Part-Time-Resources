1. Introduction to Dockerfiles

Dockerfiles are text files that contain the commands or instructions to build a Docker image. They automate the process of Docker image creation, making it easy and efficient to create Docker environments and package applications.

2. Anatomy of a Dockerfile

A Dockerfile consists of various commands and arguments. The most common commands include:

FROM: This command sets the base image for the Dockerfile. It's usually the first command in a Dockerfile. For example, FROM ubuntu:18.04.
RUN: This command executes a shell command. It's useful for installing packages or other software. For example, RUN apt-get update && apt-get install -y nginx.
CMD: This command provides defaults for an executing container. These can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT command. For example, CMD ["nginx", "-g", "daemon off;"].
COPY: This command is used to copy files from the host system into the Docker container. For example, COPY . /app.
WORKDIR: This command sets the working directory inside the Docker container. For example, WORKDIR /app.
EXPOSE: This command informs Docker that the container listens on the specified network ports at runtime. For example, EXPOSE 80.


3. Creating a Simple Dockerfile

```
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]
```

4. Building an Image from a Dockerfile

Docker uses the docker build command to build Docker images from a Dockerfile and a context. The build context is the set of files located in the specified PATH or URL. For example:

```
docker build -t my-nodejs-app:latest .
```

This command tells Docker to build an image from the Dockerfile in the current directory (.), and tag (-t) the image with the name my-nodejs-app:latest.

5. Best Practices for Writing Dockerfiles

There are several best practices to keep in mind when writing Dockerfiles, including:

Minimize the number of layers: In Docker, each instruction in a Dockerfile contributes to the formation of a new layer in the image. Minimizing the number of layers can reduce build time and improve efficiency.
Use .dockerignore: Similar to .gitignore, .dockerignore excludes the files and directories that match specified patterns. It can increase the build context speed by excluding unnecessary files and directories.
Avoid storing secrets in Dockerfiles: Never store sensitive data, such as passwords, in your Dockerfiles or source code.




# Exercise: Writing a Dockerfile for a Python Flask Application

You are given a simple Python Flask web application. Your task is to write a Dockerfile that builds an image for this application.

The application has the following directory structure:
```
/myapp
  |- app.py
  |- requirements.txt
```

- The app.py file contains the code for the web application.
- The requirements.txt file contains the Python dependencies that need to be installed for the application to run.


Here are the contents of the app.py file:
```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

And the requirements.txt file:
```
flask==1.1.2

```
Your task is to write a Dockerfile for this application that does the following:

Sets a Python 3 base image. (use python:3.9)
Sets /app as the working directory in the container.
Copies the app.py and requirements.txt files into the container.
Installs the Python dependencies listed in the requirements.txt file.
Exposes port 5000 (the default Flask port) to the outside world.
Runs the application when the container is started.
