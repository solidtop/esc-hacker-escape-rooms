
export function handleStarInput() {

  const starsFrom = document.querySelectorAll(".starFrom");
  const starsTo = document.querySelectorAll(".starTo");
  
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
}

export function filterByRating(data){
  const valueFrom = document.querySelectorAll('.starFrom.active');
  const valueTo = document.querySelectorAll('.starTo.active');
  console.log(valueFrom, valueTo)
  return data.filter(challenge => {
    return challenge.rating >= valueFrom.length && challenge.rating <= valueTo.length
  });
}

