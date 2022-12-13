export function sortCards() {
  const sortByInputs = document.querySelectorAll("input[name='sort-by']");
  let cards;
  const container = document.querySelector(".challenge-list");
  let sortByRating;
  
  // Add eventlistener for both rating and name sorting inputs
  sortByInputs.forEach((input) => {
    input.addEventListener("click", () => {
      cards = document.querySelectorAll(".challenge-item");
      // Check if sorting by rating is chosen
      sortByInputs.forEach((input) => {
        if (input.id === "sort-by-rating") {
          sortByRating = input.checked;
        }
      });
      
      cards = Array.from(cards);
      
      // Sort by rating
      if(sortByRating) {
        cards.sort(function (a, b) {
            return b.childNodes[3].getAttribute("aria-valuenow") - a.childNodes[3].getAttribute("aria-valuenow");
          });
      } 
      
      // Sort by title
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

      // Empty container and append sorted cards
      container.innerHTML = "";
      cards.forEach((card) => {
        container.append(card);
      });
    });
  });
}
