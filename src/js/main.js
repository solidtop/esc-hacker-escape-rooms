import { createChallengeCard } from "./challenge-card.js";
import { filterByType } from "./filter-type.js";

async function fetchChallenges(){
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    return data.challenges;
}

const challenges = await fetchChallenges();
const ul = document.createElement('ul');
ul.classList.add('challenge-list2');
document.querySelector('.challenges').appendChild(ul);

challenges.forEach(item => {
    const card = createChallengeCard(item);
    document.querySelector('.challenge-list2').append(card);
});


const checkboxes = document.querySelectorAll('.filter-by-type input[type=checkbox]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const newArr = filterByType(challenges);
        updateCards(newArr);
    });    
});




function updateCards(data) {

    document.querySelector('.challenge-list2').remove(); //Remove existing cards

    //Add new cards
    const list = document.createElement('ul');
    list.classList.add('challenge-list2');
    document.querySelector('.challenges').appendChild(list);

    data.forEach(item => {
        const card = createChallengeCard(item);
        document.querySelector('.challenge-list2').append(card);
    });
}