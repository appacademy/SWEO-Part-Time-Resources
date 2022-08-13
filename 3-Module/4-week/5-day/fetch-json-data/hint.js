// --------with promise chaining--------
// note: this has already been done, convert this to async await in step two.
// regular promise chaining
fetch("/", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({"april": "is cool"})
})
    .then(res => res.json())
    .then(data => console.log(data))