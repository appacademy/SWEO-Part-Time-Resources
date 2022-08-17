const select = () => {
    // answers can be NodeLists, HTMLCollections, Arrays, or individual HTML elements.
    /* Write queries for each of the following */

    console.log('------------- Section 1 -------------');
    // 1. Get all seeded fruit elements
    // const seeded = document.getElementsByClassName("seed"); //returns HTML Collection, need to convert into an array to use array methods
    const seeded = document.querySelectorAll(".seed"); //return a NodeList, need to convert into an array to use array methods
    seeded.forEach((el)=>console.log(el))
    console.log({ seeded });

    
    // 2. Get all seedless fruit elements
    const seedless = document.getElementsByClassName("seedless");
    // const seedless = document.querySelectorAll(".seedless");
    console.log({ seedless });
    //!!END

    // 3. Get first seedless fruit element
    const firstSeedless = document.querySelector(".seedless");
    // const firstSeedless = document.querySelectorAll(".seedless")[0];
    console.log({ firstSeedless });

    console.log('------------- Section 2 -------------');
    // 4. Get inner span with text "you"
    // note that we need to convert to an array first before we can use array methods
    const you = Array.from(document.getElementsByTagName("span"))
        .filter(span => span.innerText === 'you');
    console.log({ you });

    // 5. Get all children of element "wrapper"
    const wrapperChildren = document.getElementById("wrapper").children; // HTML Collection
    // const wrapperChildren = document.querySelectorAll("#wrapper > *"); // NodeList
    console.log({ wrapperChildren });

    // 6. Get all odd number list items in the list
    const odds = document.querySelectorAll("#two > ol > li:nth-child(odd)");
    // const odds = document.getElementsByClassName("odd");
    console.log({ odds });

    // 7. Get all even number list items in the list
    const evens = document.querySelectorAll("#two > ol > li:nth-child(even)");
    // const evens = Array.from(document.querySelectorAll("#two > ol > li:not(.odd)"));
    // const evens = Array.from(document.querySelectorAll("#two > ol > li")).filter(node => node.className !== "odd");
    console.log({ evens });

    console.log('------------- Section 3 -------------');
    // 8. Get all tech companies without a class name
    // Your code here
    const nameless = document.querySelectorAll("#three a:not([class])");
    console.log({ nameless });

    // 9. Get "Amazon" element
    // Your code here
    const amazon = document.getElementsByClassName("shopping");
    console.log({ amazon });

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelector("#three > ul").children;
    console.log({ unicorns });
}

window.onload = select;