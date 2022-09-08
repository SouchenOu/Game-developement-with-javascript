const cardArray = [

    {
        name: 'fries',
        img: 'images/fries.jpeg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpeg',
    },
    {
        name: 'sandwich',
        img: 'images/doger.jpeg',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpeg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpeg',
    },
    {
        name: 'milk',
        img: 'images/milk.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
creatBoard()

function creatBoard() {
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('img')
        element.setAttribute('src', 'images/floor3.jpeg')
        element.setAttribute('data-id', i)
        gridDisplay.appendChild(element)
    }
}