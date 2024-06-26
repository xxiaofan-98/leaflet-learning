import { matchCity } from "./chart.js";
import { updateIndicator } from "./figureUpdate.js";
import { changeMap } from "./map.js";

// Get references to the 1 and 2 dropdowns
const firstDropdown = document.getElementById("first-dropdown");
const secondDropdown = document.getElementById("second-dropdown");

// Set default value for chart and indicators
document.addEventListener("DOMContentLoaded", function () {
  matchCity(secondDropdown.value);
  updateIndicator(secondDropdown.value);
});

// Add event listener to the first dropdown
firstDropdown.addEventListener("change", function () {
  // Clear existing options in the second dropdown
  secondDropdown.innerHTML = "";

  // Get the selected value from the first dropdown
  const selectedValue = firstDropdown.value;

  // Populate the second dropdown based on the selected value from the first dropdown
  switch (selectedValue) {
    case "India":
      secondDropdown.innerHTML = `
                <option value="Select City" disabled selected>Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Surat">Surat</option>
            `;
      break;
    case "Panama":
      secondDropdown.innerHTML = `
                <option value="Select City" disabled selected>Select City</option>
                <option value="subcategory4">Subcategory 4</option>
                <option value="subcategory5">Subcategory 5</option>
                <option value="subcategory6">Subcategory 6</option>
            `;
      break;
    case "Thailand":
      secondDropdown.innerHTML = `
                <option value="Select City" disabled selected>Select City</option>
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

// Add event listener to the second dropdown
secondDropdown.addEventListener("change", function () {
  // update chart
  matchCity(secondDropdown.value);

  // update figures
  updateIndicator(secondDropdown.value);

  // update map
  changeMap(secondDropdown.value);
});
