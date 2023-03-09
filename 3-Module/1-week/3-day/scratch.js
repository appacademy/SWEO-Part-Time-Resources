//CSS Selectors 
//Applies styles to a specific HTML element

//Type Selector
//Matches elements by their node (tag) name
//Example div, a, p, title, h1, form

//Class Selectors
//Match elements by their class name
//To use classes in css we must append them with a .
//example <div class="main"></div>

//ID Selectors
//Match elements by their ID names
//To use ID's in css we must append them with a #
//example <div id="header"></div>

//Universal Selector
//    *
//Matches elements of any type

//Attribute Selectors
//match elements based on the presence or value of a given attribute
//syntax      tag[attribute="value"]
//h1[title]
//div[title="home-page"]

//Compound Class Selectors
//We will often have HTML elements with two or more classes
/*
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
*/
// .box.orange {

// }

//To style multiple selectors at once use a comma
/*
h1,
h2 {

}
*/
/*
To specify tags with a specific ID or class

h1#header,
h2.subheader {

}
*/

//Combinators
//They combine selectors to create more complex/specific selectors

//Descendant Selector
//SYNTAX -   A B {}
//Selects any element (B) that is a descendant of an element (A)
//div a {}

//Direct Child Selector
//Unlike the descendant selector, this will only select an element (B) that is a DIRECT CHILD
//of an element (A)
//SYNTAX -  A > B {}

//Adjacent Sibling Selector
//SYNTAX - A + B {}
//Selects an element (B) that follows directly behind an element (A)
// Example    h1 + h2 {}

//Psuedo Classes
//Specify a special STATE of the selected element(s)
//SYNTAX     selector:state {}

//Specificity
//What selector takes precidence

//Inline styling
//ID's 
//Class, Attribute Selectors
//Elements


//Difference between rem and em

//EM
//is relative to the element its contained within

//REM
//is relative to the body

//Most people prefer REM because its a universal measurement