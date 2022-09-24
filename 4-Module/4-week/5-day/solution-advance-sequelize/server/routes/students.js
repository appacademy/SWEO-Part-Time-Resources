// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import model(s)
//!!START SILENT
const { Student, Classroom, StudentClassroom } = require('../db/models');
//!!END
//!!ADD
// const { Student } = require('../db/models');
//!!END_ADD
const { Op } = require("sequelize");

// List
router.get('/', async (req, res, next) => {
    let errorResult = { errors: [], count: 0, pageCount: 0 };

    // Phase 2A: Use query params for page & size
    //!!START
    let { page, size } = req.query;

    // default page and size
    if (!page) page = 1;
    if (!size) size = 10;

    page = parseInt(page);
    size = parseInt(size);
    //!!END

    // Phase 2B: Calculate limit and offset
    // Phase 2B (optional): Special case to return all students (page=0, size=0)
    // Phase 2B: Add an error message to errorResult.errors of
        // 'Requires valid page and size params' when page or size is invalid
    //!!START
    const pagination = {};

    if (
        Number.isInteger(page) && Number.isInteger(size) &&
        page > 0 && size > 0 && size <= 200
    ) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    } else if (!(page === 0 && size === 0)) {
        errorResult.errors.push({
            message: 'Requires valid page and size params'
        });
    }
    //!!END

    // Phase 4: Student Search Filters
    /*
        firstName filter:
            If the firstName query parameter exists, set the firstName query
                filter to find a similar match to the firstName query parameter.
            For example, if firstName query parameter is 'C', then the
                query should match with students whose firstName is 'Cam' or
                'Royce'.

        lastName filter: (similar to firstName)
            If the lastName query parameter exists, set the lastName query
                filter to find a similar match to the lastName query parameter.
            For example, if lastName query parameter is 'Al', then the
                query should match with students whose lastName has 'Alfonsi' or
                'Palazzo'.

        lefty filter:
            If the lefty query parameter is a string of 'true' or 'false', set
                the leftHanded query filter to a boolean of true or false
            If the lefty query parameter is neither of those, add an error
                message of 'Lefty should be either true or false' to
                errorResult.errors
    */
    const where = {};

    //!!START
    const { firstName, lastName, lefty } = req.query;

    // firstName filter
    if (firstName) {
        where.firstName = { [Op.like]: '%' + firstName + '%' };
        // Alternate Solution
        // where.firstName = { [Op.substring]: firstName };
    }

    // lastName filter
    if (lastName) {
        where.lastName = { [Op.like]: '%' + lastName + '%' };
        // Alternate Solution
        // where.lastName = { [Op.substring]: lastName };
    }

    // lefty filter
    if (lefty) {
        if (lefty === 'true') {
            where.leftHanded = true;
        } else if (lefty === 'false') {
            where.leftHanded = false;
        } else {
            errorResult.errors.push({
                message: 'Lefty should be either true or false'
            });
        }
    }
    //!!END


    // Phase 2C: Handle invalid params with "Bad Request" response
    // Phase 3C: Include total student count in the response even if params were
        // invalid
        /*
            If there are elements in the errorResult.errors array, then
            return a "Bad Request" response with the errorResult as the body
            of the response.

            Ex:
                errorResult = {
                    errors: [{ message: 'Grade should be a number' }],
                    count: 267,
                    pageCount: 0
                }
        */
    //!!START
    if (errorResult.errors.length) {
        errorResult.count = await Student.count();

        res.status(400);
        res.json(errorResult);
        return;
    }
    //!!END

    let result = {};

    // Phase 3A: Include total number of results returned from the query without
        // limits and offsets as a property of count on the result
        // Note: This should be a new query
    //!!START SILENT
    result.count = await Student.count({ where });
    //!!END

    result.rows = await Student.findAll({
        attributes: ['id', 'firstName', 'lastName', 'leftHanded'],
        where,
        // Phase 1A: Order the Students search results
        //!!START SILENT
        order: [
            ['lastName'],
            ['firstName'],
            // Phase 8B: Order Classrooms by the student's grade in a
                // classroom with classrooms of higher grades shown before
                // lower grades
            [Classroom, StudentClassroom, 'grade', 'DESC']
        ],
        //!!END
        //!!START SILENT
        // Phase 2D: Add limit and offset to the query
        ...pagination,
        //!!END
        //!!START SILENT
        // Phase 8B: Include Classrooms and the StudentClassroom grade
        include: {
            model: Classroom,
            attributes: ['id', 'name'],
            through: { attributes: ['grade'] }
        }
        //!!END
    });

    // Phase 2E: Include the page number as a key of page in the response data
        // In the special case (page=0, size=0) that returns all students, set
            // page to 1
        /*
            Response should be formatted to look like this:
            {
                rows: [{ id... }] // query results,
                page: 1
            }
        */
    //!!START
    result.page = page || 1;
    //!!END

    // Phase 3B:
        // Include the total number of available pages for this query as a key
            // of pageCount in the response data
        // In the special case (page=0, size=0) that returns all students, set
            // pageCount to 1
        /*
            Response should be formatted to look like this:
            {
                count: 17 // total number of query results without pagination
                rows: [{ id... }] // query results,
                page: 2, // current page of this query
                pageCount: 10 // total number of available pages for this query
            }
        */
    //!!START
    result.pageCount = size === 0 ? 1 : Math.ceil(result.count / size);
    // Alternate solution:
    // if (size === 0) result.pageCount = 1;
    // else result.pageCount = Math.ceil(result.count / size);
    //!!END

    res.json(result);
});

// Export class - DO NOT MODIFY
module.exports = router;
