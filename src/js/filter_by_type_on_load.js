function getQueryParams() {
  const params = window.location.search;
  const paramSearch = new URLSearchParams(params);
  const type = paramSearch.get("type");

  //Call function to get API data
  
  // if type === online || type === onsite Call function for filtering cards via type

  //Call function for rendering cards
}

getQueryParams();