# Create model and migration
npx dotenv sequelize model:generate --name InsectTree --attributes insectId:integer,treeId:integer

# Run migration
npx dotenv sequelize db:migrate

# Verify
sqlite3 db/dev.db ".schema InsectTrees"