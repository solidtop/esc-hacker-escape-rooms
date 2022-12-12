export function sortCards() {
  const sortByInputs = document.querySelectorAll("input[name='sort-by']");
  let cards = document.querySelectorAll(".challenge-item");
  const container = document.querySelector(".challenge-list");
  let sortByRating;
  
  sortByInputs.forEach((input) => {
    input.addEventListener("click", () => {
      sortByInputs.forEach((input) => {
        if (input.id === "sort-by-rating") {
          sortByRating = input.checked;
        }
      });
      cards = Array.from(cards);
      
      if(sortByRating) {
        cards.sort(function (a, b) {
            return b.childNodes[3].ariaValueNow - a.childNodes[3].ariaValueNow;
          });
      } 
      
      else {
        cards.sort(function (a, b) {
            if(a.childNodes[2].textContent < b.childNodes[2].textContent) {
                return -1;
            }
            else if(a.childNodes[2].textContent > b.childNodes[2].textContent) {
                return 1;
            } 
            else {
                return 0
            }
          });
      }
      container.innerHTML = "";
      cards.forEach((card) => {
        container.append(card);
      });
    });
  });
}
