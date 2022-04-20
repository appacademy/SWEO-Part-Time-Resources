# M4-W3-D3

sequelize commands [quick reference]

```sh
  # remember to preface these commands with `npx` https://www.npmjs.com/package/npx
  # these are commands from the sequelize-cli package
  # it is aliased to accept `sequelize` rather than needing to type out `sequelize-cli`

  sequelize init                 # Initializes project

  sequelize db:migrate           # Run pending migrations
  sequelize db:migrate:undo      # Reverts a migration
  sequelize db:migrate:undo:all  # Revert all migrations ran

  sequelize db:seed              # Run specified seeder
  sequelize db:seed:all          # Run every seeder
  sequelize db:seed:undo         # Deletes data from the database
  sequelize db:seed:undo:all     # Deletes data from the database

  sequelize db:create            # Create database specified by configuration
  sequelize db:drop              # Drop database specified by configuration

  sequelize migration:generate   # Generates a new migration file [alias migration:create]
  sequelize model:generate       # Generates a model and its migration [alias model:create]
  sequelize seed:generate        # Generates a new seed file [alias seed:create]
```

## 1. Creating Migrations

---

### **Practice**: Create Table Migrations (10m)

---

### **Walkthrough**: Create Table Migrations

---

## 2. Undoing Migrations

---

### **Practice and Readings**: Undoing Migrations (15m)

---

### **Walkthrough**: Undoing Migrations

---

## 3. Sequelize Models

---

### **Practice and Reading**: Sequelize Models (20m)

---

### **Walkthrough**: Sequelize Models

---

## 4. Sequelize Seeders

---

### **Practice and Readings**: Sequelize Seeders (15m)

---

### **Walkthrough**: Sequelize Seeders

---

## 5. Validations and Constraints

---

### **Practice and Readings**: Validations and Constraints (20m)

---

### **Walkthrough**: Validations and Constraints

---

## 6. Modify Table Migrations

---

### **Practice**: Research Add/Remove/Modify Columns Migrations (30m)

---

### **Walkthrough**: Research Add/Remove/Modify Columns Migrations

This Walkthrough will probably be at least partially during office hours.

---

[quick reference]:https://github.com/sequelize/cli
