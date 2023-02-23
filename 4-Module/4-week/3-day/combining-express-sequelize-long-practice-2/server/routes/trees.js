// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * BASIC PHASE 1, Step A - Import model
 */
//!!START
const { Tree } = require('../db/models');
//!!END

/**
 * INTERMEDIATE BONUS PHASE 1 (OPTIONAL), Step A:
 *   Import Op to perform comparison operations in WHERE clauses
 **/
//!!START
const { Op } = require("sequelize");
//!!END

/**
 * BASIC PHASE 1, Step B - List of all trees in the database
 *
 * Path: /
 * Protocol: GET
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: heightFt, tree, id
 *   - Ordered by the heightFt from tallest to shortest
 */
router.get('/', async (req, res, next) => {
    let trees = [];

    //!!START
    trees = await Tree.findAll({
        attributes: ['heightFt', 'tree', 'id'],
        order: [['heightFt','DESC']],
    });
    //!!END

    res.json(trees);
});

/**
 * BASIC PHASE 1, Step C - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, heightFt, groundCircumferenceFt
 */
router.get('/:id', async (req, res, next) => {
    let tree;

    try {
        //!!START
        tree = await Tree.findByPk(req.params.id);
        //!!END

        if (tree) {
            res.json(tree);
        } else {
            next({
                status: "not-found",
                message: `Could not find tree ${req.params.id}`,
                details: 'Tree not found'
            });
        }
    } catch(err) {
        next({
            status: "error",
            message: `Could not find tree ${req.params.id}`,
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * BASIC PHASE 2 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Request Body: JSON Object
 *   - Properties: name, location, height, size
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully created new tree
 *   - Property: data
 *     - Value: object (the new tree)
 */
router.post('/', async (req, res, next) => {
    try {
        //!!START SILENT
        const { name, location, height, size } = req.body;
        const newTree = await Tree.create({
            tree: name,
            location,
            heightFt: height,
            groundCircumferenceFt: size
        });
        //!!END
        res.json({
            status: "success",
            message: "Successfully created new tree",
            //!!START SILENT
            data: newTree
            //!!END
        });
    } catch(err) {
        next({
            status: "error",
            message: 'Could not create new tree',
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * BASIC PHASE 3 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully removed tree <id>
 * Custom Error Handling:
 *   If tree is not in database, call next() with error object
 *   - Property: status
 *     - Value: not-found
 *   - Property: message
 *     - Value: Could not remove tree <id>
 *   - Property: details
 *     - Value: Tree not found
 */
router.delete('/:id', async (req, res, next) => {
    try {
        //!!START SILENT
        const deletedTree = await Tree.findByPk(req.params.id);
        if (deletedTree) {
            await deletedTree.destroy();
            res.json({
                status: "success",
                message: `Successfully removed tree ${req.params.id}`,
            });
        } else {
            next({
                status: "not-found",
                message: `Could not remove tree ${req.params.id}`,
                details: 'Tree not found'
            });
        }
        //!!END
        //!!ADD
        // res.json({
            // status: "success",
            // message: `Successfully removed tree ${req.params.id}`,
        // });
        //!!END_ADD
    } catch(err) {
        next({
            status: "error",
            message: `Could not remove tree ${req.params.id}`,
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * INTERMEDIATE PHASE 4 - UPDATE a tree row in the database
 *   Only assign values if they are defined on the request body
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Request Body: JSON Object
 *   - Properties: id, name, location, height, size
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully updated tree
 *   - Property: data
 *     - Value: object (the updated tree)
 * Custom Error Handling 1/2:
 *   If id in request params does not match id in request body,
 *   call next() with error object
 *   - Property: status
 *     - Value: error
 *   - Property: message
 *     - Value: Could not update tree <id>
 *   - Property: details
 *     - Value: <params id> does not match <body id>
 * Custom Error Handling 2/2:
 *   If tree is not in database, call next() with error object
 *   - Property: status
 *     - Value: not-found
 *   - Property: message
 *     - Value: Could not update tree <id>
 *   - Property: details
 *     - Value: Tree not found
 */
router.put('/:id', async (req, res, next) => {
    try {
        //!!START
        const {id, name, location, height, size} = req.body;
        if (!req.params.id || !req.body.id || req.params.id !== req.body.id.toString()) {
            next({
                status: "error",
                message: "Could not update tree",
                details: `${req.params.id} does not match ${req.body.id}`
            });
        } else {
            const updatedTree = await Tree.findByPk(id);
            if (updatedTree) {
                if (name) {
                    updatedTree.tree = name;
                }
                if (location) {
                    updatedTree.location = location;
                }
                if (height) {
                    updatedTree.heightFt = height;
                }
                if (size) {
                    updatedTree.groundCircumferenceFt = size;
                }
                updatedTree.save();
                res.json({
                    status: "success",
                    message: "Successfully updated tree",
                    data: updatedTree
                });
            } else {
                next({
                    status: "not-found",
                    message: `Could not update tree ${req.params.id}`,
                    details: 'Tree not found'
                });
            }
        }
        //!!END
    } catch(err) {
        next({
            status: "error",
            message: 'Could not update new tree',
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * INTERMEDIATE BONUS PHASE 1 (OPTIONAL), Step B:
 *   List of all trees with tree name like route parameter
 *
 * Path: /search/:value
 * Protocol: GET
 * Parameters: value
 * Response: JSON array of objects
 *   - Object properties: heightFt, tree, id
 *   - Ordered by the heightFt from tallest to shortest
 */
router.get('/search/:value', async (req, res, next) => {
    let trees = [];

    //!!START SILENT
    trees = await Tree.findAll({
        attributes: ['heightFt', 'tree', 'id'],
        where: {tree: {[Op.like]: `%${req.params.value}%`}},
        order: [['tree', 'ASC']],
    });
    //!!END

    res.json(trees);
});

// Export class - DO NOT MODIFY
module.exports = router;