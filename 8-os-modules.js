const { log } = require('console');
const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    realease: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(), 
};
console.log(currentOS);