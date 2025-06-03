let duel = document.querySelector("#duelForm");

console.log(duel);

let duelContent = document.querySelector(".duel-content");

console.log(duelContent);

duel.addEventListener("submit", function (event) {
  event.preventDefault();
  // sorcier1
  let sorcier1 = document.querySelector("#name1").value;

  let sorcier1Value = sorcier1.value;

  sorcier1Value = document.createElement("p", {
    class: "sorcier1",
  });

  sorcier1Value.innerHTML = sorcier1;

  duelContent.insertAdjacentElement("afterbegin", sorcier1Value);
  console.log(sorcier1);

  // maison1
  let maison1 = document.querySelector("#maison1").value;

  let maison1Value = maison1.value;

  maison1Value = document.createElement("p", {
    class: "sorcier1",
  });

  maison1Value.innerHTML = maison1;

  duelContent.insertAdjacentElement("beforeend", maison1Value);
  console.log(maison1);

  // sorcier2
  let sorcier2 = document.querySelector("#name2").value;

  let sorcier2Value = sorcier2.value;

  sorcier2Value = document.createElement("p", {
    class: "sorcier2",
  });

  sorcier2Value.innerHTML = sorcier2;

  duelContent.insertAdjacentElement("beforeend", sorcier2Value);
  console.log(sorcier2);

  //maison2
  let maison2 = document.querySelector("#maison2").value;

  let maison2Value = maison2.value;

  maison2Value = document.createElement("p", {
    class: "sorcier2",
  });

  maison2Value.innerHTML = maison2;

  duelContent.insertAdjacentElement("beforeend", maison2Value);
  console.log(maison2);

  // Afficher le duel
  let PV1 = 200; // Vie du sorcier 1 à 200 points de vie
  let PV2 = 200; //vie du sorcier 2
  let tours = 0; // Compteur de tours

  console.log(PV1, PV2);
  // degats = attaque

  while (PV2 > 0 && PV1 > 0) {
    tours++;

    console.log(tours);

    // Attaque du sorcier 1
    let attaque = Math.floor(Math.random() * 10) + 5; // Attaque du sorcier 1 entre 10 et 15

    PV2 -= attaque;

    // Afficher les dégâts et les points de vie restants après l'attaque du sorcier 1
    let historique = document.querySelector(".historique");

    if (PV2 <= 0) {
      PV2 = 0;
    }
    historique.insertAdjacentHTML(
      "beforeend",
      `<p>Duel ${tours} : ${sorcier1} attaque ${attaque} à ${sorcier2}. Il reste ${PV2} points de vie à ${sorcier2}.</p>`
    );

    console.log(
      `Duel : ${tours} Sorcier 1 attaque ${attaque}, PV restants: ${PV2}`
    );

    if (PV2 <= 0) {
      PV2 = 0;

      historique.insertAdjacentHTML(
        "beforeend",
        `<p>${sorcier2} a perdu en ${tours} duels !</p>`
      );
      console.log("Sorcier 2 a perdu !");
      break;
    }

    // Attaque du sorcier 2
    tours++;
    console.log(tours);

    attaque = Math.floor(Math.random() * 10) + 5; // Nouvelle attaque pour le sorcier 2

    PV1 -= attaque;

    // Afficher les dégâts et les points de vie restants
    if (PV1 <= 0) {
      PV1 = 0;
    }
    historique.insertAdjacentHTML(
      "beforeend",
      `<p>Duel ${tours} : ${sorcier2} attaque ${attaque} à ${sorcier1}. Il reste ${PV1} points de vie à ${sorcier1}</p>`
    );

    console.log(
      `Duel : ${tours} Sorcier 2 attaque ${attaque}, PV restants: ${PV1}`
    );

    if (PV1 <= 0) {
      PV1 = 0;

      historique.insertAdjacentHTML(
        "beforeend",
        `<p>${sorcier1} a perdu en ${tours} duels !</p>`
      );
      console.log("Sorcier 1 a perdu !");
      break;
    }
  }
});
// faire une condition while pour gérer le duel tant que le sorcier n'a pas zéro de vie
//une seule fois à 50% de vie le sorcier peut reprendre 200 PV
// si c'est le cas afficher cette ligne en vert ajouter une classe
// à la fin le sorcier ne peut pas avoir moins de 0 PV
