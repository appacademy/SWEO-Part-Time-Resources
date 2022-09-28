# Reset (if run multiple times - not in README)

rm -f db/dev.db
rm -rf node_modules
rm -f .env

# Getting started

npm install

echo "DB_FILE=db/dev.db" > .env

dotenv npx sequelize db:migrate
