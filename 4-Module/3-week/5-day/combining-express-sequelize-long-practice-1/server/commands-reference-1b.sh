# Phase 1 - after edits for constraints and validations

npx dotenv sequelize db:migrate

echo "----- VERIFY TABLE EXISTS -----"
sqlite3 db/dev.db ".schema Trees"

echo
npm test test/phase-1-spec.js
