let form = document.querySelector("#profileForm");

let div = document.querySelector(".content");

console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  div.innerHTML = ""; // Clear the content div before adding new content

  let name = document.querySelector("#name").value;

  let nameValue = name.value;

  name.value = "";

  nameValue = document.createElement("p");

  nameValue.innerHTML = name;
  console.log(nameValue);

  div.insertAdjacentElement("beforeend", nameValue);
  // div.append(nameValue); idem que insertAdjacentElement

  console.log(name);

  let firstname = document.querySelector("#firstname").value;

  let firstnameValue = firstname.value;

  firstnameValue = document.createElement("p");
  firstnameValue.innerHTML = firstname;

  div.insertAdjacentElement("beforeend", firstnameValue);
  console.log(firstname);
  console.log(firstnameValue);

  let age = document.querySelector("#age").value;
  let ageValue = age.value;

  ageValue = document.createElement("p");
  ageValue.innerHTML = age;

  div.insertAdjacentElement("beforeend", ageValue);
  console.log(age);

  let sexe = document.querySelector("input[name='radio']:checked").value;

  let sexeValue = sexe.value;

  sexeValue = document.createElement("p");
  sexeValue.innerHTML = sexe;

  div.insertAdjacentElement("beforeend", sexeValue);
  console.log(sexe);

  let profession = document.querySelector("#profession").value;

  let professionValue = profession.value;

  professionValue = document.createElement("p");
  professionValue.innerHTML = profession;

  div.insertAdjacentElement("beforeend", professionValue);
  console.log(professionValue);
  console.log(profession);

  let region = document.querySelector("#region").value;

  let regionValue = region.value;

  regionValue = document.createElement("p");
  regionValue.innerHTML = region;

  div.insertAdjacentElement("beforeend", regionValue);
  console.log(region);
  console.log(regionValue);

  // hobbies
  let hobbies = document.querySelectorAll("input[name='hobbies']:checked");

  // créer un tableau vide pour stocker les valeurs des hobbies
  let hobbiesValue = [];

  // parcourir les hobbies sélectionnés et ajouter leurs valeurs au tableau push
  hobbies.forEach((hobby) => {
    hobbiesValue.push(hobby.value);
  });

  console.log(hobbiesValue);

  // créer une nouvelle variable pour afficher les hobbies et non le tableau
  let hobbyValue = document.createElement("p");
  hobbyValue.innerHTML = hobbiesValue.join(", ");

  div.insertAdjacentElement("beforeend", hobbyValue);

  console.log(hobbyValue);
  console.log(hobbiesValue);
  console.log(hobbies);

  // créer un lien cliquable pour le profil LinkedIn
  let linkedin = document.querySelector("#linkedin").value;
  let linkedinValue = linkedin.value;

  linkedinValue = document.createElement("a");
  linkedinValue.href = linkedin;
  linkedinValue.innerHTML = "LinkedIn Profile";
  linkedinValue.target = "_blank";

  div.insertAdjacentElement("beforeend", linkedinValue);
  console.log(linkedin);
  console.log(linkedinValue);
});
