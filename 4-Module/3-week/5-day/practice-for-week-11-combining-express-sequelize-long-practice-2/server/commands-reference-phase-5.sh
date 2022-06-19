# Create model and migration
dotenv npx sequelize model:generate --name InsectTree --attributes insectId:integer,treeId:integer

# Run migration
dotenv npx sequelize db:migrate

# Verify
sqlite3 db/dev.db ".schema InsectTrees"