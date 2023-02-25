cd server

# Reset (if run multiple times - not in README)

rm db/dev.db

# Getting started

npm install

cp .env.example .env

# Migrations and seeders

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

echo "----- Tables Exist? -----"
sqlite3 db/dev.db ".schema"

echo "----- Tables Have Data? -----"
sqlite3 db/dev.db "SELECT 'classroomCount', count(id) FROM Classrooms;"
sqlite3 db/dev.db "SELECT 'studentCount', count(id) FROM Students;"
sqlite3 db/dev.db "SELECT 'supplyCount', count(id) FROM Supplies;"

# Start the server

npm run dev