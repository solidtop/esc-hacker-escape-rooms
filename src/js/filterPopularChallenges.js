export default async function filterPopularChallenges(loadData) {
  let data = await loadData;
    const filteredData = data.sort(function (a, b) {
      return b["rating"] - a["rating"];
    });
    return filteredData.slice(0, 3);
  }