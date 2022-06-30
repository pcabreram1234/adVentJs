function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let lastRow = 1

    for (let h = 1; h < height; h++) {
        lastRow = lastRow + 2
    }
    console.log(lastRow)
    return lastRow
}

createXmasTree(6)