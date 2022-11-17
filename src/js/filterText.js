import render from './renderChallenges.js';

export default function filterText(inputvalue, data) {
    
    const filteredArray = [];
    filteredArray.filter(item => {
        return (data[i].title).includes(inputvalue) || (data[i].description).includes(inputvalue)
    });
    
    render(filteredArray);

}
    