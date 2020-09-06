const fs = require('fs');

const fileName = process.argv[2];
if(fileName) {
    const files = [];
    files.push(fileName);
    fs.appendFileSync("fileNames.txt", files.toString() + '\n');   
    files.forEach(fileName => {    
        fs.exists(fileName, (exists) => {
            console.log(exists)
            if(exists) {
                console.log('File name already exists, Kindly give a new file name');
            } else {
                fs.writeFile(fileName + '.txt', 'You are awesome', () => {
                    console.log('File has been written successfully!!');
                });
            }
        });        
    });
} else {
    console.log('Please provide a file name as a argument while running!!')
}