export default async function renderChallenges(loadData, filterFunction=function(data){return data}, createCardFunction) {
    let data = await loadData();
    data = filterFunction(data);
    createCardFunction(data);
    return data;
  }