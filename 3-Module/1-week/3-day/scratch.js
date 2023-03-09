//CSS Selectors
//Applies styles to specific DOM nodes

//Type Selectors 
//Matches elements by using type of tag (node name)
// div, h1, a, p, title

//Class Selectors USE . TO ACCESS
//Matches elements using the class name
// <h1 class="main"></h1>

//ID Selectors   USE # TO ACCESS
//Matches elements using the id name
// <h1 id="header"></h1>

//Universal Selectors
//Matches all elements
// * 

//Attribute Selectors
//Matches elements based on the presence or value of a given attribute
//<h1 title="aksjdsajn"></h1>
//h1[title]

//Compound Class Selectors
//Sometimes we'll will HTML elements that have more than one class applied to them

//<div class="box yellow"></div>
//<div class="box orange"></div>
//<div class="circle orange"></div>

/*
.box     Grabs first two
.orange     Grabs last two

.box.orange   Grabs middle guy only
*/

//How to style multiple elements at once

// h1#header,
// h2.subheader {
//   aksdhaksfh: aksjhdsakjf;
// }

//Combinators
//Combines CSS selectors to create more complex/specific or targeted selectors

//Descendant Selectors
//Selects any element (B) that descends from element (A)

// a b {

// }

// div a {

// }

//Direct child selectors >
//Unlike descendant selectors that will work for elements DEEPLY nested within the first element,
//This selector will only work for DIRECT children of the first element

// A > B {

// }

// div > a {

// }

// .menu > .is-active {

// }

//Adjacent Siblings Selector
// +
//Select siblings,  so B must directly follow A and share the same parent
// a + p {

// }

//Pseudo Classes
//Specifies a specific STATE of an element(s)

//selector:state
//If we want to give a certain element a different look when the user hovers we can do this:
// div:hover {

// }

//Pseudo Selectors
//Selects pseudo-elements in the DOM 
//most common ::after    ::before
//Both of these selectors create a pseudo-element as a child of the selected element

//The ::after selector creates a child as the LAST child of the selected element

//the ::before selector creates a child as the FIRST child of the selected element

/* <style>
    div::before {
        content: ':)';
    }
</style> */