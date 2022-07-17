
export const pieces = [
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "a2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "b2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "c2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "d2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "e2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "f2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "g2",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-w.png",
        color: "white",
        position: "h2",
        isEaten:false,
        value: 1
    },
    {
        name: "Rook",
        img: "./media/pieces/rook-w.png",
        color: "white",
        position: "a1",
        isEaten:false,
        value: 5
    },
    {
        name: "Knight",
        img: "./media/pieces/knight-w.png",
        color: "white",
        position: "b1",
        isEaten:false,
        value: 3
    },
    {
        name: "Bishop",
        img: "./media/pieces/bishop-w.png",
        color: "white",
        position: "c1",
        isEaten:false,
        value: 3
    },
    {
        name: "Queen",
        img: "./media/pieces/queen-w.png",
        color: "white",
        position: "d1",
        isEaten:false,
        value: 9
    },
    {
        name: "King",
        img: "./media/pieces/king-w.png",
        color: "white",
        position: "e1",
        isEaten:false
    },
    {
        name: "Bishop",
        img: "./media/pieces/bishop-w.png",
        color: "white",
        position: "f1",
        isEaten:false,
        value: 3
    },
    {
        name: "Knight",
        img: "./media/pieces/knight-w.png",
        color: "white",
        position: "g1",
        isEaten:false,
        value: 3
    },
    {
        name: "Rook",
        img: "./media/pieces/rook-w.png",
        color: "white",
        position: "h1",
        isEaten:false,
        value: 5
    },

    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "a7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "b7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "c7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "d7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "e7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "f7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "g7",
        isEaten:false,
        value: 1
    },
    {
        name: "Pawn",
        img: "./media/pieces/pawn-b.png",
        color: "black",
        position: "h7",
        isEaten:false,
        value: 1
    },

    {
        name: "Rook",
        img: "./media/pieces/rook-b.png",
        color: "black",
        position: "a8",
        isEaten:false,
        value: 5
    },
    {
        name: "Knight",
        img: "./media/pieces/knight-b.png",
        color: "black",
        position: "b8",
        isEaten:false,
        value: 3
    },
    {
        name: "Bishop",
        img: "./media/pieces/bishop-b.png",
        color: "black",
        position: "c8",
        isEaten:false,
        value: 3
    },
    {
        name: "Queen",
        img: "./media/pieces/queen-b.png",
        color: "black",
        position: "d8",
        isEaten:false,
        value: 9
    },
    {
        name: "King",
        img: "./media/pieces/king-b.png",
        color: "black",
        position: "e8",
        isEaten:false
    },
    {
        name: "Bishop",
        img: "./media/pieces/bishop-b.png",
        color: "black",
        position: "f8",
        isEaten:false,
        value: 3
    },
    {
        name: "Knight",
        img: "./media/pieces/knight-b.png",
        color: "black",
        position: "g8",
        isEaten:false,
        value: 3
    },
    {
        name: "Rook",
        img: "./media/pieces/rook-b.png",
        color: "black",
        position: "h8",
        isEaten:false,
        value: 5
    },
]




export const createElement = (tag, className, content) => {
    const node = document.createElement(tag)
    if(className) node.className = className
    if(content) node.textContent = content
    return node
}

export const findPiece = pos => pieces.find(piece => piece.position === pos)



export const getXIndex = index => {
    const n = String(index / 8)
    let result = null

        if(Number.isInteger(Number(n))) {
            result = 0
        }else if(n.includes(".125")) {
            result = 1
        }else if(n.includes(".25")){
            result = 2
        }else if(n.includes(".375")){
            result = 3
        }else if(n.includes(".5")){
            result = 4
        }else if(n.includes(".625")){
            result = 5
        }else if(n.includes(".75")){
            result = 6
        }else if(n.includes(".875")){
            result = 7
        }

    return x_indexes[result]
}

export const getYIndex = index => Math.ceil(Math.abs(((index ) / 8) - 8))

export const getCoordinates = index => {
    const y_index = getYIndex(index)
    const x_index = getXIndex(index)

    return x_index + y_index
}

export const getRookMoves = coor => {
    const x_index = coor[0]
    const y_index = coor[1]

    const allSquares = document.querySelectorAll(".squareNode")
    let result = []
    
    allSquares.forEach(square => {
        const square_name = square["id"]
        if(square_name !== coor) {
            if(square_name[0] === x_index || square_name[1] === y_index) {
                result.push(square_name)
            }
        }
    })

    return result
}

export const getPawnsMoves = (coor, color) => {
    const x_index = coor[0]
    const y_index = coor[1]

    const allSquares = document.querySelectorAll(".squareNode")
    let result = []

    const isPositionInitial = color === "white" ? coor.includes("2"):coor.includes("7")

    allSquares.forEach(square => {
        const square_name = square["id"]
        
        if(color === "white") {
            if((square_name[1] === String(Number(y_index) + 1)) && (square_name[0] === x_index) || (isPositionInitial && square_name[1] === String(Number(y_index) + 2)) && ((square_name[0] === x_index) )) {
                result.push(square_name)
            }
        }else {
            if((square_name[1] === String(Number(y_index) - 1)) && (square_name[0] === x_index) || (isPositionInitial && square_name[1] === String(Number(y_index) - 2)) && ((square_name[0] === x_index) )) {
                result.push(square_name)
            }
        }
    })  

    return result
}


const isValid_knight = (coor, square_name, square_color) => {
    const x_index = coor[0] // b
    const y_index = Number(coor[1]) // 1

    let knight_y_indexes = [y_index + 1, y_index - 1].filter(item => item >= 1 && item <= 8)
    let knight_x_indexes = [x_indexes[x_indexes.indexOf(x_index) - 1], x_indexes[x_indexes.indexOf(x_index) + 1]].filter(item => item)
    
    const invalid_squares = []

    for(let i = 0; i < knight_x_indexes.length; i++) {
        for(let j = 0; j < knight_y_indexes.length; j++) {
            invalid_squares.push(knight_x_indexes[i] + knight_y_indexes[j])
        }
    }

    return !invalid_squares.includes(square_name)
}

export const getKnightsMoves = (coor) => {
    const x_index = coor[0]
    const y_index = Number(coor[1])

    const allSquares = document.querySelectorAll(".squareNode")
    let result = []

    let knight_y_indexes = [y_index + 1, y_index + 2, y_index - 1, y_index - 2].filter(item => item >= 1 && item <= 8)
    let knight_x_indexes = [x_indexes[x_indexes.indexOf(x_index) - 2], x_indexes[x_indexes.indexOf(x_index) - 1], x_indexes[x_indexes.indexOf(x_index) + 1], x_indexes[x_indexes.indexOf(x_index) + 2]].filter(item => item)

    const current_square_color = document.getElementById("N" + coor).getAttribute("color")

    allSquares.forEach(square => {
        if(square.getAttribute("color") !== current_square_color) {
            const square_name = square["id"]
            if(isValid_knight(coor, square_name) && knight_y_indexes.includes(Number(square_name[1])) && knight_x_indexes.includes(square_name[0])) {
                result.push(square_name)
            }            
        }

    })  

    return result
}


const getIndexSquares = (coor, color) => {
    let result = []
        
        let x_index = coor[0] // char 
        let y_index = Number(coor[1]) // number

        
        // const y_index_limited = x_indexes[x_indexes.indexOf(x_index)].length
        // for(let i = y_index; i <= y_index_limited; i++) {
        //     result.push(i)
        // }

        const y_index_negative_limited = x_indexes.indexOf(x_index) <= 4 ? 
            x_indexes.slice(x_indexes.indexOf(x_index)).length
        :
            x_indexes.slice(0, x_indexes.indexOf(x_index) + 1).length

        // console.log(y_index_negative_limited) 
        for(let i = y_index; i !== y_index - y_index_negative_limited; i--) {
            if(i !== y_index && i >= 2) {
                result.push(i)
            }
        }

    return result
}


export const getSquare = () => {
    
}
export const getBishopsMoves = (coor, color) => {
    let result = []

        const x_index = coor[0]
        const y_index = coor[1]

        const allSquares = document.querySelectorAll(".squareNode")

        const index_squares = getIndexSquares(coor, color)

        allSquares.forEach(square => {
            const square_name = square["id"]

            if(square_name !== coor) {
                // result.push(square_name)
            }
        })  


    return result
}

export const getQueensMoves = (coor) => {
    const x_index = coor[0]
    const y_index = coor[1]

    const allSquares = document.querySelectorAll(".squareNode")
    let result = []
    
    allSquares.forEach(square => {
        const square_name = square["id"]
        if(square_name.length === 2) {
            result.push(square_name)
        }
    })  

    return result
}

export const x_indexes = ["a", "b", "c", "d", "e", "f", "g", "h"]
const isSaveMove = (coor, move_coor) => {
    const x_index = coor[0]
    const y_index = Number(coor[1])


}

export const getKingsMoves = (coor) => {
    const x_index = coor[0]
    const y_index = coor[1]

    const allSquares = document.querySelectorAll(".squareNode")
    let result = []
    
    allSquares.forEach(square => {
        const square_name = square["id"]
        if(square_name.length === 2) {
            result.push(square_name)
        }
    })  

    return result
}