export function createChallengeCard(challenge) {
   
    let iconType, buttonText, typeTitle;
    if (challenge.type === 'online') {
        iconType = 'fa-solid fa-laptop';
        buttonText = 'Take challenge online';
        typeTitle = '(online)';
    } else {
        iconType = 'fa-sharp fa-solid fa-house';
        buttonText = 'Book this room';
        typeTitle = '(on-site)';
    }

    const item = document.createElement('li');
    item.classList.add('challenge-item');
    document.querySelector('.challenge-cards').appendChild(item);

    const image = document.createElement('img');
    image.classList.add('challenge-image');
    image.setAttribute('src', challenge.image);
    image.setAttribute('alt', 'Cute kitten');
    item.appendChild(image);
    
    const title = document.createElement('h3');
    title.classList.add('challenge-title');
    title.textContent = `${challenge.title} ${typeTitle}`;
    item.appendChild(title);

    const rating = document.createElement('ul');
    rating.classList.add('rating');
    rating.setAttribute("role", "meter");
    rating.setAttribute("aria-label", "rating");
    rating.setAttribute("arial-valuemin", '0');
    rating.setAttribute("aria-valuemax", '5');
    rating.setAttribute("aria-valuenow", challenge.rating);
    rating.setAttribute("aria-valuetext", challenge.rating + ' out of 5');
    item.appendChild(rating);

    const stars = [
        document.createElement('li'), 
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),
    ];
    stars.forEach((star, i) => {
        star.classList.add('rating-star');
        if (i < challenge.rating) 
            star.classList.add('active');
        
        rating.appendChild(star);
    });

    const participants = document.createElement('small');
    participants.classList.add('challenge-meta');
    participants.textContent = `${challenge.minParticipants}-${challenge.maxParticipants} participants`;
    item.appendChild(participants);

    const description = document.createElement('p');
    description.classList.add('challenge-description');
    description.textContent = challenge.description;
    item.appendChild(description);

    const button = document.createElement('button');
    button.classList.add('button', 'primary');
    button.textContent = buttonText;
    item.appendChild(button);

    return item;
}