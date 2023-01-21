# Dockerfiles!

## What is an image?
- Docker images are like a template/blueprint to create a docker container
- Images usually contain files which contain dependancies, and metadata which contains instructions to run the container such as network ports and storage information
- Reminder that docker containers / docker images are not full on virtual machines and are more like processes on your OS
- Consist of different layers, which are really just instructions from a dockerfile that tell the image how to build itself

## Image Metadata
- Image ID
- Environment information
- Exposed ports
- Tags (used defined "tags" that follow the name of an image)
- Versions (as images get updated you may specify different version numbers)
- Repository (Refers to a collection of tags that have a common prefix ex: my-app:3.1.4)

## Layers
- Each line/instruction of a dockerfile creates a new image layer
## What is a dockerfile?
- A dockerfile is a text file that contains instructions to build a docker image

## Dockerfile Commands
- FROM
    - Usually the very start of a dockerfile, this command instructs the dockerfile on what image to use
- ENV
    - Sets environment variables in key and value pairs (similar to a .env file)
    - You have access to these variables once the docker container is being built
- RUN
    - Executes a command, for each command a new layer is created
- WORKDIR
    - Sets the working directory to run commands such as RUN/CMD/COPY, you may use this command multiple times in the dockerfile if you want to change the directory in which you run commands in
- EXPOSE
    - Exposes a port to be used by network traffic
- CMD
    - The final command that runs whenever you launch or restart a container
- COPY
    - Makes a copy of the files from the first location specified, to the next location specified
