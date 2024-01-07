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
// setFocus(nameField);


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
// console.log(color);

// Disable Color by default
color.disabled = true;


// Set up the "Design" <select> element to listen for changes. When a change is detected:

// Select Design Field
const design = document.querySelector('#design');
// console.log(design);

design.addEventListener('change', e => {
    // console.log(e.target.value);
    // Get value when the changed
    const design = e.target.value;
    // console.log(design);

    // The "Color" <select> element reset
    color.disabled = false;

    // The "Color" <select> element should display an available color.
    // The "Color" dropdown menu should display only the color options associated with the selected design. For example:
        // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
        // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."

    const options = color.children;
    // console.log(options[0]);

    for (let i = 0; i < options.length; i++) {
        // console.log(options[i]);
        options[i].dataset.theme === design ? options[i].hidden = false : options[i].hidden = true;
    }

    // Reset Select a color
    options[0].textContent = "Select a color";
    options[0].selected = true;
});

/*
The "Total: $" paragraph below the "Register for Activities" section 
should update to reflect the total cost of all the selected activities.
*/

// Select Register for Activities fieldset
const activities = document.querySelectorAll('#activities');
// console.log(activities);

// Select Total field
const total = document.querySelector('#activities-cost');
// console.log("total.innerHTML: " + total.innerHTML);

// Declare Total Cost variable to hold total cost
let totalCost = 0;
// console.log(totalCost);
// console.log(typeof(totalCost));

// Add an event listener to the "Register for Activities" fieldset element to listen for changes. 

activities.forEach(activity => {
    activity.addEventListener('change', e => {
        const currentActivity = e.target;
        // console.log(currentActivity);
        const cost = parseInt(currentActivity.dataset.cost);
        // console.log(typeof(cost));
        // console.log(typeof(cost));

        // When a change is detected:
        // If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
        // If an activity is unchecked, the total cost should decrease by that amount.
        currentActivity.checked ? totalCost += cost : totalCost -= cost
        // console.log("totalCost: " + totalCost);

        // The <p> element with the id of "activity-cost" below the activities section should update to reflect the adjustment made.
        total.innerHTML = `Total: $${totalCost}`;
    });
});

/*
The credit card payment option should be selected for the user by default.
So upon page load "Credit Card" should be the selected option of the select element, 
and the credit card payment section should be the only payment section displayed on the page. 
When the user selects a different payment option from the drop-down menu, 
the form should update to display only the chosen payment method section.
*/

// Select Payment Field
const payment = document.querySelector('#payment');
// console.log(payment);

// Select Credit Card Fields
const creditCard = document.querySelector('#credit-card');
// console.log(creditCard);

// Select Paypal Field
const paypal = document.querySelector('#paypal');
// console.log(paypal);

// Select Bitcoin Field
const bitcoin = document.querySelector('#bitcoin');
// console.log(bitcoin);

// Function to payment method
function setPayment(method) {
    payment.value = method;
    creditCard.id === method ? creditCard.style.display = 'block' : creditCard.style.display = 'none';
    paypal.id === method ? paypal.style.display = 'block' : paypal.style.display = 'none';
    bitcoin.id === method ? bitcoin.style.display = 'block' : bitcoin.style.display = 'none';
}

// Call setPayment function by default
setPayment('credit-card');

// Add EventListener to Job Role Field
// Program the "I'm going to pay with" <select> element to listen for user changes.
payment.addEventListener('change', e => {
    // console.log(e.target.value);
    // Get value when the changed
    const method = e.target.value;
    // console.log(method);

    // When a change is detected, hide all payment sections in the form’s UI except the selected one.
    setPayment(method);
});

/* 
Users shouldn’t be able to submit a form without the required information, or with invalid information. 
To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, 
and create your own custom form validation.

Add an event listener to the form element to listen for the submit event. 
When the form submission is detected, each required form field or section should be validated to ensure that they have been filled out correctly. 
If any of the following required fields are not valid, the form submission should be prevented.
*/

// Form element variables
const form = document.querySelector('form');
console.log(form);
console.log(nameField);
const email = document.querySelector('#email');
console.log(email);
console.log(total);
const cardNumber = document.querySelector('#cc-num');
console.log(cardNumber);
const zip = document.querySelector('#zip');
console.log(zip);
const cvv = document.querySelector('#cvv');
console.log(cvv);

// The "Name" field cannot be blank or empty.
const nameFieldNotBlank = () => /^[\w]$/.test(nameField.value);
// The "Email Address" field must contain a correctly formatted email address. 
//The email address does not need to be a real email address, just formatted like one. 
//For example brian@teamtreehouse.com. Several characters for the username, preceded by "@", followed by another set of characters, ending with a "." and a couple more characters for the domain name.
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
// The "Register for Activities" section must have at least one activity selected.
const atLeastOneActivitySelected = () => true ? totalCost > 0 : totalCost === 0
// If and only if credit card is the selected payment method:
// The "Card number" field must contain a 13 - 16 digit credit card number without dashes or spaces.
const isCardNumberValid = () => /^[0-9]{13,16}$/.test(cardNumber.value);
// The "Zip code" field must contain a 5-digit number.
const isZipValid = () => /^[0-9]{5}$/.test(zip.value);
// The "CVV" field must contain a 3-digit number.
const isCvvValid = () => /^[0-9]{3}$/.test(cvv.value);

form.addEventListener('submit', e => {
    
    const validator = (inputElement, validationFunction) => {
        console.log(isValidEmail())
        if (validationFunction()) {
            inputElement.classList.remove('error');
            inputElement.nextElementSibling.style.display = 'none';
        } else {
            e.preventDefault();
            inputElement.classList.add('error');
            inputElement.nextElementSibling.style.display = 'block';
        }
    }

    validator(nameField, nameFieldNotBlank);
    validator(email, isValidEmail);
    validator(total, atLeastOneActivitySelected);
    validator(total, atLeastOneActivitySelected);
    if (payment.value === "credit-card") {
        console.log("payment.value: " + payment.value);
        validator(cardNumber, isCardNumberValid);
        validator(zip, isZipValid);
        validator(cvv, isCvvValid);
    }
});



