const { exec } = require("child_process");
const { promisify } = require("util");
const { basename, join, dirname } = require('path');
const fs = require('fs-extra');

const { signPackage } = require('./zxp_wrapper.js');

const execPromise = promisify(exec);

// This should be the bundleId
const folderName = basename(process.cwd());
const dest =
`C:/Program Files (x86)/Common Files/Adobe/CEP/extensions/${folderName}`;

signPackage()
.then(() => {
    if (fs.existsSync(dest)) {
        execPromise(`ExManCmd /update extension.zxp`)
    } else {
        execPromise(`ExManCmd /install extension.zxp`)
    }
}).catch(
    err => console.error(err)
);