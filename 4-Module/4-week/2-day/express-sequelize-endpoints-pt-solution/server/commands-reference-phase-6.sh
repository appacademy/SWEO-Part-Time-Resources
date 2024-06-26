# Create seeder

npx dotenv sequelize seed:generate --name starter-insect-tree

# Execute seeder

npx dotenv sequelize db:seed:all

# Verify seed data

sqlite3 db/dev.db "SELECT * FROM InsectTrees;"
