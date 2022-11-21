import loadData from './loadData.js';

async function fetchChallenges(){
    // let data = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
    // data = await data.json();
    // data = data["challenges"];
    let data = await loadData();
    data = filterPopularChallenges(data)
    data.forEach((challenge)=> {
        createChallengeCard(challenge);
    });
    return data;
}

function filterPopularChallenges(data) {
    const filteredData = data.sort(function(a,b) {
        return b["rating"] - a["rating"];
    });
    return filteredData.slice(0,3);
}

function createChallengeCard(challenge) {
    const challengeParent = document.querySelector(".challenge-list");
    const li = document.createElement("li");
    li.classList.add("challenge-item");
    const img = document.createElement("img");
    img.classList.add("challenge-image");
    img.setAttribute("alt", "Image of challenge");
    img.setAttribute("src", challenge["image"]);
    let icon = document.createElement("img");
    challenge["type"] === "online" ? icon.setAttribute("src", "static/computer.png") : icon.setAttribute("src", "static/home_icon.png");
    icon.classList.add("challenge-image-icon");
    li.append(icon);
    li.append(img);
    
    const h3 = document.createElement("h3");
    h3.classList.add("challenge-title");
    h3.textContent = challenge["title"];
    li.append(h3);

    const ul = document.createElement("ul");
    ul.classList.add("rating");
    ul.setAttribute("role", "meter");
    ul.setAttribute("aria-label", "rating");
    ul.setAttribute("arial-valuemin", "0");
    ul.setAttribute("aria-valuemax", "5");
    ul.setAttribute("aria-valuenow", challenge["rating"]);
    ul.setAttribute("aria-valuetext", `${challenge["rating"]} out of 5`);
    li.append(ul);

    //unsure how to deal with decimal numbers
    let ratingCounter = Math.floor(challenge["rating"]);
    for(let i = 0; i < 5; i++) {
        const star = document.createElement("li");
        if(ratingCounter > 0) {
            star.classList.add("active");
            ratingCounter --;
        }
        star.classList.add("rating-star");
        ul.append(star);
    }

    const small = document.createElement("small");
    small.classList.add("challenge-meta");
    small.textContent = `${challenge["minParticipants"]}-${challenge["maxParticipants"]} participants`;
    li.append(small);

    const p = document.createElement("p");
    p.classList.add("challenge-description");
    p.textContent = challenge["description"];
    li.append(p);

    const button = document.createElement("button");
    button.classList.add("button", "primary");
    button.textContent = "Book this room";
    li.append(button);

    challengeParent.append(li);
}

fetchChallenges();