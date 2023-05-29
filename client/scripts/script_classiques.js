window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    fetch('http://localhost:3000/routes/get-all-cards')
        .then(response => response.json())
        .then(allCards => insertCards(allCards))
        .catch(error => console.error('Error:', error));
});

function insertCards(cardDataArray) {
    console.log(cardDataArray);
    cardDataArray.forEach(cardData => createCard(cardData));
}

function createCard(cardData) {
    // Créer les éléments
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let infoBox = document.createElement('div');

    let divGameType = document.createElement('div');
    let gameType = document.createElement('p');
    let imgGameType = document.createElement('img');

    let sidesSections = document.createElement('div');
    let leftSection = chipToDiv(cardData.chipList);
    let rightSection = document.createElement('div');



    let divTotalChips = document.createElement('div');
    let totalChips = document.createElement('p');
    let imgTotalChips = document.createElement('img');

    let divPlayerCount = document.createElement('div');
    let playerCount = document.createElement('p');
    let imgPlayerCount = document.createElement('img');

    let divGameLength = document.createElement('div');
    let gameLength = document.createElement('p');
    let imgGameLength = document.createElement('img');

    // Attribuer les classes et id
    card.setAttribute('class', 'card');
    title.setAttribute('class', 'title_card');
    infoBox.setAttribute('class', 'info-box');
    divGameType.setAttribute('class', 'typepartie');
    gameType.setAttribute('class', 'game-type');
    imgGameType.setAttribute('class', 'icon');
    sidesSections.setAttribute('class', 'sidessections');
    leftSection.setAttribute('class', 'left-section');
    rightSection.setAttribute('class', 'right-section');
    divTotalChips.setAttribute('class', 'infos');
    divPlayerCount.setAttribute('class', 'infos');
    divGameLength.setAttribute('class', 'infos');
    imgTotalChips.setAttribute('class', 'icon');
    imgPlayerCount.setAttribute('class', 'icon');
    imgGameLength.setAttribute('class', 'icon');

    // Ajouter les données de la carte aux éléments créés
    title.textContent = cardData.title;
    gameType.textContent = cardData.gameType;
    imgGameType.setAttribute('src', 'images/Bet icons white.png');
    totalChips.textContent = cardData.totalChips;
    imgTotalChips.setAttribute('src', 'images/hands and gestures icons white.png');
    playerCount.textContent = cardData.playerCount;
    imgPlayerCount.setAttribute('src', 'images/group icons white.png');
    gameLength.textContent = cardData.gameLength;
    imgGameLength.setAttribute('src', 'images/watch icons white.png');


    // Assembler les éléments
    divGameType.appendChild(imgGameType);
    divGameType.appendChild(gameType);

    divTotalChips.appendChild(imgTotalChips);
    divTotalChips.appendChild(totalChips);

    divPlayerCount.appendChild(imgPlayerCount);
    divPlayerCount.appendChild(playerCount);

    divGameLength.appendChild(imgGameLength);
    divGameLength.appendChild(gameLength);

    rightSection.appendChild(divTotalChips);
    rightSection.appendChild(divPlayerCount);
    rightSection.appendChild(divGameLength);

    sidesSections.appendChild(leftSection);
    sidesSections.appendChild(rightSection);

    infoBox.appendChild(divGameType);
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
        divChip.setAttribute('class', 'infos');

        let imgChipIcon = document.createElement('img');
        imgChipIcon.setAttribute('class', 'icon');
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

/*
0:
    chipList:
        0: {id: 1, color: 'noir', count: 10, value: 100, compositionId: 1}
        1:{id: 2, color: 'bleu', count: 20, value: 50, compositionId: 1}

    gameLength: "courte"
    gameType:"holdEm"
    id: 1
    playerCount: 5
    title: "Composition 1"
    totalChips: ??
 */