app.get('/tweets', async (req, res, next) => {

    const { size, page, userId } = req.query;

    if(!size) size = 3;
    if(!page) page = 1;

    parseInt(size)
    parseInt(page)



    const pagination = {};
    if(size >= 1 && page >= 1){
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }


const pageTweets = await Tweet.findAll({
    where: {
        id: userId 
    },
    ...pagination
});

res.json(pageTweets)
});