import loadData from "./loadData.js"

const tagParent = document.querySelector("#btn-container");

/*
Loops through all challenges and saves all labels/tags in an array
*/
async function getTags(loadData) {
  let data = await loadData();
  let tags = [];
  data.forEach((challenge)=> {
    tags.push(challenge.labels);
  });
  tags = tags.flat();
  tags = new Set(tags);
  tags = Array.from(tags);
  return tags;
}

/* 
Creates button elements for every tag
Adds eventlistener for buttons and calls function for filtering by selected tags
*/
async function displayTags(tagData, parent) {
  let tags = await tagData;
  tags.forEach((tag)=> {
    const button = document.createElement("button");
    button.addEventListener("click", (event)=> {
      const currentButton = event.target;
      currentButton.classList.toggle("active");
      let selectedTags = parent.querySelectorAll(".active");
      selectedTags = Array.from(selectedTags);
      selectedTags = selectedTags.map((tag)=> {
        return tag.textContent;
      })
      filterByTags(selectedTags, loadData);
    })
    button.classList.add("btn");
    button.textContent = tag;
    parent.append(button);
  })
}

async function filterByTags(tags, loadData) {
 let data = await loadData();
 data = data.filter((challenge)=> {
  return tags.every((tag)=> {
    return challenge.labels.includes(tag);
  });
 });
}

displayTags(getTags(loadData), tagParent);