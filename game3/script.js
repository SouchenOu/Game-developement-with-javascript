const grid = document.querySelector('.grid')

const block = document.createElement('div')


function addBlock() {

    block.classList.add('block')
    block.style.left = '100px'
    block.style.bottom = '50px'
    grid.appendChild(block)
        //console.log(1)
}

addBlock();