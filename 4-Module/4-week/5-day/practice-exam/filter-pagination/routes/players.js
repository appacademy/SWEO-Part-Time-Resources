const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

// 

router.get('/', async (req, res) => {
  let { firstName, number } = req.query;

  const where = {};
  if (firstName && firstName !== '') {
    // where.firstName = firstName[0].toLowerCase() + firstName.slice(1);
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    // if (!isNaN(number) && number <= 0) {
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }
  // right before adding where clause, we should follow the data and see what it is
  console.log("where:", where);

  // pagination
  console.log("queryobj", req.query)
  let {page, size} = req.query;
  page = Number.parseInt(page); //if the value cannot be set to a number, parse int will return NaN
  size = Number.parseInt(size);
  // console.log(page, size);

  // set default if page and size are NOT VALID NUMBERS or undefined
  if(Number.isNaN(page) || page < 1){
    page = 1
  }
  if(Number.isNaN(size) || size < 1){
    size = 2;
  }
  if(size > 10){
    size = 10;
  }

  let limit = size;
  let offset = size * (page - 1)



  const players = await Player.findAll({
    where,
    limit,
    offset,
  });
  return res.json({
    players,
    page,
    size
  });
});



// router.get('/', async (req, res) => {
  //   console.log("askljdskldfjsdkfjslkdfjlskgjdflkgj")
  //   let { firstName, number } = req.query;
  //   firstName = firstName[0].toUpperCase + firstName.slice(1);
  //   console.log("firstName", firstName);
  //   //try to conver string or whatever to number
  //   number = Number.parseInt(number);
  //   console.log("---number---:", number)
  
  //   if (Number.isNaN(number) || number < 0) {
  //     res.status(400);
  //     return res.json({
  //       "errors": [
  //         {
  //           "message": "number filter should be a number greater or equal to 0"
  //         }
  //       ]
  //     })
  //   }
  
  //   if (!firstName || firstName.length < 1) {
  //     res.status(400);
  //     return res, json({
  //       "errors": [
  //         {
  //           "message": "firstName filter should not be empty"
  //         }
  //       ]
  //     })
  //   }
  
  //   // pagination
  //   let {page, size} = req.query;
  //   console.log("page and size:", page, size)
  
  //   const players = await Player.findAll({
  //     where: {
  //       firstName: firstName,
  //       number: number
  //     },
  //     limit: limit,
  //     offset: offset,
  //   })
  
  //   return res.json({
  //     players
  //   })
  // })

module.exports = router;