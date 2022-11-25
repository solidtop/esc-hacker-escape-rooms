import loadData from "./js/loadData.js";
import filterText from "./js/filterText";
 

(async () => {
  let challangesArray = await loadData();

  document.getElementById("text-filter").addEventListener("keyup", () => {
    const newArray = filterText(challangesArray);
    console.log(newArray);
  });
})();
