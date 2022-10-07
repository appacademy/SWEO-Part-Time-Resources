// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.data_source, sqlite3.OPEN_READWRITE);

/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
router.get('/', (req, res, next) => {
    const sql = 'SELECT height_ft, tree, id FROM trees ORDER BY height_ft DESC';
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.json(rows);
        }
    });
});

/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
router.get('/:id', (req, res, next) => {
    const sql = 'SELECT * FROM trees WHERE id = ?';
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
            next(err);
        } else {
            res.json(row);
        }
    });
});

/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
router.post('/', (req, res, next) => {
    const sql = `
        INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
        VALUES (?, ?, ?, ?);
    `;
    const params = [
        req.body.name,
        req.body.location,
        req.body.height,
        req.body.size
    ];

    db.run(sql, params, (err) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'success'
            });
        }
    });
});

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
router.delete('/:id', (req, res, next) => {
    const sql = 'DELETE FROM trees WHERE id = ?';
    const params = [req.params.id];

    db.run(sql, params, err => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'success'
            });
        }
    });
});

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
router.put('/:id', (req, res, next) => {
    // handle invalid request
    if (String(req.body.id) !== req.params.id) {
        res.status(400);
        res.json({
            error: 'ids do not match',
        });
    } else {
        const sql = `
            UPDATE trees 
            SET 
                tree = ?, 
                location = ?, 
                height_ft = ?, 
                ground_circumference_ft = ?
            WHERE id = ?`;
        const params = [
            req.body.name,
            req.body.location,
            req.body.height,
            req.body.size,
            req.body.id
        ];

        db.run(sql, params, err => {
            if (err) {
                next(err);
            } else {
                res.json({
                    message: 'success'
                });
            }
        });
    }
});

// Export class - DO NOT MODIFY
module.exports = router;