# Phase 1 - before edits

# NOTE: Will fail if model already exists
#       and if model doesn't exist then edits need to be made after this is run
npx dotenv sequelize model:generate --name Insect --attributes name:string,description:string,fact:string,territory:string,millimeters:float
