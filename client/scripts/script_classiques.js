window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetch('http://localhost:3000/get-card')
        .then(response => response.json())
        .then(cardData => createCard(cardData))
        .catch(error => console.error('Error:', error));
});

function createCard(cardData) {
    // Créer les éléments
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let infoBox = document.createElement('div');
    let typePartie = document.createElement('div');
    let gameType = document.createElement('p');
    let sidesSections = document.createElement('div');
    let leftSection = document.createElement('div');
    let rightSection = document.createElement('div');
    let chipList = document.createElement('ul');

    cardData.chipList.forEach(chip => {
        let listItem = document.createElement('li');
        listItem.textContent = `${chip.color} ${chip.count} (${chip.value}$)`;
        chipList.appendChild(listItem);
    });

    let totalChips = document.createElement('p');
    let playerCount = document.createElement('p');
    let gameLength = document.createElement('p');

    // Attribuer les classes et id
    card.setAttribute('class', 'card');
    title.setAttribute('id', 'title_card');
    infoBox.setAttribute('class', 'info-box');
    typePartie.setAttribute('class', 'typepartie');
    gameType.setAttribute('id', 'game-type');
    sidesSections.setAttribute('class', 'sidessections');
    leftSection.setAttribute('class', 'left-section');
    rightSection.setAttribute('class', 'right-section');
    chipList.setAttribute('id', 'chip-list');
    totalChips.setAttribute('id', 'total-chips');
    playerCount.setAttribute('id', 'player-count');
    gameLength.setAttribute('id', 'game-length');

    // Ajouter les données de la carte aux éléments créés
    title.textContent = cardData.title;
    gameType.textContent = cardData.gameType;
    totalChips.textContent = `Total chips: ${cardData.totalChips}`;
    playerCount.textContent = `Player count: ${cardData.playerCount}`;
    gameLength.textContent = `Game length: ${cardData.gameLength}`;

    // Assembler les éléments
    typePartie.appendChild(gameType);
    leftSection.appendChild(chipList);
    rightSection.appendChild(totalChips);
    rightSection.appendChild(playerCount);
    rightSection.appendChild(gameLength);
    sidesSections.appendChild(leftSection);
    sidesSections.appendChild(rightSection);
    infoBox.appendChild(typePartie);
    infoBox.appendChild(sidesSections);
    card.appendChild(title);
    card.appendChild(infoBox);
    // Insérer la carte dans le document
    document.getElementById('cards-container').appendChild(card);
}

function insertCards(cardDataArray) {
    cardDataArray.forEach(cardData => createCard(cardData));
}

console.log('script_classiques.js loaded')