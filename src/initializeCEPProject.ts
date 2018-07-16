import { getManifest } from "./manifestTemplate";
import { promptConfig, apps } from "./Const";
import { CCApp } from "./Interface";
import { config } from "../config";

const prompt = require("prompt");
const glob = require("glob");
const fs = require("fs");

const createExtensionWithPrompt = () => {
    prompt.start();
    prompt.get(promptConfig, (err, result) => {
        createExtension(result);
    });
};

const createExtension = conf => {
    fs.mkdirSync(conf.dirName);
    fs.mkdirSync(`${conf.dirName}/src`);
    writeManifest(conf);
    copyStaticFiles(conf);
};

const writeManifest = result => {
    const app: CCApp = apps[result.appId];
    const manifest = getManifest(
        result.bundleId,
        result.extensionId,
        app.hostId,
        app.version,
        result.menuTitle
    );
    fs.mkdirSync(`${result.dirName}/src/CSXS`);
    fs.writeFileSync(`${result.dirName}/src/CSXS/manifest.xml`, manifest);
};

const copyStaticFiles = result => {
    const filesToCopy = glob.sync("Template/**/*");
    filesToCopy.forEach(srcName => {
        const destinationName = getDestinationName(srcName, result.dirName);
        if (fs.existsSync(destinationName)) return;
        const srcStat = fs.statSync(srcName);

        if (srcStat.isDirectory()) {
            fs.mkdirSync(getDestinationName(srcName, result.dirName));
        }
        if (srcStat.isFile()) {
            fs.copyFileSync(
                srcName,
                getDestinationName(srcName, result.dirName)
            );
        }
    });
};

const getDestinationName = (sourceName: string, destinationRootDir: string) =>
    `${destinationRootDir}/${sourceName
        .split("/")
        .splice(1)
        .join("/")}`;

if (process.argv[2] === "--prompt") {
    createExtensionWithPrompt();
} else {
    createExtension(config);
}
