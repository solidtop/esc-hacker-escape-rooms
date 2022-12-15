  export default function filterText(data) {
  let inputvalue = document.getElementById("text-filter").value;
  

if(inputvalue.length >= 3){
return data.filter(
  (item) =>
    item.title.toUpperCase().includes(inputvalue.toUpperCase()) ||
    item.description.toUpperCase().includes(inputvalue.toUpperCase())
) 
 }
 return data;
}
 
  
