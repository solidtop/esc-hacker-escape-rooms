import loadTimes from "./loadTimes.js";
import reserveTime from "./reserveTime.js";

export function createModal(challenge) {
    const container = document.createElement("div");
    container.classList.add("modal-container");
    document.body.appendChild(container);
    renderContent(step1(challenge));
    
    document.body.addEventListener("click", closeOnInput);

    return container;
}

 function closeOnInput(e) {
    if (e.target.classList.contains("modal-container") && !e.target.classList.contains("button")) {
        removeModal();
    }
 }

export function removeModal() {
    document.body.removeEventListener('click', closeOnInput);

    document.querySelector(".modal-container").remove();
}

async function renderContent(content) {
    const container = document.querySelector(".modal-container");
    container.innerHTML = "";
    container.appendChild(await content);
}

async function step1(challenge) {
    const form = document.createElement("form");
    form.classList.add("modal-content");

    const h1 = document.createElement("h1");
    h1.textContent = `Book room ${challenge.title} (step 1)`;
    form.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "What date would you like to come?";
    form.appendChild(p);

    const label = document.createElement("label");
    label.textContent = "Date";
    label.for = "input[type=date]";
    form.appendChild(label);

    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.setAttribute("min", new Date().toLocaleDateString());
    form.appendChild(inputDate);

    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("button", "primary");
    button.name = "search-times";
    button.textContent = "Search available times";
    form.appendChild(button);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const requestedDate = inputDate.value;

        if (inputDate.value === "") {
            alert("Please choose a date");
        } else {
            const times = await loadTimes(challenge.id, requestedDate);
            renderContent(step2(challenge, times));
        }
    });

    return form;
}

async function step2(challenge, times) {
    const form = document.createElement("form");
    form.classList.add("modal-content");

    const h1 = document.createElement("h1");
    h1.textContent = `Book room ${challenge.title} (step 2)`;
    form.appendChild(h1);

    const labelName = document.createElement("label");
    labelName.textContent = "Name";
    labelName.for = "input-name";
    form.appendChild(labelName);

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.setAttribute("required","true");
    inputName.classList.add("input-name");
    form.appendChild(inputName);

    const labelEmail = document.createElement("label");
    labelEmail.textContent = "E-mail";
    labelEmail.for = "input-email";
    form.appendChild(labelEmail);

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.setAttribute("required","true");
    inputEmail.classList.add("input-email");
    form.appendChild(inputEmail);

    const labelPhone = document.createElement("label");
    labelPhone.textContent = "Phone number";
    labelPhone.for = "input-phone";
    form.appendChild(labelPhone);

    const inputPhone = document.createElement("input");
    inputPhone.type = "tel";
    inputPhone.setAttribute("required","true");
    inputPhone.classList.add("input-phone");
    form.appendChild(inputPhone);

    const labelTime = document.createElement("label");
    labelTime.textContent = "What time?";
    labelEmail.for = "select-time";
    form.appendChild(labelTime);

    const selectTime = document.createElement("select");
    selectTime.classList.add("select-time");
    const option = document.createElement("option");
    option.textContent = "-- Choose time --";
    selectTime.appendChild(option);
    form.appendChild(selectTime);

    for (let i = 0; i < times.slots.length; i++) {
        const option = document.createElement("option");
        option.textContent = times.slots[i];
        selectTime.appendChild(option);
    }

    const labelParticipants = document.createElement("label");
    labelParticipants.textContent = "How many participants?";
    labelParticipants.for = "select-participants";
    form.appendChild(labelParticipants);

    const inputParticipants = document.createElement("input");
    inputParticipants.classList.add("select-participants");
    inputParticipants.type = 'number';
    inputParticipants.min = challenge.minParticipants;
    inputParticipants.max = challenge.maxParticipants;
    inputParticipants.value = challenge.minParticipants;
    inputParticipants.required = true;
    form.appendChild(inputParticipants);

    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("button", "primary");
    button.name = "submit-booking";
    button.textContent = "Submit booking";
    form.appendChild(button);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        let requestedName = document.querySelector(".input-name").value;
        let requestedEmail = document.querySelector(".input-email").value;
        let requestedPhone = document.querySelector(".input-phone").value;
        let requestedParticipants = document.querySelector(".select-participants").value;
        let requestedTime = document.querySelector(".select-time").value;
        let requestedDate = times.date;
        let challengeId = challenge.id;
        let matches = requestedParticipants.match(/(\d+)/);
        let regex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

        if (!requestedPhone.match(regex)) {
            alert('Wrongly putten phone number pleas try again.') 
        }

        

        if (requestedParticipants === "-- Select number --") {
            alert("Please select participants.");
        } else if (requestedTime === "-- Choose time --") {
            alert("Please choose time.");
        } else {
            requestedParticipants = parseInt(matches[0]);
            await reserveTime(
                challengeId,
                requestedName,
                requestedEmail,
                requestedPhone,
                requestedDate,
                requestedTime,
                requestedParticipants
            );
            renderContent(step3());
        }
    });

    return form;
}

function step3() {
    const div = document.createElement("div");
    div.classList.add("modal-content", "center");

    const message = document.createElement("h1");
    message.textContent = "Thank you!";
    div.appendChild(message);

    const button = document.createElement("button");
    button.classList.add("button", "secondary");
    button.textContent = "Back to challenges";
    button.addEventListener("click", removeModal);
    div.appendChild(button);

    return div;
}

export function listeners() {
    document.querySelectorAll('.challenge-item button').forEach(button => {
        button.addEventListener('click', () => {
          const challenge = JSON.parse(button.querySelector('input').value);
          createModal(challenge);
        }); 
      });
};



