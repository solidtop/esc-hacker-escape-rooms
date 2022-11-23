import loadData from "./js/loadData.js";
import filterText from "./js/filterText";

(async () => {
  let challangesArray = await loadData();

  document.getElementById("text-filter").addEventListener("keyup", () => {
    return filterText(challangesArray)
  });
})();
