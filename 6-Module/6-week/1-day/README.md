# Docker Compose
- Docker compose is “a tool for defining and running multi-container Docker applications"
- Uses a YAML file ([YAML Documentation](https://yaml.org/spec/1.2.2/)) (YAML files basically use key and value pairs to configure the containers)
- Simplifies the process of deploying a multiple container application
- Automatically creates a network that is joined by all containers that have the same "service name"
- Transfers volume data from previously ran containers to the new container being created
- Caches the configuration of the YAML file to detect changes to the configuration, if nothing has been changed it uses the previously existing containers
- When you use a docker compose file for your project, you can simply git pull from your repo, then run `docker-compose --build` and `docker-compose up` to completely setup your application. This will set up volumes for storage, install all your dependancies and run your start scripts such as `node server.js` or `flask run`

# Docker Compose CLI
- docker-compose --help - List all Docker-Compose commands and options available
- docker-compose up - 	Set up your volumes, networks, and start the specified containers
- docker-compose up --build - 	Build images before setting up volumes and networks to start the containers
- docker-compose down - Stop and remove all containers and networks
- docker-compose down -v - 	Stop and remove all volumes, containers, and networks

# Docker Compose File
```YAML
version: '3'
services:
  webapp:
    #  the build command tells compose it's building this image
    build:
        # Will build in the current directory
        context: .
        dockerfile: whateverthenameis.Dockerfile
        #  by passing a name here you are telling compose to name and tag the built image by this name
    image: whateverImage:whatevertag
    ports:
        - '80:80'
```
