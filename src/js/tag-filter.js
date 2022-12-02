/*
Loops through all challenges and saves all labels/tags in an array
*/
async function getTags(loadData) {
  let data = await loadData;
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
async function displayTags(tagData, challengeData, parent) {
  let tags = await tagData;
  const buttons = []
  tags.forEach((tag)=> {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = tag;
    parent.append(button);
    buttons.push(button)
  });
  return buttons;
}



async function filterByTags(tags, loadData) {
 let data = await loadData;
 data = data.filter((challenge)=> {
  return tags.every((tag)=> {
    return challenge.labels.includes(tag);
  });
 });
 return data;
}

export { getTags, displayTags, filterByTags}
