//!press ctrl+f to search in this file //! to find all the comments. good luck! ;)
//!ctrl+shift+i
//!array of core deck of Cards 
//!I think you coulv'e created the deck of cards with a function using for. 
//!try to change if you have time if not then it's ok as well. (as long as it works ;))
//!dont forget to remove comments when done + delete unnessecary conole.log
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

//!I think this should be at the top of the file and below it the array
//!constructor of a Card
function Card(color, number, shading, shape, imageSrc) {
    this.color = color;
    this.number = number;//!is this number of shapes? maybe change the name? 
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
    console.log(clonedCardDeck);//!delete all console logs at the end
    for (let i = 0; i < 12; i++) {
        let currIndex = Math.floor(Math.random() * clonedCardDeck.length);
        displayCard(clonedCardDeck[currIndex], Math.floor(i / 4), i % 4);
        board[i] = clonedCardDeck[currIndex];
        clonedCardDeck.splice(currIndex, 1);
    }
}

//func that finds the three chosen cards and checks if they make a valid set
function checkSet() {
    const selected = document.getElementsByClassName('selected');
    const firstCard = board[selected[0].cellIndex + (selected[0].parentNode.rowIndex) * 4];
    const secondCard = board[selected[1].cellIndex + (selected[1].parentNode.rowIndex) * 4];
    const thirdCard = board[selected[2].cellIndex + (selected[2].parentNode.rowIndex) * 4];

    const attributes = ['color', 'number', 'shading', 'shape'];
    let isValidSet = true;

    for (const attribute of attributes) {
        const isSameOrDifferent = (first, second, third) =>
            (first[attribute] === second[attribute] && second[attribute] === third[attribute]) ||
            (first[attribute] !== second[attribute] && second[attribute] !== third[attribute] && third[attribute] !== first[attribute]);

        if (!isSameOrDifferent(firstCard, secondCard, thirdCard)) {
            isValidSet = false;
            console.log(`Invalid attribute: ${attribute}`);
            break;
        }
    }

    if (isValidSet) {
        console.log("set found");//!delete at the end
        // star icon
        //sets ++
        // un select
        Array.from(selected).forEach((tdCard) => {
            console.log("in foreach")
            while (tdCard.firstChild) {
                console.log("in while")
                tdCard.removeChild(tdCard.firstChild);
            }
        });

        Array.from(selected).forEach((tdCard) => {
            tdCard.classList.remove('selected');
        });
        //clear cards


    } else {
        console.log("no set found")
        //x icon
        //un select
        Array.from(selected).forEach((tdCard) => {
            tdCard.classList.remove('selected');
        });
    }
}
// what is the meaning of tds? 
const tds = document.getElementsByClassName("cards-on-board");
for (let i = 0; i < 12; i++) {
    tds[i].addEventListener('click', chooseCard);
}

function chooseCard(event) {
    const td = event.currentTarget; // This is the clicked <td> element
    if (td.classList.contains('selected')) {
        td.classList.remove('selected');
    } else {
        td.classList.add('selected');
        if (document.querySelectorAll('.selected').length === 3) {
            //!maybe here you can send the cards? 
            //!instead of selecting them again in the check set function?
            checkSet(); 
        }
    }
}

const resetCards = (cardsArr) => {

}

startGame();