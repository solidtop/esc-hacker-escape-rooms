const starFrom = document.querySelector(".starsFrom a");
const starsFrom = document.querySelectorAll(".starsFrom a");
const starTo = document.querySelector(".starsTo a");
const starsTo = document.querySelectorAll(".starsTo a");
const ratingFil = document.querySelector(".ratingFilter");

let activeIdx = null;

starsFrom.forEach((starFrom, clickIdx) => {
  starFrom.addEventListener("click", (e) => {
    if (activeIdx === clickIdx) {
      e.target.classList.remove("active");
      activeIdx = clickIdx - 1;
    } else {
      e.target.classList.add("active");
      activeIdx = clickIdx;
    }

    starsFrom.forEach((otherStar, otherIdx) => {
      if (otherIdx < clickIdx) {
        otherStar.classList.add("active");
      } else if (otherIdx > clickIdx) {
        otherStar.classList.remove("active");
      }
    });
  });
});

starsTo.forEach((starTo, clickIdx) => {
  starTo.addEventListener("click", (e) => {
    if (activeIdx === clickIdx) {
      e.target.classList.remove("active");
      activeIdx = clickIdx - 1;
    } else {
      e.target.classList.add("active");
      activeIdx = clickIdx;
    }

    starsTo.forEach((otherStar, otherIdx) => {
      if (otherIdx < clickIdx) {
        otherStar.classList.add("active");
      } else if (otherIdx > clickIdx) {
        otherStar.classList.remove("active");
      }
    });
  });
});

var parentFrom = document.getElementById("starFrom");
var valueFrom = parentFrom.getElementsByClassName("starDeactive active");
console.log(valueFrom.length);

var parentTo = document.getElementById("starTo");
var valueTo = parentTo.getElementsByClassName("starDeactive active");
var qtyClasses = valueTo.length;
console.log(qtyClasses);

ratingFil.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const rating = room.filter((character) => {
      return (
        character.rating >= valueFrom.length &&
        character.rating <= valueTo.length
      );
    });

    console.log(rating);
  }
});

const room = [
  {
    namn: "Hacker place",
    rating: 3,
    place: "on-online",
  },
  {
    namn: "network place",
    rating: 1,
    place: "offline-online",
  },
  {
    namn: "dream IT place",
    rating: 4,
    place: "offline-online",
  },
  {
    namn: "Creeper place",
    rating: 2,
    place: "on-online",
  },
  {
    namn: "Steeper place",
    rating: 5,
    place: "offline-online",
  },
  {
    namn: "I'm zero place",
    rating: 0,
    place: "offline-online",
  },
];
