# Updating Instance in sequelize


<br></br>

# Updating a single instance/item
```
    //import model
    const {Author} = require('../db/models')
    //using params to grab id to find instance
    const authorId = req.params.id
    grabbing data we want to update
    const authorInfoToUpdate = req.body
    //finding instance
    const updatedAuthor = await Author.findByPk(authorId);
    //instance method, not model notice lowercase 'a'
    author.name  = authorInfoToUpdate.name
    await author.save()

    res.json({message: `Author with the Id of ${authorId} has officially been updated`, updatedAuthor});
```

<br></br>
