console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies, count) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
        this.count = count;
        this.counter = ++this.count;
        this.outputLog = "log";
    }
    info() {
        console.log(`Person ${this.counter}.\n==========\nName=${this.name}\nPets=${this.pets}\nResidence=${this.residence}\n${this.hobbies}`);
        const log = document.getElementById(this.outputLog);
        let textNode = document.createTextNode(`Person ${this.counter}.`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode("===============");
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Name=${this.name}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Pets=${this.pets}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Residence=${this.residence}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Hobbies=${this.hobbies}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode("===============");
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        log.appendChild(document.createElement("br"));
        
    }
    getCount() {
        return this.counter;
    }
}

let count = 0;

let person = new Person("Sam",["dog","cat"],"Long Island",["fishing","sailing"],count);
person.info();
count=person.getCount();
const person2 = new Person("Tom",["fish","pig"],"Chicago",["coding","biking"],count);
person2.info();

function controller(name, pets, residence, hobbies) {
    console.log("--- Begin controller() ---");
    console.log(`Parameters:\nName=${name}\nPets=${pets}\nResidence=${residence}\nHobbies=${hobbies}\n`);

    petsArray = pets.split(",");
    hobbiesArray = hobbies.split(",");
}

function validateForm(name, pets, residence, hobbies) {
    console.log("--- Begin validateForm() ---");
    console.log(`Parameters:\nName=${name}\nPets=${pets}\nResidence=${residence}\nHobbies=${hobbies}\n`);

    const errorColor = "red";
    const normalColor = "black";
    const nameId = "name1";
    const petsId = "pets";
    const residenceId = "residence";
    const hobbiesId = "hobbies";
    let validation = true;

    document.getElementById(nameId).style.color=normalColor;
    document.getElementById(petsId).style.color=normalColor;
    document.getElementById(residenceId).style.color=normalColor;
    document.getElementById(hobbiesId).style.color=normalColor;

    if(name == "") {
        document.getElementById(nameId).placeholder="Error Name Required";
        document.getElementById(nameId).style.color=errorColor;
        validation=false;
    }
    if(pets == "") {
        document.getElementById(petsId).placeholder="Error Pets Required";
        document.getElementById(petsId).style.color=errorColor;
        validation=false;
    }
    if(residence == "") {
        document.getElementById(residenceId).placeholder="Error Residence Required";
        document.getElementById(residenceId).style.color=errorColor;
        validation=false;
    }
    if(hobbies == "") {
        document.getElementById(hobbiesId).placeholder="Error Hobbies Required";
        document.getElementById(hobbiesId).style.color=errorColor;
        validation=false;
    }
    return validation;
}