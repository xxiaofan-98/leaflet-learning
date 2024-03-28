import { chennai } from "../data/chennaigeo.js";

// Generic function to calculate average
function calculateAverage(data, propertyName) {
    let totalCount = 0;
    const totalFeatures = data.features.length;

    data.features.forEach(feature => {
        totalCount += feature.properties[propertyName];
    });

    return totalFeatures > 0 ? totalCount / totalFeatures : 0;
}

// Example usage:
const avgCount = calculateAverage(chennai, 'count').toFixed(2);
const avgRestaurant = calculateAverage(chennai, 'restaurant').toFixed(2);
const avgWaterDis = calculateAverage(chennai, 'wtr_sig_dis').toFixed(2);

// Display the results in the DOM
const countElm = document.querySelector('.js-count');
countElm.innerHTML = `
    Count Average: ${avgCount}
`;

const restaurantElm = document.querySelector('.js-restaraunt');
restaurantElm.innerHTML = `
    Restaurant Average: ${avgRestaurant}
`;

const waterElm = document.querySelector('.js-water');
waterElm.innerHTML = `
    Water Distance Average: ${avgWaterDis}
`;