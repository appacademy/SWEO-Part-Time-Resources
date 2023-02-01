# Phase 1 - after edits for constraints and validations

npx dotenv sequelize db:migrate

echo "----- VERIFY TABLE EXISTS -----"
sqlite3 db/dev.db ".schema Images"

echo "----- VERIFY TEST RESULTS -----"
npm test test/step-1-spec.js
