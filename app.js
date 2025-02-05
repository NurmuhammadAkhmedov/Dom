let boxElement = document.querySelector(".box");
let newBoxElement = document.createElement("div");

newBoxElement.style.width = "500px";
newBoxElement.style.height = "200px";
newBoxElement.style.background = "black";
newBoxElement.style.borderRadius = "30px";
newBoxElement.style.padding = "20px";
newBoxElement.style.color = "white";

let name = prompt("ismingizni kiriting:");
let surname = prompt("Familiyangizni kiriting:");
let age = prompt("Yoshingizni kiriting:");
let choice = +prompt(`Ismingiz katta harfda bo'lishi uchun 1 ni kiriting kichik harfda bo'lishi uchun 2 ni kiriting\n1) Katta\n2) Kichik`);


if (choice === 1) {
    let nameElement = document.createElement("h2");
    nameElement.innerHTML = `Name: ${name.toUpperCase()}`;

    let surnameElement = document.createElement("h2");
    surnameElement.innerHTML = `Surname: ${surname.toUpperCase()}`;
    
    let ageElement = document.createElement("h2");
    ageElement.innerHTML = `Age: ${age.toUpperCase()}`

    newBoxElement.appendChild(nameElement);
    nameElement.appendChild(surnameElement);
    newBoxElement.appendChild(ageElement);

    boxElement.appendChild(newBoxElement);
} else if (choice === 2) {
    let nameElement = document.createElement("h2");
    nameElement.innerHTML = `Name: ${name.toLowerCase()}`;

    let surnameElement = document.createElement("h2");
    surnameElement.innerHTML = `Surname: ${surname.toLowerCase()}`;

    let ageElement = document.createElement("h2");
    ageElement.innerHTML = `Age: ${age.toLowerCase()}`;

    newBoxElement.appendChild(nameElement);
    nameElement.appendChild(surnameElement);
    nameElement.appendChild(ageElement);

    boxElement.appendChild(newBoxElement);
} else if (choice != 1 && choice != 2) {
    alert("iltimos 1 yoki 2 ni tanlang");
    choice = +prompt(`Ismingiz katta harfda bo'lishi uchun 1 ni kiriting kichik harfda bo'lishi uchun 2 ni kiriting\n1) Katta\n2) Kichik`);
}