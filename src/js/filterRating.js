
export function handleStarInput() {
 
  const starsFrom = document.querySelectorAll(".starsFrom li");
  const starsTo = document.querySelectorAll(".starsTo li");
  
  let activeIdx = null;
  let activeIdx2 = 5;

  starsFrom.forEach((starFrom, clickIdx) => {
    starFrom.addEventListener("click", (e) => {
    if (activeIdx === clickIdx ) {
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
      if (activeIdx > activeIdx2) {
        starsTo.forEach((starTo, clickIdx) => {
          if (clickIdx <= activeIdx) {
            starTo.classList.add("active");
          } 
        });   
      }
    });
  }); 
  starsTo.forEach((starTo, clickIdx) => {
    starTo.addEventListener("click", (e) => {
      if (activeIdx2 === clickIdx) {
        e.target.classList.remove("active");
        activeIdx2 = clickIdx - 1;
      } else {
        e.target.classList.add("active");
        activeIdx2 = clickIdx;
      }
      starsTo.forEach((otherStar, otherIdx) => {
        if (otherIdx < clickIdx) {
          otherStar.classList.add("active");
        } else if (otherIdx > clickIdx) {
          otherStar.classList.remove("active");
        }
      });
      if (activeIdx > activeIdx2) {
        starsTo.forEach((starTo, clickIdx) => {
          if (clickIdx <= activeIdx) {
            starTo.classList.add("active");
          } else {
            starTo.classList.remove("active");
          }
        });
      }
    });
  });
}
export function filterByRating(data){
  const valueFrom = document.querySelectorAll('.starFrom.active');
  const valueTo = document.querySelectorAll('.starTo.active');
  return data.filter(challenge => {
    return challenge.rating >= valueFrom.length && challenge.rating <= valueTo.length
  });
}