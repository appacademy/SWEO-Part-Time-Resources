cd sql-practice

# Remove database file (if run multiple times)

rm practice.db 2> /dev/null || true

# Getting started

npm install

# Add seed data

sqlite3 practice.db ".read cats.sql"

sqlite3 practice.db ".read toys.sql"

sqlite3 practice.db ".read cat_toys.sql"

# Check seed data

echo "----- Tables Exist? -----"
sqlite3 practice.db ".schema"

echo "----- Tables Have Data? -----"
sqlite3 practice.db "SELECT 'cats_count', count(id) FROM cats;"
sqlite3 practice.db "SELECT 'toys_count', count(id) FROM toys;"
sqlite3 practice.db "SELECT 'cat_toys_count', count(id) FROM cat_toys;"