# Create seeder

dotenv npx sequelize seed:generate --name starter-insect-tree

# Execute seeder

dotenv npx sequelize db:seed:all

# Verify seed data

sqlite3 db/dev.db "SELECT * FROM InsectTrees;"