const { exec } = require("child_process");
const { promisify } = require("util");
const { unlinkSync } = require("fs");

const execPromise = promisify(exec);

const signPackage = async () => {
    await execPromise(
        "ZXPSignCmd -selfSignedCert US WA me me abc123 zxpSignature.p12"
    );
    await execPromise(
        "ZXPSignCmd -sign src extension.zxp zxpSignature.p12 abc123"
    );
    unlinkSync('zxpSignature.p12');
};

try {
    signPackage();
} catch(error) {
    console.log(error);
}
