document.addEventListener("DOMContentLoaded", ev => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async ev => {
        ev.preventDefault();
        const input = document.querySelector("input");
        const number = input.value;


        const res = await fetch(`https://swapi.dev/api/people/${number}`);
        const data = await res.json();


        
        const people = document.querySelector("#people");
        people.innerHTML = `What Star Wars character has ${data.eye_color} eyes?`;
        setTimeout(() => {
            people.innerHTML += `<h2>${data.name}</h2>`;
            input.value = "";
        }, 3000);
    })
});

