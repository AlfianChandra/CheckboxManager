# CheckboxManager
This jQuery plugin allows you to create custom checkbox menus with specified options and callback functions. It provides a flexible way to handle checkbox actions and manage the display of checkbox options.

## Installation
Include the jQuery library and the plugin script in your HTML file:
```html
<!-- CSS -->
<link rel='stylesheet' href='checkbox.css'/>

<!-- Javascript -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery-custom-checkbox-plugin.js"></script>
```

## Usage
To create a custom checkbox menu, use the CBCreate function:
```javascript
$(".checkbox-container").CBCreate(cbMenu, callbackFunction);
```

`cbMenu`: An object containing the menu options and their properties.
`callbackFunction`: A callback function to handle checkbox actions.

Example:
```javascript
var cbMenu = {
    option1: { icon: "fa fa-check", title: "Option 1", negative: false },
    option2: { icon: "fa fa-times", title: "Option 2", negative: true }
};

function handleCheckboxAction(result) {
    console.log("Action:", result.action);
    console.log("Element:", result.element);
}

$(".checkbox-container").CBCreate(cbMenu, handleCheckboxAction);
```

## FUNCTIONS
`CBSetCheck`: Check all checkboxes.
`CBSetUncheck`: Uncheck all checkboxes.
`CBOpenOptions`: Open the options menu.
`CBCloseOptions`: Close the options menu.

Example:
```javascript
$(".checkbox-container").CBSetCheck(true); // Check all checkboxes and trigger change event
$(".cb-options").CBOpenOptions(); // Open the options menu
```

## UI Preview
Take a look at `preview.png`

## Styling
The plugin generates HTML structure for the checkbox menu. You can style the elements using CSS as needed.

## License
This plugin is licensed under the MIT License
