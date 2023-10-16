//array of core deck of Cards 
const cardDeck = [
    new Card('green', 1, 'open', 'oval', "../images/oval_open_green.png"),
    new Card('green', 2, 'open', 'oval', "../images/oval_open_green.png"),
    new Card('green', 3, 'open', 'oval', "../images/oval_open_green.png"),
    new Card('green', 1, 'striped', 'oval', "../images/oval_striped_green.png"),
    new Card('green', 2, 'striped', 'oval', "../images/oval_striped_green.png"),
    new Card('green', 3, 'striped', 'oval', "../images/oval_striped_green.png"),
    new Card('green', 1, 'solid', 'oval', "../images/oval_solid_green.png"),
    new Card('green', 2, 'solid', 'oval', "../images/oval_solid_green.png"),
    new Card('green', 3, 'solid', 'oval', "../images/oval_solid_green.png"),
    new Card('green', 1, 'open', 'diamond', "../images/diamond_open_green.png"),
    new Card('green', 2, 'open', 'diamond', "../images/diamond_open_green.png"),
    new Card('green', 3, 'open', 'diamond', "../images/diamond_open_green.png"),
    new Card('green', 1, 'striped', 'diamond', "../images/diamond_striped_green.png"),
    new Card('green', 2, 'striped', 'diamond', "../images/diamond_striped_green.png"),
    new Card('green', 3, 'striped', 'diamond', "../images/diamond_striped_green.png"),
    new Card('green', 1, 'solid', 'diamond', "../images/diamond_solid_green.png"),
    new Card('green', 2, 'solid', 'diamond', "../images/diamond_solid_green.png"),
    new Card('green', 3, 'solid', 'diamond', "../images/diamond_solid_green.png"),
    new Card('green', 1, 'open', 'squiggle', "../images/squiggle_open_green.png"),
    new Card('green', 2, 'open', 'squiggle', "../images/squiggle_open_green.png"),
    new Card('green', 3, 'open', 'squiggle', "../images/squiggle_open_green.png"),
    new Card('green', 1, 'striped', 'squiggle', "../images/squiggle_striped_green.png"),
    new Card('green', 2, 'striped', 'squiggle', "../images/squiggle_striped_green.png"),
    new Card('green', 3, 'striped', 'squiggle', "../images/squiggle_striped_green.png"),
    new Card('green', 1, 'solid', 'squiggle', "../images/squiggle_solid_green.png"),
    new Card('green', 2, 'solid', 'squiggle', "../images/squiggle_solid_green.png"),
    new Card('green', 3, 'solid', 'squiggle', "../images/squiggle_solid_green.png"),
    new Card('purple', 3, 'open', 'oval', "../images/oval_open_blue.png"),
    new Card('purple', 2, 'open', 'oval', "../images/oval_open_blue.png"),
    new Card('purple', 1, 'open', 'oval', "../images/oval_open_blue.png"),
    new Card('purple', 1, 'striped', 'oval', "../images/oval_striped_blue.png"),
    new Card('purple', 2, 'striped', 'oval', "../images/oval_striped_blue.png"),
    new Card('purple', 3, 'striped', 'oval', "../images/oval_striped_blue.png"),
    new Card('purple', 1, 'solid', 'oval', "../images/oval_solid_blue.png"),
    new Card('purple', 2, 'solid', 'oval', "../images/oval_solid_blue.png"),
    new Card('purple', 3, 'solid', 'oval', "../images/oval_solid_blue.png"),
    new Card('purple', 1, 'open', 'diamond', "../images/diamond_open_blue.png"),
    new Card('purple', 2, 'open', 'diamond', "../images/diamond_open_blue.png"),
    new Card('purple', 3, 'open', 'diamond', "../images/diamond_open_blue.png"),
    new Card('purple', 1, 'striped', 'diamond', "../images/diamond_striped_blue.png"),
    new Card('purple', 2, 'striped', 'diamond', "../images/diamond_striped_blue.png"),
    new Card('purple', 3, 'striped', 'diamond', "../images/diamond_striped_blue.png"),
    new Card('purple', 1, 'solid', 'diamond', "../images/diamond_solid_blue.png"),
    new Card('purple', 2, 'solid', 'diamond', "../images/diamond_solid_blue.png"),
    new Card('purple', 3, 'solid', 'diamond', "../images/diamond_solid_blue.png"),
    new Card('purple', 1, 'open', 'squiggle', "../images/squiggle_open_blue.png"),
    new Card('purple', 2, 'open', 'squiggle', "../images/squiggle_open_blue.png"),
    new Card('purple', 3, 'open', 'squiggle', "../images/squiggle_open_blue.png"),
    new Card('purple', 1, 'striped', 'squiggle', "../images/squiggle_striped_blue.png"),
    new Card('purple', 2, 'striped', 'squiggle', "../images/squiggle_striped_blue.png"),
    new Card('purple', 3, 'striped', 'squiggle', "../images/squiggle_striped_blue.png"),
    new Card('purple', 1, 'solid', 'squiggle', "../images/squiggle_solid_blue.png"),
    new Card('purple', 2, 'solid', 'squiggle', "../images/squiggle_solid_blue.png"),
    new Card('purple', 3, 'solid', 'squiggle', "../images/squiggle_solid_blue.png"),
    new Card('red', 1, 'open', 'oval', "../images/oval_open_red.png"),
    new Card('red', 2, 'open', 'oval', "../images/oval_open_red.png"),
    new Card('red', 3, 'open', 'oval', "../images/oval_open_red.png"),
    new Card('red', 1, 'striped', 'oval', "../images/oval_striped_red.png"),
    new Card('red', 2, 'striped', 'oval', "../images/oval_striped_red.png"),
    new Card('red', 3, 'striped', 'oval', "../images/oval_striped_red.png"),
    new Card('red', 1, 'solid', 'oval', "../images/oval_solid_red.png"),
    new Card('red', 2, 'solid', 'oval', "../images/oval_solid_red.png"),
    new Card('red', 3, 'solid', 'oval', "../images/oval_solid_red.png"),
    new Card('red', 3, 'open', 'diamond', "../images/diamond_open_red.png"),
    new Card('red', 2, 'open', 'diamond', "../images/diamond_open_red.png"),
    new Card('red', 1, 'open', 'diamond', "../images/diamond_open_red.png"),
    new Card('red', 1, 'striped', 'diamond', "../images/diamond_striped_red.png"),
    new Card('red', 2, 'striped', 'diamond', "../images/diamond_striped_red.png"),
    new Card('red', 3, 'striped', 'diamond', "../images/diamond_striped_red.png"),
    new Card('red', 1, 'solid', 'diamond', "../images/diamond_solid_red.png"),
    new Card('red', 2, 'solid', 'diamond', "../images/diamond_solid_red.png"),
    new Card('red', 3, 'solid', 'diamond', "../images/diamond_solid_red.png"),
    new Card('red', 1, 'open', 'squiggle', "../images/squiggle_open_red.png"),
    new Card('red', 2, 'open', 'squiggle', "../images/squiggle_open_red.png"),
    new Card('red', 3, 'open', 'squiggle', "../images/squiggle_open_red.png"),
    new Card('red', 1, 'striped', 'squiggle', "../images/squiggle_striped_red.png"),
    new Card('red', 2, 'striped', 'squiggle', "../images/squiggle_striped_red.png"),
    new Card('red', 3, 'striped', 'squiggle', "../images/squiggle_striped_red.png"),
    new Card('red', 1, 'solid', 'squiggle', "../images/squiggle_solid_red.png"),
    new Card('red', 2, 'solid', 'squiggle', "../images/squiggle_solid_red.png"),
    new Card('red', 3, 'solid', 'squiggle', "../images/squiggle_solid_red.png")];

//constructor of a Card
function Card(color, number, shading, shape, imageSrc) {
    this.color = color;
    this.number = number;
    this.shading = shading;
    this.shape = shape;
    this.imageSrc = imageSrc;
}
/* function to display a card at a certian place. gets a card and a place on the board by passing the row and the col starting with 0. */
const displayCard = (card, row, col) => {
    for (let i = 0; i < card.number; i++) {
        const img = document.createElement('img');
        img.src = card.imageSrc;
        document.getElementsByClassName("cards-on-board")[row * 4 + col].appendChild(img);
    }
}

let board = [];

const startGame = () => {
    const clonedCardDeck = cardDeck.map(card => new Card(card.color, card.number, card.shading, card.shape, card.imageSrc));
    console.log(clonedCardDeck);   
    for (let i = 0; i < 12; i++) {
        let currIndex = Math.floor(Math.random() * clonedCardDeck.length);
        displayCard(clonedCardDeck[currIndex], Math.floor(i / 4), i % 4);   
        board[i] = clonedCardDeck[currIndex];
        clonedCardDeck.splice(currIndex, 1); 
    }
}

startGame();