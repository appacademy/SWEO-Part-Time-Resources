cd server

# Remove the database file (if run multiple times - not in README)

rm db/dev.db 2> /dev/null || true

# Getting started

npm install

cp .env.example .env

# Migrations and seeders

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

echo "----- Tables Exist? -----"
sqlite3 db/dev.db ".schema"

echo "----- Tables Have Data? -----"
sqlite3 db/dev.db "SELECT 'bookCount', count(id) FROM Books;"
sqlite3 db/dev.db "SELECT 'authorCount', count(id) FROM Authors;"
sqlite3 db/dev.db "SELECT 'reviewCount', count(id) FROM Reviews;"
sqlite3 db/dev.db "SELECT 'reviewerCount', count(id) FROM Reviewers;"