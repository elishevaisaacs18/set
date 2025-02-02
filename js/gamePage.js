//constructor of a Card
function Card(color, shapeNum, shading, shape, imageSrc) {
    this.color = color;
    this.shapeNum = shapeNum;
    this.shading = shading;
    this.shape = shape;
    this.imageSrc = imageSrc;
}

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

const COL_SIZE = 4;
const BOARD_SIZE = 12;
let setCounter = 0;
let board = [];


const getCurrUser = () => {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        let user = JSON.parse(localStorage.getItem(key));
        if(user.conected === true){
            return user;
        }
    }
}

document.getElementById("user-greeting").textContent = `Hello ${getCurrUser().userName}`;

const logOut = () =>{
    let user = getCurrUser();
    user.conected = false;
    localStorage.setItem(user.userName , JSON.stringify(user));
}

document.getElementById("log-out").addEventListener("click", logOut);

let timerInterval;
let totalSeconds = 0;

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    totalSeconds++;
}

function startTimer() {
    stopTimer();
    timerInterval = setInterval(updateTimer, 1000); // Update every 1 second (1000 milliseconds)
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = '0:00'; // Reset the displayed timer
}

/* function to display a card at a certian place. gets a card and a place on the board by 
passing the row and the col starting with 0. */
const displayCard = (card, row, col) => {
    for (let i = 0; i < card.shapeNum; i++) {
        const img = document.createElement('img');
        img.src = card.imageSrc;
        document.getElementsByClassName("cards-on-board")[row * COL_SIZE + col].appendChild(img);
    }
}

const clonedCardDeck = cardDeck.map(card => new Card(card.color, card.shapeNum, card.shading, card.shape, card.imageSrc));

const startGame = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
        //! change to const 
        let currIndex = Math.floor(Math.random() * clonedCardDeck.length);
        displayCard(clonedCardDeck[currIndex], Math.floor(i / COL_SIZE), i % COL_SIZE);
        board[i] = clonedCardDeck[currIndex];
        clonedCardDeck.splice(currIndex, 1);
    }
}

//func that finds the three chosen cards and checks if they make a valid set
function checkSet(setArr) {
    const firstCard = board[setArr[0].cellIndex + (setArr[0].parentNode.rowIndex) * COL_SIZE];
    const secondCard = board[setArr[1].cellIndex + (setArr[1].parentNode.rowIndex) * COL_SIZE];
    const thirdCard = board[setArr[2].cellIndex + (setArr[2].parentNode.rowIndex) * COL_SIZE];

    const attributes = ['color', 'shapeNum', 'shading', 'shape'];
    let isValidSet = true;

    for (const attribute of attributes) {
        const isSameOrDifferent = (first, second, third) =>
            (first[attribute] === second[attribute] && second[attribute] === third[attribute]) ||
            (first[attribute] !== second[attribute] && second[attribute] !== third[attribute] && third[attribute] !== first[attribute]);

        if (!isSameOrDifferent(firstCard, secondCard, thirdCard)) {
            isValidSet = false;
            break;
        }
    }

    return isValidSet;
}

const changeAlertMessage = (className, message) => {
    const alertMessage = document.getElementById("alert-message");
    alertMessage.className = '';
    alertMessage.classList.add(className);
    alertMessage.textContent = message;
}

const deleteSet = setArr => {
    Array.from(setArr).forEach((tdCard) => {
        while (tdCard.firstChild) {
            tdCard.removeChild(tdCard.firstChild);
        }
    });
}

const replaceSet = setArr => {
    if (clonedCardDeck.length > 0) {
        for (let i = 0; i < setArr.length; i++) {
            let currIndex = Math.floor(Math.random() * clonedCardDeck.length);
            displayCard(clonedCardDeck[currIndex], setArr[i].parentNode.rowIndex, setArr[i].cellIndex);
            board[setArr[i].cellIndex + (setArr[i].parentNode.rowIndex) * COL_SIZE] = clonedCardDeck[currIndex];
            clonedCardDeck.splice(currIndex, 1);
        }
    }
}

const tds = document.getElementsByClassName("cards-on-board");
for (let i = 0; i < BOARD_SIZE; i++) {
    tds[i].addEventListener('click', chooseCard);
}

function chooseCard(event) {
    const td = event.currentTarget; // This is the clicked <td> element
    if (td.classList.contains('selected')) {
        td.classList.remove('selected');
    } else {
        td.classList.add('selected');
        const selected = document.getElementsByClassName('selected');
        if (selected.length === 3) {
            if (checkSet(selected)) {
                document.getElementById('set-counter').textContent = ++setCounter;
                changeAlertMessage("set", "You found a set!");
                deleteSet(selected);
                replaceSet(selected);
                while (!checkBoardForSet() && clonedCardDeck.length > 3) {
                    for (let i = 0; i < selected.length; i++) {
                        clonedCardDeck.push(board[selected[i].cellIndex + (selected[i].parentNode.rowIndex) * COL_SIZE]);
                    }
                    deleteSet(selected);
                    replaceSet(selected);
                }
                if (clonedCardDeck.length === 0 && !checkBoardForSet()) {
                    alert("Game Over");
                }
            } else {
                changeAlertMessage("not-set", "This is not a set");
            }
            Array.from(selected).forEach((tdCard) => {
                tdCard.classList.remove('selected');
            });
        }

    }
}

const checkBoardForSet = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            for (let k = 0; k < BOARD_SIZE; k++) {
                const table = document.getElementById('card-table');
                const card1 = table.rows[Math.floor(i / COL_SIZE)].cells[i % COL_SIZE];
                const card2 = table.rows[Math.floor(j / COL_SIZE)].cells[j % COL_SIZE];
                const card3 = table.rows[Math.floor(k / COL_SIZE)].cells[k % COL_SIZE];
                if (checkSet([card1, card2, card3]) && card1 !== card2 && card3 !== card2 && card1 !== card3) {
                    if (card1.firstChild === null || card2.firstChild === null || card3.firstChild === null) {
                        continue;
                    }

                    return true;
                }
            }

        }

    }

    return false;
}


startGame();