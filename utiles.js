export const x_indexes = ["a", "b", "c", "d", "e", "f", "g", "h"]
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

export const getSquare = id => document.getElementById(id)



