const CLOSE_ICON = "\u00D7";

function createCloseButton(element) {
    const span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(document.createTextNode(CLOSE_ICON));
    element.appendChild(span);
    span.onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    };
}

function addNewElement() {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue.trim() === '') {
        showError("You must write something!");
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("myUL").appendChild(li);

    // Mark tasks as "checked" when clicked
    li.addEventListener('click', function() {
        this.classList.toggle('checked');
    });

    createCloseButton(li);

    // Clear input field after adding the new item
    document.getElementById("myInput").value = "";
}

function showError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";

    // Hide the error message after 3 seconds
    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addNewElement);
});