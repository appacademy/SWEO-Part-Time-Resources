# Common Sequelize QueryInterface Migration Mods
- An instance of Sequelize uses something called Query Interface to communicate to the database in a dialect-agnostic way. Most of the methods you've learned in this manual are implemented with the help of several methods from the query interface.

<br></br>

# Creating a table
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('<PascalCasePluralTableName>', {
        <camelCaseColumnName>: {
            type: Sequelize.<CAPITALIZED-DATA-TYPE>,
            defaultValue: <DESIRED_VALUE>,
            allowNull: <DESIRED_VALUE>
        },
        <camelCaseColumnName>: {
            type: Sequelize.<CAPITALIZED-DATA-TYPE>,
            defaultValue: <DESIRED_VALUE>,
            allowNull: <DESIRED_VALUE>
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
});
  },

// always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('<PascalCasePluralTableName>');
  }
};
```
<br></br>

# Altering/changing of datatype/constraints in a column
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>', {
        type: Sequelize.<CAPITALIZED-NEW-DATA-TYPE>,
        defaultValue: <NEW-VALUE>,
        allowNull: <NEW-VALUE>
});
  },

// always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>', {
        type: Sequelize.<CAPITALIZED-PREVIOUS-DATA-TYPE>,
        defaultValue: <PREVIOUS-VALUE>,
        allowNull: <PREVIOUS-VALUE>
});
  }
};
```

<br></br>

# ADDING a Column
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>', {
            type: Sequelize.<CAPITALIZED-DATA-TYPE>,
            defaultValue: <DESIRED_VALUE>,
            allowNull: <DESIRED_VALUE>
    });
  },

// always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>');
  }
};
```
<br></br>

# REMOVING a Column
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>');
  },

// always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('<PascalCasePluralTableName>', '<camelCaseColumnName>', {
            type: Sequelize.<CAPITALIZED-DATA-TYPE>,
            defaultValue: <DESIRED_VALUE>,
            allowNull: <DESIRED_VALUE>
    });
  }
};
```

<br></br>

# Renaming a Column
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('<PascalCasePluralTableName>', '<currentCamelCaseColumnName>', '<newCamelCaseColumnName>');
  },

// always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('<PascalCasePluralTableName>','<newCamelCaseColumnName>', '<currentCamelCaseColumnName>' );
  }
};
```

<br></br>

# Add/Remove Constraint to Column
```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('<PascalCasePluralTableName>', {
      fields: ['camelCaseColumnName>'],
      type: '<constraintToAdd>',
      name: '<name_your_contraint_to_assist_in_removal>'
    })
  },

//  always do the opposite of your up function in your down function

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('<PascalCasePluralTableName>', '<name_of_constraint>')
  }
};
```


# For more QueryInterface Functionality follow the link below
- [Full QueryInterface Documentation](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface)
