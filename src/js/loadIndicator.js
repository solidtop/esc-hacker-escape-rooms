export function showLoader(item) {
    item.classList.add('loading');
    const loader = document.createElement('div');
    loader.classList.add('lds-ring');
    item.append(loader);

    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        loader.append(div);
    }
} 

export function hideLoader(item) {
    item.classList.remove('loading');
    item.querySelector('.lds-ring').remove();
}