import { x_indexes } from "../utiles.js"



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