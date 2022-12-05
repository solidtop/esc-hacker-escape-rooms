export default function filterText(data) {
  let inputvalue = document.getElementById("text-filter").value;
  return data.filter(
    (item) =>
      item.title.toUpperCase().includes(inputvalue.toUpperCase()) ||
      item.description.toUpperCase().includes(inputvalue.toUpperCase())
  )}

