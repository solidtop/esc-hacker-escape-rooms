async function fetchChallenges(){
    let data = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
    data = await data.json();
    data = data["challenges"];
    data = filterPopularChallenges(data)
    data.forEach((challenge)=> {
        createChallengeCard(challenge);
    });
    console.log(data)
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
    // unsure what to use
    img.setAttribute("alt", "image");
    img.setAttribute("src", challenge["image"]);
    
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
    let ratingCounter = Math.ceil(challenge["rating"]);
    console.log(ratingCounter)
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
