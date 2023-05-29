// Récupérer le bouton et la span
const bouton = document.querySelector('button[type="submit"]');
const spanSuccess = document.querySelector('.success');

// Ajouter un gestionnaire d'événement au clic sur le bouton
bouton.addEventListener('click', function() {
  // Afficher la span avec la classe "success"
  spanSuccess.style.display = 'inline';
});