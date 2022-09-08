const cardArray = [

    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'sandwich',
        img: 'images/doger.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milk',
        img: 'images/milk.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milk',
        img: 'images/milk.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/burger.png',
    },
    {
        name: 'sandwich',
        img: 'images/doger.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const elementchoose = []
creatBoard()

function creatBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const element = document.createElement('img')
        element.setAttribute('src', 'images/floor3.png')
        element.setAttribute('data-id', i)
        element.addEventListener('click', flipElement)
        gridDisplay.appendChild(element)

    }
}

function check() {
    if (elementchoose[0] == elementchoose[1])
        alert('You found a match')
}

function flipElement() {
    const elementId = this.getAttribute('data-id')
    elementchoose.push(cardArray[elementId].name)
    this.setAttribute('src', cardArray[elementId].img)
    if (elementchoose.length == 2) {
        setTimeout(check, 500)
    }

}