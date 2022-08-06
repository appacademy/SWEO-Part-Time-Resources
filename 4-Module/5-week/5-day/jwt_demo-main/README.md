# jwt_demo

# Model/Migrations Setup

npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

# Migrate

npx dotenv sequelize db:migrate

# Create seeders

npx sequelize seed:generate --name users


# JWT website
https://jwt.io/

# Kill an ongoing port on Mac

sudo lsof -t -i tcp:<port number> | xargs kill -9


example usage: to kill port 8000

sudo lsof -t -i tcp:8000 | xargs kill -9


# How to use

run index.html on live server on the frontend

create a .env file on the backend folder

run start.sh on the backend
copy your secret key to .env file
