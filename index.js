import { getBishopsMoves } from "./moves/Bishop.js"
import { getKingsMoves } from "./moves/King.js"
import { getKnightsMoves } from "./moves/Knight.js"
import { getPawnsMoves } from "./moves/Pawn.js"
import { getQueensMoves } from "./moves/Queen.js"
import { getRookMoves } from "./moves/Rook.js"
import { pieces, createElement, findPiece, getCoordinates, x_indexes} from "./utiles.js"





const board = document.getElementById("board")
let moveOf = "white"
let move = []

board.addEventListener("click", e => {
    const coordinates = e.target["id"]

    // FIRST CLICK
    if(coordinates.length === 3 && !move.length ) {

        const pos = coordinates.slice(1,3)
        const piece = findPiece(pos)
           
        if(piece.color === moveOf) {
            move.push(piece)
            // console.log(move[0].available_moves)
            renderBoard()
        }else {
            move = []
        }
    // SECOND CLICK
    }else if(coordinates.length == 2) {
        if(move.length === 1 && move[0].available_moves.includes(coordinates)) {
            move.push(coordinates)

            pieces.forEach(piece => {
                if(piece.position === move[0].position) {
                    piece.position = move[1]
                }   
            })

            move = []
            renderBoard()
            moveOf = moveOf === "white" ? "black": "white"
        }else {
            move = []
        }
    }else {
        move = []
    }
})


function renderBoard() {
    board.innerHTML = ''
    let isOdd = true
    let y_index = 8
    let x_index = 0

    // Board rendering and pieces setting
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

            let coordinates = getCoordinates(index)
            squareNode.setAttribute("square_id", coordinates)

            pieces.forEach(piece => {
                if(coordinates === piece.position) {
                    squareNode.setAttribute("piece_color", piece.color)
                    squareNode.style.backgroundImage = `url(${piece.img})`
                    squareNode.style.backgroundSize = "contain"
                    squareNode.style.cursor = "pointer"
                    squareNode.style.backgroundRepeat = "no-repeat"
                    coordinates = piece.name !== "Knight" ? piece.name[0] + coordinates : "N" + coordinates
                }
            })
            
            squareNode.setAttribute("id", coordinates)
            

            if(move[0]?.available_moves.includes(coordinates)) {
                const circle = createElement("div", 'available_move_mark')
                squareNode.appendChild(circle)
            }

            squareNode.setAttribute('color', isOdd ? "white":"black")

        board.appendChild(squareNode)

        if((index + 1) % 8 !== 0) {
            isOdd = !isOdd
        }
    })

    setAvailableMoves()
}

const setAvailableMoves = () => {
    pieces.forEach(piece => {
        switch(piece.name) {
            case "Rook":
                piece.available_moves = getRookMoves(piece.position)
                break
            case "Pawn":
                piece.available_moves = getPawnsMoves(piece.position, piece.color)
                break
            case "Knight":
                piece.available_moves = getKnightsMoves(piece.position)
                break
            case "Bishop":
                piece.available_moves = getBishopsMoves(piece.position, piece.color)
                break
            case "Queen":
                piece.available_moves = getQueensMoves(piece.position)
                break
            case "King":
                piece.available_moves = getKingsMoves(piece.position)
                break
            default:
                piece.available_moves = []
        }
    })
}


renderBoard()