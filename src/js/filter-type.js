const checkboxes = document.querySelectorAll('.filter-by-type input[type=checkbox]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        
        let types = [];
        const checked = document.querySelectorAll('.filter-by-type input[type=checkbox]:checked');
        checked.forEach(item => {
            types.push(item.value);
        });

        const filteredArray = filterByType(challenges, types);
        updateCards(filteredArray);
    });    
});

function filterByType(data, types) {
    return data.filter(item => types.some(type => item.type.includes(type)));
}

function updateCards(data) {

    document.querySelector('.challenge-list').remove(); //Remove existing cards

    //Add new cards
    const list = document.createElement('ul');
    list.classList.add('challenge-list');
    document.body.appendChild(list);

    data.forEach(item => {
        createChallengeCard(item);
    });
}
