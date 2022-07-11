import { createElement, getCoordinates, x_indexes} from "./utiles.js"


const board = document.getElementById("board")


function setup() {
    let isOdd = true
    let y_index = 8
    let x_index = 0

    Array.from(new Array(64)).forEach((square, index, array) => {
        const squareNode = createElement("div", `squareNode ${isOdd ? "odd":"even"}`)

            if((index + 1) === 1 || index % 8 === 0) { 
                const yIndex = createElement("span", "y-index", y_index)
                squareNode.append(yIndex)
                y_index -= 1
            }

            if(index >= 56) {
                const xIndex = createElement("span", "x-index", x_indexes[x_index])
                squareNode.append(xIndex)
                x_index += 1
            }

            squareNode.setAttribute("name", getCoordinates(index))

        board.appendChild(squareNode)

        if((index + 1) % 8 !== 0) {
            isOdd = !isOdd            
        }

        squareNode.addEventListener("click", (e) => console.log(e.target.getAttribute("name")))
    })

}


setup()