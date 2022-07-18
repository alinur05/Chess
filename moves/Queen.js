import { x_indexes } from "../utiles.js"



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