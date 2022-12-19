import { showLoader, hideLoader } from "./loadIndicator.js";

export default function createChallengeCard(challenge) {
   
    let icon, buttonText, typeTitle;
    if (challenge.type === 'online') {
        icon = 'fa-solid fa-laptop';
        buttonText = 'Take challenge online';
        typeTitle = '(online)';
    } else {
        icon = 'fa-sharp fa-solid fa-house';
        buttonText = 'Book this room';
        typeTitle = '(on-site)';
    }

    const item = document.createElement('li');
    item.classList.add('challenge-item');

    const i = document.createElement('i');
    i.setAttribute('class', icon + ' challenge-image-icon');
    item.appendChild(i);

    const image = document.createElement('img');
    image.classList.add('challenge-image');
    image.src = challenge.image;
    image.alt = 'challenge image';
    item.appendChild(image);
    
    const title = document.createElement('h3');
    title.classList.add('challenge-title');
    title.textContent = `${challenge.title} ${typeTitle}`;
    item.appendChild(title);

    const ratingList = document.createElement('ul');
    ratingList.classList.add('rating');
    ratingList.setAttribute("role", "meter");
    ratingList.setAttribute("aria-label", "rating");
    ratingList.setAttribute("arial-valuemin", '0');
    ratingList.setAttribute("aria-valuemax", '5');
    ratingList.setAttribute("aria-valuenow", challenge.rating);
    ratingList.setAttribute("aria-valuetext", challenge.rating + ' out of 5');
    item.appendChild(ratingList);

    const rating = Math.floor(challenge.rating);
    for (let i = 0; i < 5; i++) {
        let star = document.createElement('li');
        star.classList.add('rating-star');
        if (i < rating) 
            star.classList.add('active');
        
        ratingList.appendChild(star);
    }

    const participants = document.createElement('small');
    participants.classList.add('challenge-meta');
    participants.textContent = `${challenge.minParticipants}-${challenge.maxParticipants} participants`;
    item.appendChild(participants);

    const description = document.createElement('p');
    description.classList.add('challenge-description');
    description.textContent = challenge.description;
    if (description.textContent.length < 50) {
        item.appendChild(description);
    } else {
        description.textContent = description.textContent.substring(0,50)+ '...';
        item.appendChild(description);
    }
    

    const currentChallengeObject = document.createElement("input");
    currentChallengeObject.setAttribute("hidden", "true");
    currentChallengeObject.setAttribute("value", JSON.stringify(challenge));

    const button = document.createElement('button');
    button.classList.add('button', 'primary');
    button.textContent = buttonText;
    button.append(currentChallengeObject);
    item.appendChild(button);

    showLoader(item);
    image.onload = () => hideLoader(item);
   
    return item;
}