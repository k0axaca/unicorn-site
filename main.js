const state = {
    unicornCount: 0
};

const updateUnicornCount = () => {
    const unicornCounterElement = document.querySelector('#unicornCount');
    unicornCounterElement.textContent = `Total Unicorns: ${state.unicornCount}`;
};

const addUnicorn = () => {
    const newUnicorn = document.createElement("span");
    const unicornContainer = document.querySelector("#unicornContainer");
    newUnicorn.textContent = "🦄";
    unicornContainer.appendChild(newUnicorn);
    state.unicornCount += 1;
    updateUnicornCount();
};

const registerEventHandlers = () => {
    const unicornButton = document.querySelector("#addUnicornButton");
    unicornButton.addEventListener("click", addUnicorn);
};

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    }

document.addEventListener("DOMContentLoaded", registerEventHandlers);