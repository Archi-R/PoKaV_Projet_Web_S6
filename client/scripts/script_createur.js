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

  console.log(title, gameType, playerCount, gameLength);

  // On récupère les valeurs des champs de jetons
  // On récupère les champs de jetons dans un tableau
  




  // Afficher la span avec la classe "success"
  spanSuccess.style.display = 'flex';
});
