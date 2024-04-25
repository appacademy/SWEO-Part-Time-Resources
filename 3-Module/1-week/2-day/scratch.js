//CSS - Cascading Style Sheets


//HTML -
/* 
ID's are used for ONE HTML ELEMENT and no more
They MUST BE UNIQUE

CLASS - Is for styling multiple elements that you want to look the same
*/

//CSS Selectors - Applies a specific styles to a DOM element or elements
// There are tons of different selectors

//Type Selector - Matches elements by their tag name
// p, div, li, a 

//Class Selector - Uses classes to style elements
// Uses . followed by class name

//ID Selector - Use an elements ID to style it
// Uses # followed by the corresponding id

//Universal Selectors - MATCHES EVERYTHING
// * 

//Attribute Selector - uses attributes to select elements


/* 

    <div class="box yellow">1</div>
    <div class="box orange">2</div>
    <div class="circle orange">3</div>

    .box to select the first two elements
    .orange to select the second two

    .box.yellow

    .circle.orange 
*/

//Combinators are when you combine multiple selectors to get a VERY specific
//selector
//To do one you will smush two selectors together

// h1#buttonboi

//Descendant selectors - Selects any element B that descends from an element
//A
//You define it with a space between A and B

// A B {

// }

// div a {

// }

//Direct child selector
//Selects any element (B) that is a direct child of (A)

//Adjacent sibling selector - Selects any element (B) that is a 
//Sibling and directly adjacent to (A)

//A + B {}

//Pseudo classes - Specifies a special state of the selected element
//Will only style the element if it is in that state

// .button-boi:hover {}


//Specificity - Certain selectors hold more weight than others

// INLINE takes the most precendence
// Then ID's
// Then Classes
// then Tagname