import { x_indexes } from "../utiles.js"


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
