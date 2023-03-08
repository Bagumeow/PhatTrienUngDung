// Get a reference to the list element
const list = document.querySelector('ul');

// Add a click event listener to the list element
list.addEventListener('click', function(event) {
    // Check if the clicked element is a button with the text "delete"
    if (event.target.nodeName === 'BUTTON' && event.target.innerText === 'Delete') {
        // Get a reference to the parent li element of the clicked button
        const listItem = event.target.parentNode;
        // Remove the parent li element from the list
        listItem.remove();
    } else if (event.target.nodeName === 'INPUT' && event.target.type === 'checkbox') {
        // Get a reference to the span element of the parent li element
        const span = event.target.parentNode.querySelector('span');
        // Toggle the text-decoration style of the span element
        span.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    }
});

// Get a reference to the add button and input field
const addButton = document.querySelector('#add');
const newItemInput = document.querySelector('#newItem');

// Add a click event listener to the add button
addButton.addEventListener('click', function() {
    // Get the value of the input field
    const newItemText = newItemInput.value;
    // Create a new li element
    const newItem = document.createElement('li');
    // Create a new checkbox element
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.name = 'item';
    newCheckbox.value = newItemText;
    // Create a new span element with the text of the input field
    const newSpan = document.createElement('span');
    newSpan.innerText = newItemText;
    // Create a new button element with the text "delete"
    const newButton = document.createElement('button');
    newButton.innerText = 'Delete';
    // Append the checkbox, span, and button elements to the li element
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);
    // Append the li element to the list
    list.appendChild(newItem);
    // Clear the input field
    newItemInput.value = '';
});