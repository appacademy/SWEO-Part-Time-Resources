# Phase 1 - before edits

# NOTE: Will fail if model already exists
#       and if model doesn't exist then edits need to be made after this is run
npx dotenv sequelize model:generate --name Tree --attributes tree:string,location:string,heightFt:float,groundCircumferenceFt:float
