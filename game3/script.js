const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')

const block = document.createElement('div')

const blockWidth = 100
const blockHeight = 20
const boardWidth = 900
const boardHight = 600
const ballDiameter = 20
const startForUser = [300, 10]
const ballStarted = [300, 40]

let currentPosition = startForUser
let currentBall = ballStarted
let timerId
let xDirection = 2
let yDirection = 2
    //create a block 
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
// all my blocks
const blocks = [
    new Block(10, 560),
    new Block(120, 560),
    new Block(230, 560),
    new Block(340, 560),
    new Block(450, 560),
    new Block(560, 560),
    new Block(670, 560),
    new Block(780, 560),
    new Block(10, 520),
    new Block(120, 520),
    new Block(230, 520),
    new Block(340, 520),
    new Block(450, 520),
    new Block(560, 520),
    new Block(670, 520),
    new Block(780, 520),
    new Block(10, 476),
    new Block(120, 476),
    new Block(230, 476),
    new Block(340, 476),
    new Block(450, 476),
    new Block(560, 476),
    new Block(670, 476),
    new Block(780, 476),
    //new Block(10.270)
    // new Block(10.270)
    // new Block(10.270)
    //new Block(10.270)
]

function addBlock() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}
addBlock()
    /*************************** */
    //add a user 
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)



drowUser()

//drow user
function drowUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

// move user
function userMove(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drowUser()
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10
                drowUser()
            }
            break;

    }

}

document.addEventListener('keydown', userMove)

/**************************** Add ball */
const ball = document.createElement('div')
ball.classList.add('ball')


function drowBall() {
    ball.style.left = 300 + 'px'
    ball.style.bottom = currentBall[1] + 'px'
}
drowBall()

grid.appendChild(ball);


// move ball
function moveBall() {
    currentBall[0] += xDirection
    currentBall[1] += yDirection
    drowBall()
    check()
}
timerId = setInterval(moveBall, 30)

function check() {
    if (currentBall[0] >= (boardWidth - ballDiameter) || currentBall[1] >= (boardHight - ballDiameter) || currentBall[0] === 0) {
        changeDirection()
    }
    if (currentBall[1] === 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'You lose'
    }
}

function changeDirection() {
    if (xDirection == 2 && yDirection == 2) {
        yDirection = -2
    }
    if (xDirection === 2 && yDirection === -2)
        xDirection = -2
}