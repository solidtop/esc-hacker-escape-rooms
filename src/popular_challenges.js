function filterPopularChallenges(data) {
    let filteredData = data.filter((item)=> {
        return;
    })
    return filteredData;
}

function createChallengeCard() {
    const challengeParent = document.querySelector(".challenge-list");
    const li = document.createElement("li");
    li.classList.add("challenge-item");
    const img = document.createElement("img");
    img.classList.add("challenge-image");
    //replace with api data
    img.setAttribute("alt", "Hacker");
    img.setAttribute("src", "static/hero.png");
    
    li.append(img);
    
    const h3 = document.createElement("h3");
    h3.classList.add("challenge-title");
    // Replace with api data
    h3.textContent = "Title of room (on-site)"
    li.append(h3);

    const ul = document.createElement("ul");
    ul.classList.add("rating");
    ul.setAttribute("role", "meter");
    ul.setAttribute("aria-label", "rating");
    ul.setAttribute("arial-valuemin", "0");
    ul.setAttribute("aria-valuemax", "5");
    //replace with api data
    ul.setAttribute("aria-valuenow", "4");
    //replace with apt data
    ul.setAttribute("aria-valuetext", "4 out of 5");
    li.append(ul)

    //render and append li start items to ul based on api data

    const small = document.createElement("small");
    small.classList.add("challenge-meta");
    //replace with api data
    small.textContent = "2-6 participants";
    li.append(small);

    const p = document.createElement("p");
    p.classList.add("challenge-description");
    //replace with api data
    p.textContent = "Praeterea, ex culpa non invenies unum aut non accusatis unum. Et nihil inuitam. Nemo nocere tibierit, et non inimicos, et";
    li.append(p);

    const button = document.createElement("button");
    button.classList.add("button", "primary");
    button.textContent = "Book this room";
    li.append(button);

    challengeParent.append(li);
}

createChallengeCard();