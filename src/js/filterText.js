export default function filterText(data) {
  let inputvalue = document.getElementById("text-filter").value;
  console.log(inputvalue);
   
  return data.filter(
    (item) =>
      item.title.toUpperCase().includes(inputvalue.toUpperCase()) ||
      item.description.toUpperCase().includes(inputvalue.toUpperCase())
  )}

