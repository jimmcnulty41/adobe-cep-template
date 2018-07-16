import { CCApp } from "./Interface";
import { config } from "../config";

export const apps: CCApp[] = [
    {
        displayName: "Photoshop",
        hostId: "PHXS",
        version: 19
    },
    {
        displayName: "InDesign",
        hostId: "IDSN",
        version: 13
    },
    {
        displayName: "InCopy",
        hostId: "AICY",
        version: 13
    },
    {
        displayName: "Illustrator",
        hostId: "ILST",
        version: 22
    },
    {
        displayName: "Premiere Pro",
        hostId: "PPRO",
        version: 12
    },
    {
        displayName: "Prelude",
        hostId: "PRLD",
        version: 7
    },
    {
        displayName: "After Effects",
        hostId: "AEFT",
        version: 15
    },
    {
        displayName: "Animate (formerly Flash Pro)",
        hostId: "FLPR",
        version: 18
    },
    {
        displayName: "Audition",
        hostId: "AUDT",
        version: 11
    },
    {
        displayName: "Dreamweaver",
        hostId: "DRWV",
        version: 18
    },
    {
        displayName: "Muse",
        hostId: "MUSE",
        version: 2018
    },
    {
        displayName: "Bridge",
        hostId: "KBRG",
        version: 8
    }
];

const appPrompt =
    "\n" +
    apps
        .map((app: CCApp, i: number) => {
            return `${i}.\t${app.displayName}`;
        })
        .join("\n") +
    "\n";

export const promptConfig = {
    properties: {
        bundleId: {
            default: config.bundleId
        },
        extensionId: {
            default: config.extensionId
        },
        appId: {
            description: appPrompt,
            type: "number",
            message: "choose one of the above"
        },
        menuTitle: {
            default: config.menuTitle
        },
        dirName: {
            default: config.dirName
        }
    }
};
