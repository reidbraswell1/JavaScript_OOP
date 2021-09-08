console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Person object
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
        console.log(`Person ${this.counter}.\n==========\nName=${this.name}\nPets=${this.pets}\nResidence=${this.residence}\nHobbies=${this.hobbies}`);
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
        textNode = document.createTextNode(`Pets=${this.pets.toString()}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Residence=${this.residence}`);
        log.appendChild(textNode);
        log.appendChild(document.createElement("br"));
        textNode = document.createTextNode(`Hobbies=${this.hobbies.toString()}`);
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

// Main controlling function. This function is called after
// form validation. This function will create a person object
// for each person entered on the form.
function controller(name, pets, residence, hobbies) {
    console.log("--- Begin controller() ---");
    console.log(`Parameters:\nName=${name}\nPets=${pets}\nResidence=${residence}\nHobbies=${hobbies}\n`);

    petsArray = pets.split(",");
    hobbiesArray = hobbies.split(",");

    let person = new Person(name, petsArray, residence, hobbiesArray, count);
    person.info();
    count = person.getCount();

    document.getElementById("exercise-form").reset();
}

// Function to validate the form. If there are errors
// the error will show up as a placeholder in the input
// fields.
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