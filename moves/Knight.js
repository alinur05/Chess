
import { x_indexes } from "../utiles.js"

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