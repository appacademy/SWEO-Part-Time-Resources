# Phase 2 - after edits

dotenv npx sequelize db:seed:all
echo
echo "---- SHOULD HAVE DATA -----"
sqlite3 db/dev.db "SELECT * FROM 'Insects';"

dotenv npx sequelize db:seed:undo:all
echo
echo "---- DATA SHOULD BE GONE -----"
sqlite3 db/dev.db "SELECT * FROM 'Insects';"

## Leave the database populated with seed data
dotenv npx sequelize db:seed:all