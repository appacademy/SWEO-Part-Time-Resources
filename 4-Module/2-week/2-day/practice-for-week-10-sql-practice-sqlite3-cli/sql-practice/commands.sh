# ---------- Step 1 ----------

# Go into the SQLite3 CLI
sqlite3

# See list of SQLite3 commands
.help

# Shortcut To Exit: Ctrl+d
# Exit the SQLite3 CLI
.exit

# ---------- Step 2 ----------

# Create a new SQLite3 database called example.db
sqlite3 example.db

# Command To View Tables
.tables

# Command To View Schema
.schema

# Execute the SQL in the example.sql file
.read example.sql

# Command To View Tables
.tables

# Command To View Schema
.schema

# Query for all the rows in the samples table
SELECT * FROM samples;

# ---------- Step 3 ----------

# See list of SQLite3 commands
.help

# Turn on headers option
.headers on

# Query for all the rows in the samples table
SELECT * FROM samples;

# ---------- Step 4 ----------

# Shortcut To Exit: Ctrl+d
# Exit the SQLite3 CLI
.exit