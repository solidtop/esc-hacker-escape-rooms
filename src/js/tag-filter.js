import loadData from "./loadData.js"

const tagParent = document.querySelector("#btn-container");

// /* show all and reset
// function w3AddClass element and name argument , add class
// */ 
// filterObjects("all");
// function filterObjects(c) {
//   var x, i;
//   x = document.getElementsByClassName("box");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("btn-container");
// var btn = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

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

