const {readFileSync, writeFileSync} = require('fs');
const data = '5- Tien dep trai siu cap vu tru';
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync(
    './content/result-file-sync.txt',
    `Here is the third text data: ${data}`,
    {flag : 'a'},
)