/* 

2. Name

When the page first loads, 
the first text field should have the focus state by default to prompt the user. 
*/

// Select Name Field
const nameField = document.querySelector('#name');

// Set focus on load event
nameField.focus();

/* 

3. Job Role Section

The "Job Role" section has an <input type="text"> field where users can enter a custom job role. 
If the user selects "Other" in the "Job Role" drop-down menu, 
they can enter info into the "Other job role" text field. 
This field should be hidden by default 
and only be displayed if "Other" is selected in the drop-down menu.
*/

// Select Other Field
const otherJobRole = document.querySelector('#other-job-role');

// Hide Other Field by default
otherJobRole.hidden = true;

// Select Job Role Field
const jobRole = document.querySelector('#title');

// Add EventListener to Job Role Field
jobRole.addEventListener('change', e => {
    // Get value when the changed
    const role = e.target.value;

    // Reveal/Hide Other field depending on value of 
    role === 'other' ? otherJobRole.hidden = false : otherJobRole.hidden = true;
});

/* 

4. T-Shirt Info Section

The options in the "Color" drop-down menu are not available for each t-shirt design, 
so the user shouldn’t be able to see or choose a color option until they have chosen a design.
*/

// Disable the "Color" <select> element.

// Select Color Field
const color = document.querySelector('#color');

// Disable Color by default
color.disabled = true;

// Set up the "Design" <select> element to listen for changes. When a change is detected:

// Select Design Field
const design = document.querySelector('#design');

design.addEventListener('change', e => {
    // Get value on the change event
    const design = e.target.value;

    // The "Color" <select> element reset
    color.disabled = false;

    // The "Color" <select> element should display an available color.
    // The "Color" dropdown menu should display only the color options associated with the selected design. For example:
        // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
        // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."

    const options = color.children;

    for (let i = 0; i < options.length; i++) {
        options[i].dataset.theme === design ? options[i].hidden = false : options[i].hidden = true;
    }

    // Reset Select a color after Design field changed
    options[0].textContent = "Select a color";
    options[0].selected = true;
});

/*

5. Activities Section

The "Total: $" paragraph below the "Register for Activities" section 
should update to reflect the total cost of all the selected activities.
*/

// Select Register for Activities fieldset
const activities = document.querySelectorAll('#activities');

// Select Total field
const total = document.querySelector('#activities-cost');

// Declare Total Cost variable to hold total cost
let totalCost = 0;

// Add an event listener to the "Register for Activities" fieldset element to listen for changes. 
activities.forEach(activity => {
    activity.addEventListener('change', e => {
        const currentActivity = e.target;
        const cost = parseInt(currentActivity.dataset.cost);

        // When a change is detected:
        // If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
        // If an activity is unchecked, the total cost should decrease by that amount.
        currentActivity.checked ? totalCost += cost : totalCost -= cost

        // The <p> element with the id of "activity-cost" below the activities section should update to reflect the adjustment made.
        total.innerHTML = `Total: $${totalCost}`;

        // When a user selects an activity, loop over all of the activities to check if any have the same day and time as the selected activity.
        const activityName = currentActivity.name;

        // If so, disable/enable the conflicting activity’s checkbox input and add or remove the ‘disabled’ class to activity’s parent
        if (activityName !== "all") {
            const dayAndTime = currentActivity.dataset.dayAndTime;
            const conflictingDayAndTime = document.querySelectorAll(`[data-day-and-time="${dayAndTime}"]`);

            for (let i = 0; i < conflictingDayAndTime.length; i++) {
                const conflictingActivity = conflictingDayAndTime[i];
                conflictingActivity.disabled = currentActivity.checked && conflictingActivity !== currentActivity;
            }
        }
    });
});

/*

6. Payment Info Section

The credit card payment option should be selected for the user by default.
So upon page load "Credit Card" should be the selected option of the select element, 
and the credit card payment section should be the only payment section displayed on the page. 
When the user selects a different payment option from the drop-down menu, 
the form should update to display only the chosen payment method section.
*/

// Select Payment Field
const payment = document.querySelector('#payment');

// Select Credit Card Fields
const creditCard = document.querySelector('#credit-card');

// Select Paypal Field
const paypal = document.querySelector('#paypal');

// Select Bitcoin Field
const bitcoin = document.querySelector('#bitcoin');

// Function to display payment method
function setPayment(method) {
    payment.value = method;
    creditCard.id === method ? creditCard.style.display = 'block' : creditCard.style.display = 'none';
    paypal.id === method ? paypal.style.display = 'block' : paypal.style.display = 'none';
    bitcoin.id === method ? bitcoin.style.display = 'block' : bitcoin.style.display = 'none';
}

// Call setPayment function by default
setPayment('credit-card');

// Add EventListener to Payment Field
// Program the "I'm going to pay with" <select> element to listen for user changes.
payment.addEventListener('change', e => {
    // Get value when the changed
    const method = e.target.value;

    // When a change is detected, hide all payment sections in the form’s UI except the selected one.
    setPayment(method);
});

/* 

7. Form validation

Users shouldn’t be able to submit a form without the required information, or with invalid information. 
To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, 
and create your own custom form validation.

*/

// Select form
const form = document.querySelector('form');

// Select email
const email = document.querySelector('#email');

// Select Card Number
const cardNumber = document.querySelector('#cc-num');

// Select Card Zip
const zip = document.querySelector('#zip');

// Select Card Zip
const cvv = document.querySelector('#cvv');


// The "Name" field cannot be blank or empty.
const nameFieldNotBlank = () => /^[\w]$/.test(nameField.value);

// The "Email Address" field must contain a correctly formatted email address.
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);

// The "Register for Activities" section must have at least one activity selected.
const atLeastOneActivitySelected = () => true ? totalCost > 0 : totalCost === 0;

// If and only if credit card is the selected payment method:

// The "Card number" field must contain a 13 - 16 digit credit card number without dashes or spaces.
const isCardNumberValid = () => /^[0-9]{13,16}$/.test(cardNumber.value);

// The "Zip code" field must contain a 5-digit number.
const isZipValid = () => /^[0-9]{5}$/.test(zip.value);

// The "CVV" field must contain a 3-digit number.
const isCvvValid = () => /^[0-9]{3}$/.test(cvv.value);


// Add an event listener to the form element to listen for the submit event. 
form.addEventListener('submit', e => {
    
    const validator = (inputElement, validationFunction) => {
        // When the form submission is detected, each required form field or section should be validated to ensure that they have been filled out correctly. 
        if (validationFunction()) {

            inputElement.classList.remove('error');

            // Hide the .hint element associated with that element.
            inputElement.nextElementSibling.style.display = 'none';

            // If a required form field or section is valid:
            // Add the ‘.valid’ class to the parent element of the form field or section.
            inputElement.parentElement.classList.add('valid');

            // Remove the ‘.not-valid’ class from the parent element of the form field or section.
            inputElement.parentElement.classList.remove('not-valid');

        } else {
            // If any of the following required fields are not valid, the form submission should be prevented.
            e.preventDefault();

            inputElement.classList.add('error');
            
            // Display the .hint element associated with the form field or section.
            inputElement.nextElementSibling.style.display = 'block';
            
            // When the user tries to submit the form, if a required form field or section is invalid:
            // Add the ‘.not-valid’ class to the parent element of the form field or section.
            inputElement.parentElement.classList.add('not-valid');
            
            // Remove the ‘.valid’ class from the parent element of the form field or section.
            inputElement.parentElement.classList.remove('valid');
        }
    }

    validator(nameField, nameFieldNotBlank);
    validator(email, isValidEmail);
    validator(total, atLeastOneActivitySelected);
    validator(total, atLeastOneActivitySelected);
    if (payment.value === "credit-card") {
        validator(cardNumber, isCardNumberValid);
        validator(zip, isZipValid);
        validator(cvv, isCvvValid);
    }
});

/* 
9. The Activities Section

Pressing the tab key on your keyboard moves the focus state from one input to the next, 
but the focus indicators in the "Register for Activities" section aren’t very obvious. 
To make the form more accessible we'll add visible focus states to these activities. 
This will give the users that use keyboards to navigate your page a visual confirmation of where they are located.
*/

// Select checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Program all of the activity checkbox input elements to listen for the focus and blur events.
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('focus', e => {
        // When the focus event is detected, add the ".focus" class to the checkbox input’s parent label element.
        checkbox.parentElement.classList.add('focus');
    });
    checkbox.addEventListener('blur', e => {
        // When the blur event is detected, remove the .focus class from the label element that possesses it. 
        checkbox.parentElement.classList.remove('focus');
    });
});

/* 
10. Visual Validation Errors - see section 7. Above

Make the form validation errors obvious to all users. 
With the custom form validation checks you’ve already written, invalid form fields will prevent the form from submitting, 
but all users should be presented with clear notifications of which fields are invalid.

JavaScript alerts and prompts should not be used in your form validation error indications.
If the user tries to submit an empty form, all form validation error indications should be displayed at once, rather than one at a time.

*/


/* ============================================================================================================= */

// Extra Credit

// To get an "exceeds" rating, complete all of the steps below:

/*
1. Conflicting Activity Times - see section 7. Above

Ideally, we want to prevent users from selecting activities that occur at the same time.

label element.
*/