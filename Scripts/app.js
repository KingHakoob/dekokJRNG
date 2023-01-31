let nameOutput = document.getElementById("nameOutput");
let getNameBtn = document.getElementById("getNameBtn");
let prevNamesOutput = document.getElementById("prevNamesOutput");

let names = [];
let prevNames = [];

getNameBtn.addEventListener('click', function () {
    if (nameOutput.textContent == "Your First Born Here!") { }
    else if (prevNames.length < 5) {
        prevNames.push(nameOutput.textContent);
        prevNamesOutput.textContent = "Draftees: " + prevNames.join(", ");
    }
    else {
        prevNames.shift();
        prevNames.push(nameOutput.textContent);
        prevNamesOutput.textContent = "Draftees: " + prevNames.join(", ");
    }
    GetName();
})

function GetName() {
    fetch("./data/data.json").then(
        response => response.json())
        .then(data => {
            names = data.classNames;
            nameOutput.textContent = names[Math.round(Math.random() * names.length)].name;
        })
}
