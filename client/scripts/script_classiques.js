window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetch('http://localhost:3000/routes/get-all-cards')
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
    let chipsDiv = chipToDiv(cardData.chipList);
    let totalChips = document.createElement('p');
    let playerCount = document.createElement('p');
    let gameLength = document.createElement('p');

    // Attribuer les classes et id
    card.setAttribute('class', 'card');
    title.setAttribute('class', 'title_card');
    infoBox.setAttribute('class', 'info-box');
    typePartie.setAttribute('class', 'typepartie');
    gameType.setAttribute('class', 'game-type');
    sidesSections.setAttribute('class', 'sidessections');
    leftSection.setAttribute('class', 'left-section');
    rightSection.setAttribute('class', 'right-section');
    chipsDiv.setAttribute('class', 'chip-list');
    totalChips.setAttribute('class', 'total-chips');
    playerCount.setAttribute('class', 'player-count');
    gameLength.setAttribute('class', 'game-length');

    // Ajouter les données de la carte aux éléments créés
    title.textContent = cardData.title;
    gameType.textContent = cardData.gameType;
    totalChips.textContent = `Total chips: ${cardData.totalChips}`;
    playerCount.textContent = `Player count: ${cardData.playerCount}`;
    gameLength.textContent = `Game length: ${cardData.gameLength}`;

    // Assembler les éléments
    typePartie.appendChild(gameType);
    leftSection.appendChild(chipsDiv);
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

function chipToDiv(chipList) {
    let chipListDiv = document.createElement('div');
    chipListDiv.setAttribute('class', 'chip-list');
    chipList.forEach(chip => {
        let divChip = document.createElement('div');
        divChip.setAttribute('class', 'chip-infos');

        let imgChipIcon = document.createElement('img');
        imgChipIcon.setAttribute('class', 'chip-icon');
        imgChipIcon.setAttribute('src', colorToIconURL(chip.color));

        let chipInfo = document.createElement('p');
        chipInfo.textContent = ` ${chip.count} (${chip.value}$)`;

        divChip.appendChild(imgChipIcon);
        divChip.appendChild(chipInfo);

        chipListDiv.appendChild(divChip);
    });
    return chipListDiv;
}

function colorToIconURL(color) {
    let iconURL = "";
    switch (color) {
        case 'rouge': iconURL = "images/poker-chip icons red.png"; break;
        case 'bleu': iconURL = "images/poker-chip icons blue.png"; break;
        case 'vert': iconURL = "images/poker-chip icons green.png"; break;
        case 'noir': iconURL = "images/poker-chip icons.png"; break;
        case 'blanc': iconURL = "images/poker-chip icons white.png"; break;
        case 'jaune': iconURL = "images/poker-chip icons yellow.png"; break;
        case 'violet': iconURL = "images/poker-chip icons purple.png"; break;
        case 'gris': iconURL = "images/poker-chip icons grey.png"; break;
        case 'orange': iconURL = "images/poker-chip icons orange.png"; break;
    }
    return iconURL;
}

function insertCards(cardDataArray) {
    cardDataArray.forEach(cardData => createCard(cardData));
}

console.log('script_classiques.js loaded')