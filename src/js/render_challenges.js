export default async function renderChallenges(loadData, filterFunction, createCardFunction) {
    let data = await loadData();
    data = filterFunction(data);
    createCardFunction(data);
    return data;
  }