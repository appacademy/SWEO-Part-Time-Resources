function generateURL(path){
	const url = window.location.href.split('/')

	const newUrl = url.map( (string, i) => {
		if(i === 0){
			return string + '//'
		} else if (i === url.length - 1){
			if(path){
				return path
			} else {
				return string
			}
		} else {
			return string + '/'
		}
	})


	return newUrl.join('');
}

function storeToken(token){
    localStorage.setItem('token', `Bearer ${token}`);

    window.location.href = generateURL('index.html')
}


// function getCookie(name) {
//     if (!document.cookie) {
//       return null;
//     }

//     const xsrfCookies = document.cookie.split(';')
//       .map(c => c.trim())
//       .filter(c => c.startsWith(name + '='));

//     if (xsrfCookies.length === 0) {
//       return null;
//     }
//     return decodeURIComponent(xsrfCookies[0].split('=')[1]);
// }

// async function requestCSRFToken(){
// 	const resBody = await fetch('http://localhost:8000/api')
// 	const resJson = await resBody.json();
// 	document.cookie = `CSRF-TOKEN=${resJson.csrfToken}`
// }


export {
    storeToken,
    // getCookie,
    // requestCSRFToken,
	generateURL
}
