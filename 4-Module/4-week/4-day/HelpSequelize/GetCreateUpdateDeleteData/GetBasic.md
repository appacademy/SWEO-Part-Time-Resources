# Get Data Queries with Sequelize Select Queiries


<br></br>

# Get ONE ROW by PK in Table using findByPk
- SELECT * FROM \<TableName> WHERE id = <desiredID>;
```
    const id = req.params.id
    const descriptiveVariableName = await <ModelName>.findByPk(id);
    res.json(descriptiveVariableName);
```

<br></br>

# Get first row that matches our where statement using findOne()
- SELECT * FROM \<TableName> WHERE \<columnName> = <desiredValue>;
```
    const descriptiveVariableName = await <ModelName>.findOne({where: {
      <columnName>: <desiredValue>
    }});
    res.json(descriptiveVariableName);
```

<br></br>

# Get All Rows in Table using findAll()
- SELECT * FROM \<TableName>;
```
    const descriptiveVariableName = await <ModelName>.findAll();
    res.json(descriptiveVariableName);
```
<br></br>

# Get Specific Columns from all ROWS in Table using findAll()
- SELECT \<columnName>, \<columnName> FROM \<TableName>;
```
    const descriptiveVariableName = await <ModelName>.findAll({
        attributes: ['<columnName>', '<columnName>']
    });
    res.json(descriptiveVariableName);
```
<br></br>

# Get All Column from all Rows Where using findAll() with options
- SELECT * FROM \<TableName> WHERE \<columnName> = \<desiredValue> ORDER BY \<columnName> DESC, \<columnName> ASC;
```
const descriptiveVariableName = await <ModelName>.findAll({
    where: {<columnName> : <desiredValue>},
    order: [['<columnName>', 'DESC'], ['<columnName>', 'ASC']]
});
    res.json(descriptiveVariableName);
```

<br></br>

# Get All Column from all Rows Where AND using findAll()
- SELECT * FROM \<TableName> WHERE \<columnName> = \<desiredValue> AND \<columnName2> = \<desiredValue2> ;
```
const descriptiveVariableName = await <ModelName>.findAll({
    where: {<columnName> : <desiredValue>, <columnName2> : <desiredValue2>}
});
    res.json(descriptiveVariableName);
```

<br></br>

# Get All Column from all Rows Where OR using findAll()
- SELECT * FROM \<TableName> WHERE \<columnName> = \<desiredValue> OR \<columnName2> = \<desiredValue2> ;
```
const { Op } = require("sequelize");
const descriptiveVariableName = await <ModelName>.findAll({
    where: {
        [Op.or]: [ {<columnName> : <desiredValue>}, {<columnName2> : <desiredValue2>}]
       }
});
    res.json(descriptiveVariableName);
```

<br></br>

# Get All Column from all Rows Where IN range using findAll()
- SELECT * FROM \<TableName> WHERE \<columnName> IN (\<desiredValue>, \<desiredValue2>, \<desiredValue3)> ;
```
const descriptiveVariableName = await <ModelName>.findAll({
    where: {
      <columnName> : [<desiredValue>}, <desiredValue2>, <desiredValue3>],
       }
});
    res.json(descriptiveVariableName);
```

<br></br>

# Get All Columns from all Rows using findAll() with aggregate
- SELECT \<columnName>, COUNT(\<columnName>) AS \<columnNameCount> FROM \<TableName>
```
const descriptiveVariableName = await <ModelName>.findAll({
  attributes: {
    include: [
      [sequelize.fn('COUNT', sequelize.col('<columnName>')), '<columnNameCount>']
    ]
  }
});

res.json(descriptiveVariableName);
```

<br></br>


# Op Operations

```
const { Op } = require("sequelize");



Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
    someAttribute: {
      // Basics
      [Op.eq]: 3,                              // = 3
      [Op.ne]: 20,                             // != 20
      [Op.is]: null,                           // IS NULL
      [Op.not]: true,                          // IS NOT TRUE
      [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

      // Using dialect specific column identifiers (PG in the following example):
      [Op.col]: 'user.organization_id',        // = "user"."organization_id"

      // Number comparisons
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // Other operators

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

      [Op.any]: [2, 3],                        // ANY (ARRAY[2, 3]::INTEGER[]) (PG only)
      [Op.match]: Sequelize.fn('to_tsquery', 'fat & rat') // match text search for strings 'fat' and 'rat' (PG only)

      // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY (ARRAY['cat', 'hat'])

      // There are more postgres-only range operators, see below
    }
  }
});
```

# For more Model Queries info follow the link below
- [Full Model Query Documentation](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
