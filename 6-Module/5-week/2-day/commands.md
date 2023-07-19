docker --help | List all Docker commands and options available.

Starting
docker container run <OPTIONS> <IMAGENAME:TAGNUMBER> <COMMAND> | Run an image in a container (see more below).
docker container start <CONTAINERNAME>                         | Starting a container that is currently stopped.


Here are a few flags commonly used with the run command.


--name                                                 | Give the container a name that you can use in other commands
--rm                                                   | Automatically remove the container when it exits.
--mount source=<VOLUMENAME>,target=<PATH-IN-CONTAINER> | Connect a volume
--net                                                  | Connect a custom network
-d                                                     | Use "detached" mode so the container runs in the background rather than taking over your terminal window.
-p                                                     | Map a machine's port to a port in the container (repeat as needed).
-it                                                    | Run a command in a container in interactive mode (similar to exec -it below).

Here are some examples with the run command.

docker container run --name web -p 8080:80 -d nginx
^^^
run: tells Docker to create and start a new container.
--name web: Assigns the name "web" to the container.
-p 8080:80: Maps port 8080 on the host machine to port 80 inside the container. This means that you can access the container's web server by navigating to http://localhost:8080 in your web browser.
-d: Runs the container in detached mode, which means that it runs in the background and doesn't keep the terminal open.
nginx: The name of the image used to create the container.


docker container run -it --rm alpine sh
^^^
run: tells Docker to create and start a new container.
-it: sets up an interactive shell in the container.
--rm: removes the container automatically when it exits.
alpine: specifies the Docker image to use as the base for the container.
sh: specifies the command to run inside the container.


docker container run -it --rm ubuntu bash
^^^
run: tells Docker to create and start a new container.
-it option enables an interactive terminal so that the Bash shell can be accessed within the container
--rm option removes the container automatically once it's stopped and exited to keep the system clean and avoid any lingering containers taking up space
ubuntu specifies the image that the container is based on
bash specifies the command to be run inside the container, which in this case launches the Bash shell.


Accessing
docker container exec <CONTAINERNAME> <COMMMAND>  | Execute a command in a container that is already running.
docker container exec -it <CONTAINERNAME> bash    | Connect to a container with shell - commonly,bash (shown here) or sh. (Use ctrl+d or type exit to disconnect.)


Listing
docker ps or docker container ls                  | List all running containers.
docker ps -a or docker container ls -a            | List all containers.
docker ps -a -q                                   | List the ids of all containers (used to stop all containers - see below).


Monitoring
docker stats                             | Get live performance data. (Use ctrl+c to disconnect.)
docker container inspect <CONTAINERNAME> | Return json with metadata about the specified container.
docker container top <CONTAINERNAME>     | Display the running processes of the specified container.

Clean up
docker container stop <CONTAINERNAME>    | Stop the running processes in the specified container.
docker container stop $(docker ps -a -q) | Stop all containers.
docker container prune                   | Remove all stopped containers.
docker container rm <CONTAINERNAME>      | Remove one or more stopped containers.
docker container rm -f <CONTAINERNAME>   | Remove a running container by forcefully killing its processes (should rarely be used).
