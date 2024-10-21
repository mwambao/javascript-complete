/*
- Selecting page elements The document object contains many properties and methods. In order to work with
elements on the page, you'll first have to find them. If you need to change the value of a certain paragraph, you'll have to grab this paragraph first. We call this selecting
the paragraph. After selecting, we can start changing it.
- To select page elements to use within your JavaScript code and in order to manipulate elements, you can use either the querySelector() or querySelectorAll() method. Both of these can be used to select page elements either by tag name, ID, or
class.

* document.querySelector() method ==> will return the first element within the document that matches the specified selectors. If no matching page elements are found, the result null is returned. 

* document.querySelectorAll() ==> will return multiple matching elements. querySelectorAll() method will return a static NodeList, which represents a list of the document's elements that match the specified group of selectors.

- After selecting, you can start using the dynamic features of the DOM: you can manipulate the elements using JavaScript. Content can be changed in the same way a variable's contents can be, elements can be removed or added, and styles can be
adjusted. This can all be done with JavaScript and the way the user interacts with the page can affect this.

*/

// Selects the first <h1> element in the document and assigns it to the variable 'ele1'
const ele1 = document.querySelector("h1"); 

// Displays a detailed, interactive list of all properties and methods associated with 'ele1' in the console
console.dir(ele1); 
// h1.output

// Selects all elements with the class 'output' and assigns them to the variable 'ele2' (returns a NodeList)
const ele2 = document.querySelectorAll(".output"); 

// Logs the NodeList containing all elements with the class 'output' to the console
console.log(ele2); 
//NodeList(2) [h1.output, div.output]
