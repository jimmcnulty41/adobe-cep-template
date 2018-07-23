const parseXML = require('@rgrove/parse-xml');
const fs = require('fs');

const manifest = parseXML(fs.readFileSync('./src/CSXS/manifest.xml').toString());
const bundleId = manifest.children[0].attributes.ExtensionBundleId;

const debugContents = `
<?xml version="1.0" encoding="UTF-8"?>
<ExtensionList>
    <Extension Id="${bundleId}">
        <HostList>
            <Host Name="AEFT" Port="7778"/>
        </HostList>
    </Extension>
</ExtensionList>`;

fs.writeFileSync('src/.debug', debugContents);