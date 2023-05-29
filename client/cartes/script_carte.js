window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://localhost:3000/get-card')
        .then(response => response.json())
        .then(cardInfo => {
            // Remplir le titre
            document.getElementById('title').innerText = cardInfo.title;

            // Remplir le type de jeu
            document.getElementById('game-type').innerText = cardInfo.gameType;

            // Remplir la liste de jetons
            let chipListElement = document.getElementById('chip-list');
            chipListElement.innerHTML = ''; // Vider la liste existante
            cardInfo.chipList.forEach(chip => {
                let listItem = document.createElement('li');
                listItem.innerText = `${chip.color} ${chip.count} (${chip.value}$)`;
                chipListElement.appendChild(listItem);
            });

            // Remplir le nombre total de jetons
            document.getElementById('total-chips').innerText = `Total Chips: ${cardInfo.totalChips}`;

            // Remplir le nombre de joueurs
            document.getElementById('player-count').innerText = `Player Count: ${cardInfo.playerCount}`;

            // Remplir la durée du jeu
            document.getElementById('game-length').innerText = `Game Length: ${cardInfo.gameLength}`;
        })
        .catch(error => console.error('Error:', error));
});
