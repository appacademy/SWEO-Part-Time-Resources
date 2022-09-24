// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import model(s)
//!!START SILENT
const { Classroom, Student, StudentClassroom, Supply, sequelize } = require('../db/models');
//!!END
//!!ADD
// const { Classroom } = require('../db/models');
//!!END_ADD
const { Op } = require('sequelize');

// List of classrooms
router.get('/', async (req, res, next) => {
    let errorResult = { errors: [], count: 0, pageCount: 0 };

    // Phase 6B: Classroom Search Filters
    /*
        name filter:
            If the name query parameter exists, set the name query
                filter to find a similar match to the name query parameter.
            For example, if name query parameter is 'Ms.', then the
                query should match with classrooms whose name includes 'Ms.'

        studentLimit filter:
            If the studentLimit query parameter includes a comma
                And if the studentLimit query parameter is two numbers separated
                    by a comma, set the studentLimit query filter to be between
                    the first number (min) and the second number (max)
                But if the studentLimit query parameter is NOT two integers
                    separated by a comma, or if min is greater than max, add an
                    error message of 'Student Limit should be two integers:
                    min,max' to errorResult.errors
            If the studentLimit query parameter has no commas
                And if the studentLimit query parameter is a single integer, set
                    the studentLimit query parameter to equal the number
                But if the studentLimit query parameter is NOT an integer, add
                    an error message of 'Student Limit should be a integer' to
                    errorResult.errors 
    */
    const where = {};

    //!!START
    const { name, studentLimit } = req.query;

    if (name) {
        where.name = { [Op.like]: '%' + name + '%' };
        // Alternate Solution
        // where.name = { [Op.substring]: name };
    }

    if (studentLimit) {
        if (studentLimit.indexOf(',') > 0) { // Classroom studentLimit between
            // Two numbers uses between functionality
            const min = parseInt(studentLimit.split(',')[0]);
            const max = parseInt(studentLimit.split(',')[1]);
            if (Number.isInteger(min) || Number.isInteger(max) || max < min) {
                errorResult.errors.push({
                    message: 'Student Limit should be two integers: min,max'
                });
            }
            // Solution
            where.studentLimit = { [Op.between]: [min, max] };
            // Alternate solution
            // where.studentLimit = {
            //     [Op.gte]: min,
            //     [Op.lte]: max,
            // };
        } else { // Classroom studentLimit equal to
            const value = parseInt(studentLimit);
            if (Number.isInteger(value)) {
                errorResult.errors.push({
                    message: 'Student Limit should be an integer'
                });
            }
            where.studentLimit = { [Op.eq]: value };
        }
    }
    //!!END

    const classrooms = await Classroom.findAll({
        attributes: [ 'id', 'name', 'studentLimit' ],
        where,
        // Phase 1B: Order the Classroom search results
        //!!START SILENT
        order: ['name'],
        //!!END
        //!!START SILENT
        // Phase 9A: Calculate average grade per classroom
        // Phase 9B: Calculate number of students per classroom
        include: [
            {
                model: StudentClassroom,
                attributes: []
            }
        ],
        attributes: {
            include: [
                [
                    sequelize.fn("AVG", sequelize.col("StudentClassrooms.grade")), 
                    "avgGrade"
                ],
                [
                    sequelize.fn("COUNT", sequelize.col("StudentClassrooms.id")), 
                    "numStudents"
                ]
            ]
        },
        group: ['Classroom.id']
        //!!END
    });

    res.json(classrooms);
});

// Single classroom
router.get('/:id', async (req, res, next) => {
    let classroom = await Classroom.findByPk(req.params.id, {
        attributes: ['id', 'name', 'studentLimit'],
        // Phase 7:
            // Include classroom supplies and order supplies by category then
                // name (both in ascending order)
            // Include students of the classroom and order students by lastName
                // then firstName (both in ascending order)
                // (Optional): No need to include the StudentClassrooms
        //!!START
        include: [
            {
                model: Supply,
                attributes: ['id', 'name', 'category', 'handed'],
            },
            {
                model: Student,
                attributes: ['id', 'firstName', 'lastName', 'leftHanded'],
                through: {
                    attributes: []
                },
                required: true,
            },
        ],
        order: [
            [Supply, 'category', 'ASC'],
            [Supply, 'name', 'ASC'],
            [Student, 'lastName', 'ASC'],
            [Student, 'firstName', 'ASC']
        ],
        //!!END
        //!!START SILENT
        // Phase 5A: Alternate solution 2
        // raw: true
        //!!END
    });

    if (!classroom) {
        res.status(404);
        res.send({ message: 'Classroom Not Found' });
    }

    // Phase 5: Supply and Student counts, Overloaded classroom
        // Phase 5A: Find the number of supplies the classroom has and set it as
            // a property of supplyCount on the response
        // Phase 5B: Find the number of students in the classroom and set it as
            // a property of studentCount on the response
        // Phase 5C: Calculate if the classroom is overloaded by comparing the
            // studentLimit of the classroom to the number of students in the
            // classroom
        // Optional Phase 5D: Calculate the average grade of the classroom 
    //!!START
    // Supply count
    // Alternate Solution 1
    const aggregates = {};
    // Phase 5A:
    aggregates.supplyCount = await classroom.countSupplies();
    // Phase 5B:
    aggregates.studentCount = await classroom.countStudents();
    // Phase 5C:
    aggregates.overloaded = aggregates.studentCount > classroom.studentLimit;
    // Optional Phase 5D:
    const studentClassroomAvg = await StudentClassroom.findOne({
        attributes: [
            [
                sequelize.fn('AVG', sequelize.col('StudentClassroom.grade')),
                'avgGrade'
            ]
        ],
        where: { classroomId: classroom.id }
    });
    aggregates.studentClassroomAvg = studentClassroomAvg.toJSON().avgGrade;
    // Phase 5: Make the returned classroom a JSON
    classroom = classroom.toJSON();
    Object.assign(classroom, aggregates);

    // Alternate Solution 2
    // // Phase 5A:
    // classroom.supplyCount = await Supply.count({
    //     where: { classroomId: classroom.id }
    // });
    // // Phase 5B:
    // classroom.studentCount = await StudentClassroom.count({
    //     where: { classroomId: classroom.id }
    // });
    // // Phase 5C:
    // classroom.overloaded = classroom.studentCount > classroom.studentLimit;
    // // Optional Phase 5D:
    // const studentClassroomAvg = await StudentClassroom.findOne({
    //     attributes: [
    //         [
    //             sequelize.fn('AVG', sequelize.col('StudentClassroom.grade')),
    //             'avgGrade'
    //         ]
    //     ],
    //     where: { classroomId: classroom.id },
    //     raw: true
    // });
    // classroom.avgGrade = studentClassroomAvg.avgGrade;

    // Alternate Solution 3
    // // Phase 5A:
    // classroom.supplyCount = await classroom.countSupplies();
    // // Phase 5B:
    // classroom.studentCount = await classroom.countStudents();
    // // Phase 5C:
    // classroom.overloaded = classroom.studentCount > classroom.studentLimit;
    // // Optional Phase 5D:
    // const studentClassroomAvg = await StudentClassroom.findOne({
    //     attributes: [
    //         [
    //             sequelize.fn('AVG', sequelize.col('StudentClassroom.grade')),
    //             'avgGrade'
    //         ]
    //     ],
    //     where: { classroomId: classroom.id }
    // });
    // classroom.avgGrade = studentClassroomAvg.avgGrade;
    //!!END

    res.json(classroom);
});

// Export class - DO NOT MODIFY
module.exports = router;
