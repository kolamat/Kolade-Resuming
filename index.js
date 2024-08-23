const h1 = document.querySelector("h1");
h1.style.display = "flex";
h1.style.fontSize = "50px";

const div = document.getElementById("div");
div.style.display = "grid";
div.style.justifyContent = "center";
div.style.placeItems = "center";

const image = document.getElementById("image");
image.style.borderRadius = "10px";

const about = document.getElementById("about");
about.style.fontSize = "15px";
about.style.margin = "10px 0px";

const primary = document.createElement("li");
primary.textContent = "Ago-Egba Nursery and Primary School";
document.getElementById("educations").appendChild(primary);

const juniorSecondary = document.createElement("li");
juniorSecondary.textContent = "Denton Junior Grammar School";
document.getElementById("educations").appendChild(juniorSecondary);

const seniorSecondary = document.createElement("li");
seniorSecondary.textContent = "Lagos-City Senior Secondary School";
document.getElementById("educations").appendChild(seniorSecondary);

const higherEduation = document.createElement("li");
higherEduation.textContent =
  "Ordinary national diplomal (OND) 1, computer Engineer - Yaba College of Technology (2023-2025)";
document.getElementById("educations").appendChild(higherEduation);

//HOBBIES_SECTION
const hobbies = document.getElementById("hobbies");
hobbies.style.display = "grid";
hobbies.style.justifyContent = "center";

//CONTACT_SECTION
const contact = document.getElementById("contact");
contact.style.display = "grid";
contact.style.justifyContent = "center";
