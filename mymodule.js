const fs = require('fs');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (error, data) => {
        if (error) {
            return callback(error);
        }
        let result = [];
        for (let i = 0; i < data.length; i++) {
            const split = data[i].split(".");
            if (split[1] === extension) {
                result.push(data[i]);
            }
        }
        callback(null, result);
    });
}