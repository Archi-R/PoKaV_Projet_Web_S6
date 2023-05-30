// Récupérer le bouton et la span
const bouton = document.querySelector('button[type="submit"]');
const spanSuccess = document.querySelector('.success');

// Ajouter un gestionnaire d'événement au clic sur le bouton
bouton.addEventListener('click', (event) => {
  // Empêcher le comportement par défaut du bouton
  event.preventDefault();
  // Récupérer les valeurs des champs de formulaire
  // On récupère le nom de la composition dans un champ input
  const title = document.querySelector('input[name="nom_cave"]').value;
  // On récupère le type de jeu dans un champ select
  const gameType = document.querySelector('select[name="type_jeu"]').value;
  // On récupère le nombre de joueurs dans un champ input
  const playerCount = document.querySelector('input[name="nb_joueurs"]').value;
  // On récupère la durée de la partie dans un champ select
  const gameLength = document.querySelector('select[name="game_length"]').value;

  // On récupère les valeurs des champs de jetons
  // On récupère les infos du premier jeton
  const chip_white = {
    color: document.querySelector('input[name="jetons_blancs"]').id,
    count: document.querySelector('input[name="jetons_blancs"]').value,
    value: document.querySelector('input[name="valeur_blancs"]').value,
  };
  const chip_red = {
    color: document.querySelector('input[name="jetons_rouges"]').id,
    count: document.querySelector('input[name="jetons_rouges"]').value,
    value: document.querySelector('input[name="valeur_rouges"]').value,
  };
  const chip_green = {
    color: document.querySelector('input[name="jetons_verts"]').id,
    count: document.querySelector('input[name="jetons_verts"]').value,
    value: document.querySelector('input[name="valeur_verts"]').value,
  };
  const chip_blue = {
    color: document.querySelector('input[name="jetons_bleus"]').id,
    count: document.querySelector('input[name="jetons_bleus"]').value,
    value: document.querySelector('input[name="valeur_bleus"]').value,
  };
  const chip_black = {
    color: document.querySelector('input[name="jetons_noirs"]').id,
    count: document.querySelector('input[name="jetons_noirs"]').value,
    value: document.querySelector('input[name="valeur_noirs"]').value,
  };
  const chip_orange = {
    color: document.querySelector('input[name="jetons_oranges"]').id,
    count: document.querySelector('input[name="jetons_oranges"]').value,
    value: document.querySelector('input[name="valeur_oranges"]').value,
  };
  const chip_grey = {
    color: document.querySelector('input[name="jetons_gris"]').id,
    count: document.querySelector('input[name="jetons_gris"]').value,
    value: document.querySelector('input[name="valeur_gris"]').value,
  };
  const chip_yellow = {
    color: document.querySelector('input[name="jetons_jaunes"]').id,
    count: document.querySelector('input[name="jetons_jaunes"]').value,
    value: document.querySelector('input[name="valeur_jaunes"]').value,
  };
  const chip_purple = {
    color: document.querySelector('input[name="jetons_violets"]').id,
    count: document.querySelector('input[name="jetons_violets"]').value,
    value: document.querySelector('input[name="valeur_violets"]').value,
  };
  const chips = [chip_white, chip_red, chip_green, chip_blue, chip_black, chip_orange, chip_grey, chip_yellow, chip_purple];

  const compoData = {
    title: title,
    gameType: gameType,
    playerCount: playerCount,
    gameLength: gameLength,
    chipList: chips,
  }

const compoDataJson = JSON.stringify(compoData);
console.log(compoDataJson);

  try {
    // Envoyer les données au serveur
    fetch('http://localhost:3000/routes/create-card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: compoDataJson,
    })
    .then((response) => response.json())
      .then((data) => {console.log('Success:', data);})
      .catch((error) => {console.error('Error:', error);
    });

    // Afficher la span avec la classe "success"
    spanSuccess.style.display = 'flex';

  }catch (error) {
    console.log(error);
  }
});
