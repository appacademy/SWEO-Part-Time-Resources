# Delete Instance in sequelize


<br></br>

# Deleting a single item
```
    //import model
    const {Author} = require('../db/models')

    const authorId = req.params.id
    const author = await Author.findByPk(authorId);
    //instance method, not model notice lowercase 'a'
    author.destroy()

    res.json({"message": `Author with the id of ${auhtorId} has successfully been destroyed`});
```

<br></br>

# Deleting a multiple items from a table
```
    //import model
    const {Author} = require('../db/models')
    //Model method, not instance notice uppercase 'A'
    //will delete anything in that table where the specified column has the desired value
    Author.destroy({where: {columnName: desiredValue}})
    res.json({"message": `Author with the id of ${auhtorId} has successfully been destroyed`});
```

<br></br>
