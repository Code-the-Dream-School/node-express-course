const os = require("os")

const myComputer = {
    os: os.type(),
    userName: os.userInfo().username,
    computerChip: os.cpus()[1].model,
    KernelVersion: os.release(),
    IPv4Address: os.networkInterfaces().lo0[0].address
}
console.log(myComputer)
