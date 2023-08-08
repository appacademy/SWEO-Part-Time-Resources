/****************************************************************************** 
Initials
Write a function initials(name) that accepts a full name as an arg. The 
function should return the initials for that name.
******************************************************************************/
// your code here

let initials = function(name){
    let nameArr = name.split(" ")
    let initials = ""
    for (let i = 0; i < nameArr.length; i++){
        initials += nameArr[i][0].toUpperCase() //nameArr[i] = current name, nameArr[i][0] = first letter of current name
    }
    return initials
}



console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'