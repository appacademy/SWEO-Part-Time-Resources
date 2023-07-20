const nestedArr = [
    [
        { a: 1 },
        { b: 2 }
    ],
    [
        { c: 3 },
        { d: 4 },
        { e: 5 }
    ],
    [
        { f: 6 }
    ],
    [
        { g: 7 },
        { h: 8 }
    ]
];
/*
create return arr
loop through arr
	go to index 1
    	see it its an obj
        push the val into returnArr
        	else push null into returnArr
return the returnArr
*/
const getSecondObjValues = arr => {
  let ra = []
  
  for (let subarr of arr) {
  	 let obj2 = subarr[1]
     if (obj2) {
     	let valArr = Object.values(obj2)
        ra.push(valArr[0])
     } else ra.push('null')
  }
  console.log(ra.join(' '))
}

getSecondObjValues(nestedArr);               // 2 4 null 8
