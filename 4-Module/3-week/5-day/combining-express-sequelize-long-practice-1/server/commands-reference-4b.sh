# Phase 2 - after edits

npx dotenv sequelize db:seed:all
echo
echo "---- SHOULD HAVE DATA -----"
sqlite3 db/dev.db "SELECT * FROM 'Insects';"

npx dotenv sequelize db:seed:undo:all
echo
echo "---- DATA SHOULD BE GONE -----"
sqlite3 db/dev.db "SELECT * FROM 'Insects';"

## Leave the database populated with seed data
npx dotenv sequelize db:seed:all
