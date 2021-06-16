const fs = require('fs');

// utf8 converts to string
fs.readFile(process.argv[2], 'utf8', (error, buffer) => {
    if (error) {
        console.log(error);
        return;
    }
    const result = buffer.split('\n').length - 1;
    console.log(result);
});