window.addEventListener(`DOMContentLoaded`, async () => {
	const resObj = await fetch(`http://localhost:3000`);
	const resBody = await resObj.json();

	console.log(resBody)
	console.log(resBody.name)
})
