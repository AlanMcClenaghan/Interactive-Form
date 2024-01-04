// console.log("Test");

/* When the page first loads, 
the first text field should have the focus state by default to prompt the user. 
*/

// Select Name Field
const nameField = document.querySelector('#name');
console.log(nameField);

// Function to set focus
function setFocus(field) {
    field.classList.add('focus');
}

// Call setFocus function on first text field
setFocus(nameField);