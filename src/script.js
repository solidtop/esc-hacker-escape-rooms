import loadData from "./js/loadData.js";
import filterPopularChallenges from "./js/filterPopularChallenges.js";
import createChallengeCard from "./js/challengeCard.js";
import { renderChallenges } from "./js/renderChallenges.js";
import filterText from "./js/filterText.js";
import { createModal } from "./js/modal.js"

(async () => {
  let challengesArray = await loadData();
  renderChallenges(challengesArray, filterPopularChallenges, createChallengeCard, document.querySelector(".challenge-list"));
  document.getElementById('text-filter').addEventListener('keyup', () => {
     return filterText(challengesArray);
  });

  document.querySelectorAll('.challenge-item button').forEach(button => {
    button.addEventListener('click', e => {
      const challenge = JSON.parse(button.querySelector('input').value);
      createModal(challenge);
    });
});

})();

