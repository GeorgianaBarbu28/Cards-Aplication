let emailInput=document.querySelector(".email-input");
let userEmail=document.querySelector(".user-email");
let firstNameInput=document.querySelector(".first-name-input");
let userFirstName=document.querySelector(".first-name-user");
let lastNameInput=document.querySelector(".last-name-input");
let userLastName=document.querySelector(".last-name-user");
let locationInput=document.querySelector(".location-input");
let userLocation=document.querySelector(".user-location");
let phoneInput=document.querySelector(".phone-input");
let userPhone=document.querySelector(".user-phone");
let errorInput= document.querySelector(".error-input");
let userCard= document.querySelector(".user-card");

let updateUserEmail =() =>{
    userEmail.innerText = emailInput.value;
    let email = emailInput.value;
    if (email.length < 5) {
        errorInput.style.display="flex";
        errorInput.style.color = "red";
        emailInput.style.border = "2px solid red";
    } else {
        userEmail.innerText = email;
        errorInput.style.display="none";
        emailInput.style.border = "2px solid black"; 
    }
};

let updateFirstName = () => {
    userFirstName.innerText=  firstNameInput.value;
};

let updateLastNmae =() => {
    userLastName.innerText = lastNameInput.value;
};

let updateLocation =() => {
    userLocation.innerText= locationInput.value;
};

let updatePhone = () =>{
    userPhone.innerText = phoneInput.value;
};

let updateUserCard =() => {
    let name1 = firstNameInput.value.trim();
    let name2 = lastNameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let location= locationInput.value.trim();
    if (name1 || name2 || email || phone || location) {
        // Cel puțin un câmp a fost completat, așa că afișăm cardul
        userCard.style.display = "block";
    } else {
        // Niciun câmp nu a fost completat, așa că ascundem cardul
        userCard.style.display = "none";
    }
};

function saveUserData() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.disabled = true; // Dezactivează câmpurile de intrare
    });
    document.querySelector("button").disabled = true; // Dezactivează butonul "Save"
}

emailInput.addEventListener("input",updateUserEmail );
firstNameInput.addEventListener("input", updateFirstName);
lastNameInput.addEventListener("input", updateLastNmae);
locationInput.addEventListener("input", updateLocation);
phoneInput.addEventListener("input", updatePhone);
emailInput.addEventListener("input", updateUserCard);
firstNameInput.addEventListener("input", updateUserCard);
lastNameInput.addEventListener("input", updateUserCard);
locationInput.addEventListener("input", updateUserCard);
phoneInput.addEventListener("input", updateUserCard);
