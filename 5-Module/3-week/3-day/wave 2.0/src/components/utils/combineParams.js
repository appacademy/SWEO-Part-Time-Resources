function combineParams(params){
	return Object.values(params).map((value, i)=>{
		if(i > 0){
			if(value.split('=')[1]){
				return `&${value}`
			}
		} else {
			if(value.split('=')[1]){
				return value
			}
		}
		return ''
	}).join('')
}

export default combineParams;
