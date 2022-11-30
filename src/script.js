import loadData from "./js/loadData.js";
import filterText from "./js/filterText.js";
import createModal from "./js/modal.js"
import createChallengeCard from "./js/challenge-card.js"

(async () => {
  let challengesArray = await loadData();

  renderAll(challengesArray);

  document.getElementById("text-filter").addEventListener("keyup", () => {
     return filterText(challengesArray);
  });

  document.querySelectorAll('.challenge-item button').forEach(button => {
    button.addEventListener('click', e => {

      console.log(button); 
      console.log();
      console.log(challengesArray);

      createModal(challengesArray);
    });
});


})();

