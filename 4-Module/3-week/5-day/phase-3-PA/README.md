# Sequelize-3 Practice Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Implement an API endpoint to return all the entries in the `WarehouseItems`
  table
* Implement an API endpoint to create an entry in the `WarehouseItems` table

Use the technologies you have used up to this point. They are all listed in
the **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies already listed in the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file describes the Sequelize
configuration for this application.

## Getting started

Download the starter from the Download link at the bottom of this page.

Run `npm install` to install the dependencies listed in the last section.

Run `npm test` to run the all the test specs at any given time.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

Run the migration and seed files. Take a look at the migration and model files
to familiarize yourself with the data of this application.

## Instructions

Given following API endpoint specifications, add the API endpoints to the
server in **app.js**.

Run `npm test` to make sure you pass all the tests.

### GET /items

Returns all the entries in the `WarehouseItems` table **that are new, not used**
(`isUsed` is `false`).

Request:

* Method: `GET`
* URL: `/items`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  [
    {
      "id": 1,
      "name": "Paint",
      "price": 12.12,
      "quantity": 12,
      "isUsed": false
    },
    {
      "id": 3,
      "name": "Webcam",
      "price": 50.5,
      "quantity": 5,
      "isUsed": false
    }
  ]
  ```

### GET /items/:name

Returns the entry in the `WarehouseItems` table that matches the `name` route
parameter.

Request:

* Method: `GET`
* Example URL: `/items/Paint`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 1,
    "name": "Paint",
    "price": 12.12,
    "quantity": 12,
    "isUsed": false
  }
  ```

Error Response:

When the `name` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```

### PUT /items/:id

Update the entry in the `WarehouseItems` table that matches the `id` route
parameter.

Request:

* Method: `PUT`
* Example URL: `/items/2`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "name": "Pen",
    "price": 2.50,
    "quantity": 4,
    "isUsed": true
  }
  ```

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 2,
    "name": "Pen",
    "price": 2.50,
    "quantity": 4,
    "isUsed": true
  }
  ```

Error Response:

When the `id` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```

### DELETE /items/:id

Delete the entry in the `WarehouseItems` table that matches the `id` route
parameter.

Request:

* Method: `DELETE`
* Example URL: `/items/3`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "message": "Successfully deleted"
  }
  ```

Error Response:

When the `id` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```

## Resetting Migration and Model Files

Feel free to make edits to the migration and model files. All edits you make to
the migration and model files will be reset when you submit your project. So,
make sure the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder