import { changeAboutMe, changeTitle, changeHeader } from "./manipulate.js";
import {
  findElementById,
  findElementsOfClass,
  findElementsOfTag,
  findFirstElementOfClass,
  findFirstElementOfTag
} from "./search.js";

window.onload = () => {
    
    changeTitle();
    changeHeader();
    changeAboutMe();
    console.log(findElementById("header")); // <div id="header">
    console.log(findFirstElementOfTag("LI")); // <li><h3>Computer Science</h3>...</li>
    console.log(findFirstElementOfClass("section")); // <div class="section"><h2>About Me</h2>...</div>
    console.log(findElementsOfTag("H3")); // [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3] (length: 11)
    console.log(findElementsOfClass("section")); // [div.section, div.section, div.section, div.section, div.section, div.section] (length: 6)

}
