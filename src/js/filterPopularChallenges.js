export default function filterPopularChallenges(data) {
    const filteredData = data.sort(function (a, b) {
      return b["rating"] - a["rating"];
    });
    return filteredData.slice(0, 3);
  }