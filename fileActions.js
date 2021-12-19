const fs = require('fs');

const fsPromises = fs.promises;

const path = require('path');

const fncScanAndRename = async (dir) => {
    let pathDelimiter = dir.substring(dir.length - 1);

    let subDirArray = await fncGetSubDirectories(dir);

    for(let subDir of subDirArray){
        let dirPath = dir +  pathDelimiter + subDir;

        fncRenameFiles(dirPath, subDir, pathDelimiter);
    };
};

const fncRenameFiles = (dir, subDir, pathDelimiter) => {
    fs.readdir(dir, (err, files) => {
        if(err){
            console.log(err);
        }else{
            for(let file of files){
                let ext = path.extname(file);

                if(file !== subDir + ext){
                    fs.rename(dir + pathDelimiter + file, dir + pathDelimiter + subDir + ext, (err) => {
                        if(err) console.log(err);
                    });
                };
            };
        };
    });
};

const fncGetSubDirectories = async (dir) => {
    let dirArr = await fsPromises.readdir(dir, {withFileTypes: true});

    return dirArr.filter(file => file.isDirectory()).map(file => file.name);
};

module.exports.fncScanAndRename = fncScanAndRename;