function iceCreamShop(flavors, favorite) {
	if (flavors.length === 0) return false
	debugger
	let flavor = flavors.pop()
	if (flavor === favorite) return true
	else return iceCreamShop(flavors, favorite)
  }
  
  
  console.log(iceCreamShop(['pistachio', 'chocolate', 'green tea', 'mint chip'], 'green tea')); // true
