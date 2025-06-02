let duel = document.querySelector("#duelForm");

console.log(duel);

let duelContent = document.querySelector(".duel-content");

console.log(duelContent);

duel.addEventListener("submit", function (event) {
  event.preventDefault();
  // sorcier1
  let sorcier1 = document.querySelector("#name1").value;

  let sorcier1Value = sorcier1.value;

  sorcier1Value = document.createElement("p");

  sorcier1Value.innerHTML = sorcier1;

  duelContent.insertAdjacentElement("beforeend", sorcier1Value);
  console.log(sorcier1);

  // maison1
  let maison1 = document.querySelector("#maison1").value;

  let maison1Value = maison1.value;

  maison1Value = document.createElement("p");

  maison1Value.innerHTML = maison1;

  duelContent.insertAdjacentElement("beforeend", maison1Value);
  console.log(maison1);

  // sorcier2
  let sorcier2 = document.querySelector("#name2").value;

  let sorcier2Value = sorcier2.value;

  sorcier2Value = document.createElement("p");

  sorcier2Value.innerHTML = sorcier2;

  duelContent.insertAdjacentElement("beforeend", sorcier2Value);
  console.log(sorcier2);

  //maison2
  let maison2 = document.querySelector("#maison2").value;

  let maison2Value = maison2.value;

  maison2Value = document.createElement("p");

  maison2Value.innerHTML = maison2;

  duelContent.insertAdjacentElement("beforeend", maison2Value);
  console.log(maison2);
});
