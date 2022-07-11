
export const x_indexes = ["a", "b", "c", "d", "e", "f", "g", "h"]

export const createElement = (tag, className, content) => {
    const node = document.createElement(tag)
    if(className) node.className = className
    if(content) node.textContent = content
    return node
}


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