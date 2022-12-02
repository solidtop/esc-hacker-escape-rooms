export default function handeFilterMenu() {
   document.querySelector('#show-filters').addEventListener('click', () => {
        document.querySelector('.filter-container').classList.add('show');
        document.querySelector('#show-filters').classList.add('show');
   }); 

    document.querySelector('#hide-filters').addEventListener('click', () => {
        document.querySelector('.filter-container').classList.remove('show');
        document.querySelector('#show-filters').classList.remove('show');
   }); 
}

