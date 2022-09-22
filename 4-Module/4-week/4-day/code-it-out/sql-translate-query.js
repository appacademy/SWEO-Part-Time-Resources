// SELECT * FROM Tweets WHERE userId = 5 AND length < 100 LIMIT 10 OFFSET 10;


Tweets.findAll({
    where:{
        // anything in here separated by comma will be a column and its value taht we want
        // userId: {
        //     [Op.eq]: 5
        // },
        userId: 5,
        length: {
            [Op.lt]: 100
        },
        // limit: 10, //this is incorrect doesn't make any sense to find a column called `limit` w/ a value of 10
    },
    limit: 10,
    offset: 10
})