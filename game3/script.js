const grid = document.querySelector('.grid')

const block = document.createElement('div')

const blockWidth = 100
const blockHeight = 20
const startForUser = [230, 20]
let currentPosition = startForUser
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
    new Block(10, 530),
    new Block(120, 530),
    new Block(230, 530),
    new Block(340, 530),
    new Block(450, 530),
    new Block(560, 530),
    new Block(670, 530),
    new Block(780, 530),
    new Block(10, 490),
    new Block(120, 490),
    new Block(230, 490),
    new Block(340, 490),
    new Block(450, 490),
    new Block(560, 490),
    new Block(670, 490),
    new Block(780, 490),
    new Block(10, 456),
    new Block(120, 456),
    new Block(230, 456),
    new Block(340, 456),
    new Block(450, 456),
    new Block(560, 456),
    new Block(670, 456),
    new Block(780, 456),
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
addBlock();
//add a user 
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
user.style.left = currentPosition[0] + 'px'
user.style.bottom = currentPosition[1] + 'px'
    // move user