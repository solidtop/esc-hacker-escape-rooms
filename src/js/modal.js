export default function createModal(challenge) {

    const container = document.createElement('div');
    container.classList.add('modal-container');
    document.body.appendChild(container);

    renderContent(step1(challenge));
    
    return container;
}

export function removeModal() {
    document.querySelector('.modal-container').remove();
}

function renderContent(content) {
    const container = document.querySelector('.modal-container'); 
    container.innerHTML = '';
    container.appendChild(content);
}

function step1(challenge) {

    const form = document.createElement('form');
    form.classList.add('content');

    const h1 = document.createElement('h1');
    h1.textContent = `Book room ${challenge.title} (step 1)`;
    form.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'What date would you like to come?';
    form.appendChild(p);

    const label = document.createElement('label');
    label.textContent = 'Date';
    label.for = 'input[type=date]';
    form.appendChild(label);

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    form.appendChild(inputDate);

    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('button', 'primary');
    button.name = 'search-times';
    button.textContent = 'Search available times';
    form.appendChild(button);

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const times = await loadTimes(); //Martas function här
        renderContent(step2(challenge, times));
    });

    return form;
}

function step2(challenge, times) {

    const form = document.createElement('form');
    form.classList.add('content');

    const h1 = document.createElement('h1');
    h1.textContent = `Book room ${challenge.title} (step 2)`;
    form.appendChild(h1);

    const labelName = document.createElement('label');
    labelName.textContent = 'Name';
    labelName.for = 'input-name';
    form.appendChild(labelName);
   
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.classList.add('input-name');
    form.appendChild(inputName);

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'E-mail';
    labelEmail.for = 'input-email';
    form.appendChild(labelEmail);

    const inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.classList.add('input-email');
    form.appendChild(inputEmail);

    const labelTime = document.createElement('label');
    labelTime.textContent = 'What time?';
    labelEmail.for = 'select-time';
    form.appendChild(labelTime);

    const selectTime = document.createElement('select');
    selectTime.classList.add('select-time');
    form.appendChild(selectTime);

    for (let i = 0; i < times.slots.length; i++) {
        const option = document.createElement('option');
        option.textContent = times.slots[i];
        selectTime.appendChild(option);
    }

    const labelParticipants = document.createElement('label');
    labelParticipants.textContent = 'How many participants?';
    labelParticipants.for = 'select-participants';
    form.appendChild(labelParticipants);

    const selectParticipants = document.createElement('select');
    selectParticipants.classList.add('select-participants');
    form.appendChild(selectParticipants);

    let amountOfOptions = challenge.maxParticipants - challenge.minParticipants;
    for (let i = 0; i < amountOfOptions; i++) {
        const option = document.createElement('option');
        option.textContent = `${challenge.minParticipants + i} participants`;
        selectParticipants.appendChild(option);
    }

    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('button', 'primary');
    button.name = 'submit-booking';
    button.textContent = 'Submit booking';
    form.appendChild(button);

    form.addEventListener('submit', async e => {
        e.preventDefault();

        await reserveTime(); //Martas function här

        renderContent(step3());
    });

    return form;
}

function step3() {
    const div = document.createElement('div');
    div.classList.add('content', 'center');

    const message = document.createElement('h1');
    message.textContent = 'Thank you!';
    div.appendChild(message);

    const button = document.createElement('button');
    button.classList.add('button', 'secondary');
    button.textContent = 'Back to challenges';
    button.addEventListener('click', removeModal);
    div.appendChild(button);

    return div;
}



const buttons = document.querySelectorAll('.challenge-item button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const modal = createModal(challenge);
    });
});