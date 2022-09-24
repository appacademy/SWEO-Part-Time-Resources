// These are your options, label the following queries correctly based on how the associated data is loaded: [eager loading, lazy loading, none]

// -----------------problem 1-----------------
// Answer:
const payload = await Band.findAll({
        
    include: {model:Musician},
    order: [ 
       ['name'], [Musician, 'firstName', "ASC"]
    ]
});


// -----------------problem 2-----------------
// Answer:
Tweets.findAll({
    attributes:{
        include: ['userId', 'length']
    },
    where:{
        // each comma = and + attribute (that's why we don't put limit in)
        userId: 5,
        // attribute / column: boolean logic
        length:{
            [Op.lt]: 100
        },

    },
    limit: 10,
    offset: 10
})

// -----------------problem 3-----------------
// Answer:
const allBands = await Band.findAll({ order: [ ['name'] ] })

const data = [];
for(let i = 0; i < allBands.length; i++){
    const band = allBands[i];
    // get musicians for a band member (do not forget await)
    const bandMembers = await band.getMusicians({ order: [ ['firstName'] ] });
    const bandData = {
        id: band.id,
        name: band.name,
        createdAt: band.createdAt,
        updatedAt: band.updatedAt,
        // adding the band members to bandData object
        Musicians: bandMembers
    };
    data.push(bandData);
}