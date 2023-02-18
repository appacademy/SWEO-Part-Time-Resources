// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import models - DO NOT MODIFY
const { Insect, Tree } = require('../db/models');
const { Op } = require("sequelize");

/**
 * PHASE 7 - Step A: List of all trees with insects that are near them
 *
 * Approach: Eager Loading
 *
 * Path: /trees-insects
 * Protocol: GET
 * Response: JSON array of objects
 *   - Tree properties: id, tree, location, heightFt, insects (array)
 *   - Trees ordered by the tree heightFt from tallest to shortest
 *   - Insect properties: id, name
 *   - Insects for each tree ordered alphabetically by name
 */
router.get('/trees-insects', async (req, res, next) => {
    let trees = [];

    trees = await Tree.findAll({
        attributes: ['id', 'tree', 'location', 'heightFt'],
        //!!START SILENT
        include: {
            model: Insect,
            attributes:  [ 'id', 'name' ],
            through: {
                attributes: []
            },
            required: true,
        },
        order: [
            ['heightFt', 'DESC'],
            [Insect, 'name'],
        ],
        //!!END
    });

    res.json(trees);
});

/**
 * PHASE 7 - Step B: List of all insects with the trees they are near
 *
 * Approach: Lazy Loading
 *
 * Path: /insects-trees
 * Protocol: GET
 * Response: JSON array of objects
 *   - Insect properties: id, name, trees (array)
 *   - Insects for each tree ordered alphabetically by name
 *   - Tree properties: id, tree
 *   - Trees ordered alphabetically by tree
 */
router.get('/insects-trees', async (req, res, next) => {
    let payload = [];

    const insects = await Insect.findAll({
        attributes: ['id', 'name', 'description'],
        order: [ ['name'] ],
    });
    for (let i = 0; i < insects.length; i++) {
        const insect = insects[i];
        //!!START SILENT
        const trees = await insect.getTrees({
            attributes: ['id', 'tree'],
            order: [ ['tree'] ],
        });
        //!!END
        payload.push({
            id: insect.id,
            name: insect.name,
            description: insect.description,
            //!!START SILENT
            trees: trees.map(tree => ({
                id: tree.id,
                tree: tree.tree,
            })),
            //!!END
        });
    }

    res.json(payload);
});

/**
 * ADVANCED PHASE 3 - Record information on an insect found near a tree
 *
 * Path: /associate-tree-insect
 * Protocol: POST
 * Parameters: None
 * Request Body: JSON Object
 *   - Property: tree Object
 *     with id, name, location, height, size
 *   - Property: insect Object
 *     with id, name, description, fact, territory, millimeters
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully recorded information
 *   - Property: data
 *     - Value: object (the new tree)
 * Expected Behaviors:
 *   - If tree.id is provided, then look for it, otherwise create a new tree
 *   - If insect.id is provided, then look for it, otherwise create a new insect
 *   - Relate the tree to the insect
 * Error Handling: Friendly messages for known errors
 *   - Association already exists between {tree.tree} and {insect.name}
 *   - Could not create association (use details for specific reason)
 *   - (Any others you think of)
 */
//!!START
router.post('/associate-tree-insect', async (req, res, next) => {
    if (!req.body.hasOwnProperty('tree')) {
        next({
            status: "error",
            message: 'Could not create association',
            details: 'tree missing in request',
        });
    } else if (!req.body.hasOwnProperty('insect')) {
        next({
            status: "error",
            message: 'Could not create association',
            details: 'insect missing in request',
        });
    } else {
        try {
            // Use to know when to check for existing association
            let isCreated = false;
            // Find or Create Tree
            let assocTree;
            if (req.body.tree.hasOwnProperty('id')) {
                assocTree = await Tree.findByPk(req.body.tree.id);
                if (!assocTree) {
                    next({
                        status: "error",
                        message: 'Could not create association',
                        details: `Tree ${req.body.tree.id} not found`,
                    });
                    return;
                }
            } else {
                const {name, location, height, size} = req.body.tree;
                assocTree = await Tree.create({
                    tree: name,
                    location,
                    heightFt: height,
                    groundCircumferenceFt: size
                });
                isCreated = true;
            }

            // Find or Create Insect
            let assocInsect;
            if (req.body.insect.hasOwnProperty('id')) {
                assocInsect = await Insect.findByPk(req.body.insect.id);
                if (!assocInsect) {
                    next({
                        status: "error",
                        message: 'Could not create association',
                        details: `Insect ${req.body.insect.id} not found`,
                    });
                    return;
                }
            } else {
                assocInsect = await Insect.create(req.body.insect);
                isCreated = true;
            }

            // Check for existing association if neither item was created new
            if (!isCreated) {
                const existingTrees = await assocInsect.getTrees({
                    attributes: ['id']
                });
                const foundTree = existingTrees.find(
                    tree => tree.id === assocTree.id
                );
                if (foundTree) {
                    next({
                        status: "noop",
                        message: `Association already exists between ${assocTree.tree} and ${assocInsect.name}`,
                        details: ``,
                    });
                    return;
                }
            }

            // Make association
            assocInsect.addTrees([assocTree]);
            res.json({
                status: "success",
                message: "Successfully created association",
                data: {
                    tree: assocTree,
                    insect: assocInsect,
                }
            })
        } catch (err) {
            next({
                status: "error",
                message: 'Could not create association',
                details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
            });
        }
    }
});
//!!END

// Export class - DO NOT MODIFY
module.exports = router;
