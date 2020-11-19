let name = "Станислав Нерман";
let age = 19;
let city = "Таллинн";
let school = "Tallinna Tööstushariduskeskus";
let drivingLicense = "";
console.log(`Имя: ${name}. Возраст: ${age}. Город: ${city}.`);

if(age >18){
    drivingLicense = `Могу получить права`;
} else {
    drivingLicense = `Не могу получить права`;
}

console.log(drivingLicense);

const html = `
    <ul>
        <li>Имя: ${name}</li>
        <li>Возраст: ${age}</li>
        <li>Город: ${city}</li>
        <li>Школа: ${school}</li>
        <li>${drivingLicense}</li>
    </ul>

`;

document.body.innerHTML = html;