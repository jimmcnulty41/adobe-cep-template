const { exec } = require("child_process");
const { promisify } = require("util");
const fs = require("fs-extra");

const execPromise = promisify(exec);

const extensionName = "extension.zxp";
const signPackage = async () => {
    if (fs.existsSync(extensionName)){
        fs.unlinkSync(extensionName);
    }
    await execPromise(
        `ZXPSignCmd -selfSignedCert US WA me me abc123 zxpSignature.p12`
    );
    await execPromise(
        `ZXPSignCmd -sign src ${extensionName} zxpSignature.p12 abc123`
    );
    // cleanup
    if (fs.existsSync('zxpSignature.p12')) fs.unlinkSync('zxpSignature.p12');
    if (fs.existsSync('.rnd')) fs.unlinkSync('.rnd');
};

module.exports = {signPackage};