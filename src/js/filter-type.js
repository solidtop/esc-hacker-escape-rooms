import { createChallengeCard } from "./challenge-card.js";

const checkboxes = document.querySelectorAll('.filter-by-type input[type=checkbox]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', toggleCheckbox);    
});

function toggleCheckbox() {

    let filters = [];
    const checked = document.querySelectorAll('.filter-by-type input[type=checkbox]:checked');
    checked.forEach(item => {
        filters.push(item.value);
    });

    const filteredArray = filterByType(challenges, filters);
    console.log(filteredArray);
    
    //TODO: Update Challenge-cards display here
}

function filterByType(data, filters) {
    return data.filter(item => filters.some(filter => item.type.includes(filter)));
}



