
const displayNumber = document.querySelector("[data-display-number]");
const displayName = document.querySelector("[data-display-name]");
const daysUnits = document.querySelector("[data-days-units]");
const dateInput = document.getElementById("myDate");
const nameInput = document.getElementById("myName");

function processInformation() {
    const birthdate = new Date(dateInput.value + "T00:00:00");
    const today = new Date();
    const difference = today.getTime() - birthdate.getTime();
    const daysAge = Math.floor(difference / (1000 * 3600 * 24));
    const name = nameInput.value;

    if (Number.isInteger(daysAge) && name) {
        displayNumber.innerHTML = daysAge.toLocaleString();
        displayName.innerHTML = name;
        document.getElementById("everything").style.visibility = "visible";
        document.getElementById("instructions").style.visibility = "hidden";
        if (daysAge === 1) {
            daysUnits.innerHTML = "day old.";
        } else {
            daysUnits.innerHTML = "days old.";
        }
    } else {
        document.getElementById("everything").style.visibility = "hidden";
        document.getElementById("instructions").style.visibility = "visible";
    }
}

dateInput.addEventListener("change", processInformation);
nameInput.addEventListener("change", processInformation);


processInformation();
