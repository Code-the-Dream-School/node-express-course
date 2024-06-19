const os = require('os');

const user = os.userInfo();
console.log(user);

const moreMachineInfo = {
    machineType: `This is ${os.type()} machine`,
    hostName: `Its name is ${os.hostname()}`,
    architecture: os.arch()  
}

console.log(moreMachineInfo);