import { x_indexes } from "../utiles.js"


const getSquarebyId = move => document.querySelector(`[square_id=${move}]`)

export const getBishopsMoves = (coor, color) => {
    const x_index = coor[0]
    const y_index = Number(coor[1])

    // TOP RIGHT
    let topRightMoves = []

    let x = x_indexes.indexOf(x_index) + 1
    for(let i = y_index + 1; i <= 8; i++) {
        const target = x_indexes[x] + i
        const square = getSquarebyId(target)
        
        if(square.id.length === 3 ) {
            if(square.getAttribute("piece_color") === color) {
                break
            }else {
                topRightMoves.push(target)
                break
            }
        }else {
            topRightMoves.push(target)
            if(x < 7) {
                x++
            }else {
                break
            }
        }
    }

    // TOP LEFT 
    let topLeftMoves = []

    let x_top_left = x_indexes.indexOf(x_index) - 1
    for(let i = y_index + 1; i <= 8; i++) {
        const target = x_indexes[x_top_left] + i
        const square = getSquarebyId(target)

        if(square.id.length === 3 ) {
            if(square.getAttribute("piece_color") === color) {
                break
            }else {
                topLeftMoves.push(target)
                break
            }
        }else {
            topLeftMoves.push(target)
            if(x_top_left) {
                x_top_left--
            }else {
                break
            }
        }
    }



    // BOTTOM RIGHT
    let bottomRightMoves = []

    let x_bottom_right = x_indexes.indexOf(x_index) + 1
    for(let i = y_index - 1; i; i--) {

        const target = x_indexes[x_bottom_right] + i
        const square = getSquarebyId(target)
        
        if(square.id.length === 3 ) {
            if(square.getAttribute("piece_color") === color) {
                break
            }else {
                bottomRightMoves.push(target)
                break
            }
        }else {
            bottomRightMoves.push(x_indexes[x_bottom_right] + i)
            if(x_bottom_right < 7) {
                x_bottom_right++
            }else {
                break
            }
        }
    }

    // BOTTOM LEFT
    let bottomLeftMoves = []

    let x_bottom_left = x_indexes.indexOf(x_index) - 1
    for(let i = y_index - 1; i; i--) {

        const target = x_indexes[x_bottom_left] + i
        const square = getSquarebyId(target)
        
        if(square.id.length === 3 ) {
            if(square.getAttribute("piece_color") === color) {
                break
            }else {
                bottomLeftMoves.push(target)
                break
            }
        }else {
            bottomLeftMoves.push(target)
            if(x_bottom_left) {
                x_bottom_left--
            }else {
                break
            }
        }
    }
     
    return [...topRightMoves, ...topLeftMoves, ...bottomLeftMoves, ...bottomRightMoves]
}


