// Get references to the first and second dropdowns
const firstDropdown = document.getElementById("first-dropdown");
const secondDropdown = document.getElementById("second-dropdown");

// Add event listener to the first dropdown
firstDropdown.addEventListener("change", function() {
    // Clear existing options in the second dropdown
    secondDropdown.innerHTML = '<option value="">Select City</option>';

    // Get the selected value from the first dropdown
    const selectedValue = firstDropdown.value;

    // Populate the second dropdown based on the selected value from the first dropdown
    switch (selectedValue) {
        case "category1":
            secondDropdown.innerHTML += `
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
                <option value="subcategory3">Subcategory 3</option>
            `;
            break;
        case "category2":
            secondDropdown.innerHTML += `
                <option value="subcategory4">Subcategory 4</option>
                <option value="subcategory5">Subcategory 5</option>
                <option value="subcategory6">Subcategory 6</option>
            `;
            break;
        case "category3":
            secondDropdown.innerHTML += `
                <option value="subcategory7">Subcategory 7</option>
                <option value="subcategory8">Subcategory 8</option>
                <option value="subcategory9">Subcategory 9</option>
            `;
            break;
        default:
            // If no category is selected, keep the second dropdown empty
            break;
    }
});
