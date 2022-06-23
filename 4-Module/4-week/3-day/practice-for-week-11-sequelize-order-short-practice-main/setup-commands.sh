cd server

# Remove the database file (if run multiple times - not in README)

rm db/dev.db 2> /dev/null || true

# Getting started

npm install

cp .env.example .env

# Migrations and seeders

dotenv npx sequelize db:migrate

dotenv npx sequelize db:seed:all

echo "----- Tables Exist? -----"
sqlite3 db/dev.db ".schema"

echo "----- Tables Have Data? -----"
sqlite3 db/dev.db "SELECT 'bandCount', count(id) FROM Bands;"
sqlite3 db/dev.db "SELECT 'instrumentCount', count(id) FROM Instruments;"
sqlite3 db/dev.db "SELECT 'musicianCount', count(id) FROM Musicians;"
sqlite3 db/dev.db "SELECT 'MusicianInstrumentCount', count(id) FROM MusicianInstruments;"