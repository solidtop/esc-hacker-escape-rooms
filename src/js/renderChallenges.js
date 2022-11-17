export default function render(data) {
    const list = document.querySelector(".challenges-list");

    for (let i = 0; i< data.length; i++) {
        let card = document.createElement('li');
        let title = document.createElement('h3');
        let type = document.createElement('icon');
        let description = document.createElement('p');
        let participants = document.createElement('small');
        let image = document.createElement('img');
        let rating = document.createElement('ul');
        let star = document.createElement('li');
        let btn = document.createElement('button');

        list.setAttribute('class', 'challenges-list');

        list.appendChild(card);
        card.setAttribute('class', 'challenge-item');
        
        card.appendChild(type);
        if (data[i].type == 'onsite') 
            type.setAttribute('class', 'fa-solid fa-house');
        else
            type.setAttribute('class', 'fa-solid fa-laptop');
        
        card.appendChild(image);
        image.src = data[i].image;
        image.setAttribute('class', 'challenge-image');

        card.appendChild(title);
        title.innerHTML = data[i].title;
        title.setAttribute('class', 'challenge-title');

        card.appendChild(participants);
        participants.innerHTML = data[i].minParticipants + ' - ' + data[i].maxParticipants + ' participants';
        participants.setAttribute('class', 'challenge-meta');

        card.appendChild(description);
        description.innerHTML = data[i].description;
        description.setAttribute('class', 'challenge-description');

        /*card.appendChild(rating);
        rating.setAttribute('class', 'rating');

        for (let j = 0; j < Math.floor(data[i].rating); j++) {
            rating.appendChild(star);
            star.setAttribute('class', 'fa-solid fa-star');          
        } 

        for (let k = Math.floor(data[i].rating); k < 5; k++) {
            rating.appendChild(star);
            star.setAttribute('class', 'fa-regular fa-star');
        } */
        
        card.appendChild(btn);
        btn.setAttribute('class', 'button primary');
        btn.innerHTML = 'Book this room';
    }
};