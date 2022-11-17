
import loadData from './js/loadData.js';
import render from './js/renderChallenges.js';
import filterText from './js/filterText';


 

 (async () => {
    console.log(await loadData());
    let challangesArray = await loadData();
    
    render(challangesArray);
    
    let inputvalue = document.querySelector('#letters').value;
    document.querySelector('#letters').addEventListener('keydown', filterText(inputvalue, challangesArray));

  })();

