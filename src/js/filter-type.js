export function filterByType(data) {
    const types = [];
    const checked = document.querySelectorAll('.filter-by-type input[type=checkbox]:checked');
    checked.forEach(item => {
        types.push(item.value);
    });

    return data.filter(item => types.some(type => item.type.includes(type)));
}

