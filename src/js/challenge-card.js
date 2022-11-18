//PLACEHOLDER
const challenges = [
    {
        id: 1,
        type: "onsite",
        title: "Project: X of Doom",
        description: "Try your hardest and succeed. Or fail",
        minParticipants: 2,
        maxParticipants: 4,
        rating: 1,
        image: "https://placekitten.com/640/480",
        labels: [
            "linux",
            "web",
            "javascript"
        ]
    },
]

challenges.forEach(challenge => {
    createChallengeCard(challenge);
});

//-----------------------------------

export function createChallengeCard(challenge) {
   
    let iconType, buttonText, typeTitle;
    if (challenge.type === 'online') {
        iconType = 'fa-solid fa-laptop';
        buttonText = 'Take challenge online';
        typeTitle = '(online)';
    } else {
        iconType = 'fa-sharp fa-solid fa-house'
        buttonText = 'Book this room';
        typeTitle = '(on-site)'
    }

    const item = document.createElement('li');
    item.classList.add('challenge-item');
    document.querySelector('.challenge-cards').appendChild(item); //Append challenge-item to container

    item.innerHTML = `
        <i class="${iconType}"></i>
        <img class="challenge-image" alt="" src="${challenge.image}">
        <h3 class="challenge-title">${challenge.title} ${typeTitle}</h3>
        <ul role="meter" class="rating" aria-label="rating"
            arial-valuemin="0" aria-valuemax="5" aria-valuenow="${challenge.rating}"
            aria-valuetext="${challenge.rating} out of 5">

            <li class="rating-star"></li>
            <li class="rating-star"></li>
            <li class="rating-star"></li>
            <li class="rating-star"></li>
            <li class="rating-star"></li>
        </ul>
        <small class="challenge-meta">${challenge.minParticipants}-${challenge.maxParticipants} participants</small>
        <p class="challenge-description">
            ${challenge.description}
        </p>
        <button class="button primary">${buttonText}</button>
    
    `;
    
    //Add active stars
    const stars = document.querySelectorAll('.challenge-item .rating-star');
    for (let i = 0; i < challenge.rating; i++) {
        stars[i].classList.add('active');
    }

    return item;
}