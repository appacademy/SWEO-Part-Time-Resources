# M3W1D2

## Website Building Blocks

- HTML: Provides structure and layout
- CSS: Provides look, feel, and positioning
- JavaScript: Provides interactivity and complex functionality

You can think of a webpage like a house
  - HTML is the frame, rooms, and foundations
  - CSS is the paint, flooring and finished surfaces
  - JavaScript is the plumbing, electrical wiring and internet connection

**Today** we will be focusing on pure HTML

**Thursday** we will start adding in CSS

**Later** we will reintroduce JavaScript in the context of the browser

## HTML - HyperText Markup Language

- `HTML uses a tree structure to represent a webpage in code, each element is referred to as a node, we just learned about this :)`
- `Don't worry, you don't need to do weird traversals or constantly think about html as a complicated tree data structure just to use HTML`
- `HTML is generally not considered as a programming language, rather it's considered a "markup" language`
    - `A markup language is essentially a set of rules that define how a document should be structured/formatted`

<img src='https://espirian.co.uk/wp-content/uploads/2019/11/html_tree2.png' style='width:1000px'>

### Tags

- A tag is the text between angle brackets (< />)
- Text within these brackets are not rendered, but used by the browser to determine how to organize the page
- The < bracket is referred to as the opening bracket
- The /> bracket is referred to as the closing bracket
- Tags usually come in pairs, such as `<html> </html>`, but not always. An `<img>` tag does not have a pair for example. Tags that come in pairs are generally meant to be organized to have children. Whereas tags that do not have a matching pair cannot have children
- Text inbetween two tags is usually what the browser will render for users to see on your webpage: `<p>I will be rendered on the webpage</p>`

- `<html> </html>`: The root element of an HTML tree, all other elements will be a child of this element
- `<head> </head>`: Used to store meta data about the page (metadata just means data that describes other data, like a length property of an array for example) Children of this element will generally be used to describe the page in some way
- `<title> </title>`: A child of the head element, the text inside this element will update the browsers "tab" text
- `<link/>`: Generally a child of a head tag, but technically can be used within the body tag in some cases. Link is used to specify a relationship with other resources such as fonts, favicons (the little icon on a browser tab), stylesheets(for css), and more. It's basically just importing :)
- `<script> </script>`: Used to embed javascript onto a webpage, this is how we can apply logic to our web pages
- `<body> </body>`: This tag is used as the parent to all of the "main" visible content of the page
- `<h1> </h1> - <h6> </h6>`: Header tags, used to add header text on the page, these headers come with predetermined sizes, with 1 being the biggest and 6 being the smallest
- `<div> </div>`: Used for organization, helps you group elements together
- `<p> </p>`: Used to create a paragraph of text
- `<ul> </ul>`: Unordered list, this element is used as a parent element that contains `<li>` elements. When using an unordered list the list elements will NOT be numbered
- `<ol> </ol>`: Ordered list, this element is used as a parent element that contains `<li>` elements. When using an ordered list the list elements WILL be numbered
- `<li> </li>`: Used as a child of a ul or ol tag. It's appearance is determined by which type of list you use
- `<a> </a>`: A link to any valid web URL, can be both an internal URL within the same site, or a completely different site as long as the URL is valid to the WWW(world wide web)
- `<img/>`: Places an image onto the page


### Elements

- An element refers to the start of a tag, and all the content inbetween up until the end of the closing tag
- A tag just refers to the text within the opening and closing brackets, but the element refers to the whooooooole thing

### Attributes

- Defines additional information needed by the browser to properly render or add functionality to your elements
- Each element can have it's own unique attributes, some necessary, some optional
- An `<img` tag needs a "src"(source) attribute in order to know what image it is rendering
    - `<img src="www.SomeImageOnline.com" />`
- Every element can have an "id" and a "class" attribute, we will cover this fun stuff later but it helps you label elements so you can later apply CSS/styling to them!
