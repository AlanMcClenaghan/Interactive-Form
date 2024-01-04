// console.log("Test");

/* When the page first loads, 
the first text field should have the focus state by default to prompt the user. 
*/

// Select Name Field
const nameField = document.querySelector('#name');
// console.log(nameField);

// Function to set focus
function setFocus(field) {
    field.classList.add('focus');
}

// Call setFocus function on first text field
setFocus(nameField);


/* 
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. 
If the user selects "Other" in the "Job Role" drop-down menu, 
they can enter info into the "Other job role" text field. 
This field should be hidden by default 
and only be displayed if "Other" is selected in the drop-down menu.
*/

// Select Other Field
const otherJobRole = document.querySelector('#other-job-role');
console.log(otherJobRole);

// Hide Other Field by default
otherJobRole.hidden = true;

// Select Job Role Field
const jobRole = document.querySelector('#title');
console.log(jobRole);

// Add EventListener to Job Role Field
jobRole.addEventListener('change', e => {
    console.log(e.target.value);
    // Get value when the changed
    const role = e.target.value;
    console.log(role);

    // Reveal/Hide Other field depending on value of 
    role === 'other' ? otherJobRole.hidden = false : otherJobRole.hidden = true;
});
