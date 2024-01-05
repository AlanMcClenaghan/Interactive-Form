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
// console.log(otherJobRole);

// Hide Other Field by default
otherJobRole.hidden = true;

// Select Job Role Field
const jobRole = document.querySelector('#title');
// console.log(jobRole);

// Add EventListener to Job Role Field
jobRole.addEventListener('change', e => {
    // console.log(e.target.value);
    // Get value when the changed
    const role = e.target.value;
    // console.log(role);

    // Reveal/Hide Other field depending on value of 
    role === 'other' ? otherJobRole.hidden = false : otherJobRole.hidden = true;
});

/* 
The options in the "Color" drop-down menu are not available for each t-shirt design, 
so the user shouldn’t be able to see or choose a color option until they have chosen a design.
*/

// Disable the "Color" <select> element.

// Select Color Field
const color = document.querySelector('#color');
console.log(color);

// Disable Color by default
color.disabled = true;


// Set up the "Design" <select> element to listen for changes. When a change is detected:

// Select Design Field
const design = document.querySelector('#design');
console.log(design);

design.addEventListener('change', e => {
    console.log(e.target.value);
    // Get value when the changed
    const design = e.target.value;
    console.log(design);

    // The "Color" <select> element should be enabled.
    color.disabled = false;
    
    // The "Color" <select> element should display an available color.
    // The "Color" dropdown menu should display only the color options associated with the selected design. For example:
        // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
        // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."

    const options = color.children;
    console.log(options[0]);
    options[0].textContent = "Select a Color";

    for (let i = 0; i < options.length; i++) {
        console.log(options[i]);
        options[i].dataset.theme === design ? options[i].hidden = false : options[i].hidden = true;
    }

});