let printUniqueValues = () => {
    let vals = Object.values(obj)
    let returnArr = []
      for (let val of vals) {
        	if (!returnArr.includes(val) && (typeof val !== "function")) returnArr.push(val)
      }
      console.log(returnArr.join(" "))
}

  const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW",
  	printUniqueValues: printUniqueValues,
}


obj.printUniqueValues();  
