# Curriculum Notes

Use `backend` server from
`FT12/practices/authenticate-me/backend` as the backend
server. Remember to do the following commands to start up the backend server:

```shell
cp .env.example .env
npm install
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
npm start
```

**Note:** This version of the backend does not include `firstName` and
`lastName`, which students are supposed to implement on their own.
