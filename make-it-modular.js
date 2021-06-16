const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (error, list) => {
    if (error) {
        console.log(error);
        return;
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
});