const onlineInput = document.querySelector("input[name='online-challenge']");
const onsiteInput = document.querySelector("input[name='on-site-challenge']");
const tags = document.querySelectorAll(".btn.active");
const textSearch = document.querySelector("#text-filter");
const filterBox = document.querySelector(".filter-container");

function render(container) {
  const renderLinkButton = document.createElement("button");
  renderLinkButton.textContent = "Create link with current filters";
  renderLinkButton.classList.add("share-filtered-link");
  renderLinkButton.addEventListener("click", createURL);
  container.append(renderLinkButton);
}

function createURL() {
  const minRating = document.querySelectorAll(".starFrom.active").length;
  const maxRating = document.querySelectorAll(".starTo.active").length;
  let tags = document.querySelectorAll(".btn.active");
  tags = Array.from(tags);
  let url = window.location.origin + window.location.pathname + "?";

  if (onlineInput.checked && !onsiteInput.checked) {
    url = url + "type=online";
  }
  if(onsiteInput.checked && !onlineInput.checked) {
    url = url + "type=onsite";
  }

  if(minRating !== 0) {
    url = url + "&min-rating=" + minRating;
  }

  if(maxRating !== 5) {
    url = url + "&max-rating=" + maxRating;
  }

  if(textSearch.value.trim() !== "") {
    url = url + "&text=" + textSearch.value.trim();
  }

  if(tags.length !== 0) {
    url = url + "&tags=";
    tags.forEach((tag)=> {
        url = url + tag.textContent + ","
        console.log(tag.textContent);
    })
  }
  
  navigator.clipboard.writeText(url);

}

render(filterBox);
