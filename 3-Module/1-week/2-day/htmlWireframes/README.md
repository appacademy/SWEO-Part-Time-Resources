# HTML Wireframe Long Practice

Wireframes are the blueprints to every web page a developer creates. It is
important as a developer to be able to both identify and translate wireframes
from the design to semantic HTML syntax.

In this practice, you will be identifying and creating semantic HTML syntax from
an example wireframe.

## Set up

Create a folder for this practice and create an __index.html__ file inside of
it. You will be creating HTML elements inside of this file for this practice.

## Instructions

Your main focus is to pick the correct tags and syntax for HTML attributes
(`src`, `href`, `target`, etc) based on the wireframe provided below.

The HTML document in the __index.html__ file should contain at least:

- Top navigation bar
- Main Heading (`h1`)
- Subheading (`h2`)
- Main Image (`img`)
- Text paragraphs (`p`)
- Links (underlined blue text) (`a`)
- External links (underlined blue text with new-window icon)
  - to use the new-window icon in the wireframe, add this code to the `<head>`
    of your HTML document:

    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    ```

  - then you can use the new-window icon by adding an element with a `class`
    attribute of "material-icons-outlined" and include the text `open_in_new`
    inside the element:

    ```html
    <span class="material-icons-outlined">
      open_in_new
    </span>
    ```

- Footer: links to other articles
- Challenge: Identify any additional HTML attributes that may not listed

![Wireframe](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/css/html-practice-wireframe.png)