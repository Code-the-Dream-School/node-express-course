const groupSession = (group) => {
    let str = "Today's group session consisted of :"
    for (const person in group) {
        str += ` ${person},`
    }
    console.log(str)
}

module.exports = groupSession