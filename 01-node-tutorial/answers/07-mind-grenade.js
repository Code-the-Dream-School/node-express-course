const celebrate = () => {
    let count = 0
    let congrats = setInterval(() => {
        console.log('**congratulations!!!!!!')
        count++
        if (count === 5) {
            clearInterval(congrats)
        }
    }, 500);
}

celebrate()