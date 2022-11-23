export default async function renderChallenges(loadData, filterFunction=function(data){return data}, createCardFunction, cardParent) {
    let data = await loadData();
    data = filterFunction(data);
    createCardFunction(data, cardParent);
    return data;
  }