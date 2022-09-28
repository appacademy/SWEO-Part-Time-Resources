// SELECT * FROM Tweets WHERE userId = 5 AND length < 100 LIMIT 10 OFFSET 10;


Tweets.findAll({
    where:{
        //each comma = and + attribute / column
        // userId: {
        //     [Op.eq]:5
        // },
        userId: 5,
        length: {
            [Op.lt]: 100,
        },
    },
    limit: 10,
    offset: 10,

})

// SELECT userId, content FROM Tweets WHERE userId = 5 AND length < 100 LIMIT 10 OFFSET 10;
Tweets.findAll({
    attributes: ["userId", "content"],
    where:{
        //each comma = and + attribute / column
        // userId: {
        //     [Op.eq]:5
        // },
        userId: 5,
        length: {
            [Op.lt]: 100,
        },
    },
    limit: 10,
    offset: 10,

})