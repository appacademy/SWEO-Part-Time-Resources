# Phase 2 - after edits

npx dotenv sequelize db:seed:all
echo
echo "---- SHOULD HAVE DATA -----"
sqlite3 db/dev.db "SELECT * FROM 'Trees';"

npx dotenv sequelize db:seed:undo:all
echo
echo "---- DATA SHOULD BE GONE -----"
sqlite3 db/dev.db "SELECT * FROM 'Trees';"

## Leave the database populated with seed data
npx dotenv sequelize db:seed:all
