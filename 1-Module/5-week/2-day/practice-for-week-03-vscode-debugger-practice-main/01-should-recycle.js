/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`


*/

function shouldRecycle(item) {
  if (!item.plastic) {
    return 'Recycle Me!'
  } else if (item.color === 'black') {
    return 'Currently, cannot be recycled.'
  } else if (item.aluminum) {
    return 'Recycle Me!'
  } else if (item.paper) {
    return 'Recycle Me!'
  }
  return 'Cannot be recycled'
}


const waterBottle = {
  plastic: true,
  color: 'clear',
  aluminum: false,
  paper: false
};

console.log(shouldRecycle(waterBottle)); // 'Recycle Me!'

const tomatoCan = {
  plastic: false,
  color: 'red',
  aluminum: true,
  paper: false
};

console.log(shouldRecycle(tomatoCan)); // 'Recycle Me!'

const saladContainer = {
  plastic: true,
  color: 'black',
  aluminum: false,
  paper: false
};

console.log(shouldRecycle(saladContainer)); // 'Currently, cannot be recycled.'

const styrofoamContainer = {
  plastic: false,
  color: 'black',
  aluminum: false,
  paper: false
};

console.log(shouldRecycle(styrofoamContainer)); // 'Cannot be recycled.'