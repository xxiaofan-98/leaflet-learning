import { cityData } from "../data/final_net_combined.js";

// divide data by city
export const cityObj = {
  'Mumbai': [],
  'Chennai': [] // Add more cities if needed
};

// Check if cityData contains the features property
if (cityData.features) {
  // Iterate through the features and organize them by city_country
  cityData.features.forEach(feature => {
    const city = feature.properties.city;
    if (cityObj.hasOwnProperty(city)) {
      cityObj[city].push(feature);
    } else {
      // If city doesn't exist in cityObj, create a new key
      cityObj[city] = [feature];
    }
  });
}

// console.log(cityObj);