/*Changing innerText
 The innerText property focuses on the text between the opening and closing of the
element, like so:
<element>here</element>*/

document.body.children.greeting.innerText = "Bye!";


/*Changing innerHTML
If you did not only want to work with plain text, or perhaps specify some HTML
formatting with your value, you could use the innerHTML property instead.*/
document.body.children.greeting.innerHTML = "<b>Bye!</b>"