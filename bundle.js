(()=>{"use strict";(async()=>{let e=await async function(){const e=await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");return(await e.json()).challenges}();document.getElementById("text-filter").addEventListener("keyup",(()=>{const t=function(e){let t=document.getElementById("text-filter").value;return e.filter((e=>e.title.toUpperCase().includes(t.toUpperCase())||e.description.toUpperCase().includes(t.toUpperCase())))}(e);console.log(t)}))})()})();





var close = document.getElementsByClassName("button-close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
