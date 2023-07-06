const {readFile, writeFile} = require('fs');
console.log('starting');
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log('Read the first file');
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if(err){
            throw err;
        }
        console.log('Read the second file!');
        const second = data;
        writeFile('./content/result-file-async.txt', `Here is the result after excute: ${first + second}`, err => {
            if(err){
                throw err;
            }else{
                console.log('Write File Success!!');
            }
        })
    })
})
console.log('Finished');