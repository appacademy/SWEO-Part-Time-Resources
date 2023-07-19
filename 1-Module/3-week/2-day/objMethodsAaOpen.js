const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW",
  	printUniqueValues: () => {
    	let arr = Object.values(obj)
        let returnArr = []
		for (let i = 0; i < arr.length; i++) {
        	let val = arr[i]
            if (typeof val === "function") break;
            let duplicates = false
            for (let j = i + 1; j < arr.length; j++) {
          		if (val === arr[j]) duplicates = true  	
            }
        	if (!duplicates) returnArr.push(val)
        }
        console.log( returnArr.join(" "))
    }
}


// Write your solution here.

obj.printUniqueValues();               // Honda Kia Mercedes BMW
