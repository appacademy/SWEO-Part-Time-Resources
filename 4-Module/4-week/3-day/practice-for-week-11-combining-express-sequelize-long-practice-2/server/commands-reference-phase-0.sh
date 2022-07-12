# Reset (if run multiple times - not in README)

rm -f db/dev.db
rm -rf node_modules
rm -f .env

# Getting started

npm install

echo "DB_FILE=db/dev.db" > .env

# Migrations and seeders

dotenv npx sequelize db:migrate

dotenv npx sequelize db:seed:all

echo "----- Table Exists? -----"
sqlite3 db/dev.db ".schema Trees"

echo "----- Table Has Data? -----"
sqlite3 db/dev.db "SELECT * FROM Trees;"