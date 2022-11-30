import { filterAndUpdateCards } from './renderChallenges.js';

export function filterByTypes(data) {
    const types = [];
    const checked = document.querySelectorAll('.filter-by-type input[type=checkbox]:checked');
    checked.forEach(item => {
        types.push(item.value);
    });
    return data.filter(challenge => types.some(type => challenge.type.includes(type)));
}

export function handleFilterInput(data) {
    const checkboxes = document.querySelectorAll('.filter-by-type input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const filteredData = filterByTypes(data);
            filterAndUpdateCards(filteredData); 
        });
    });
}
