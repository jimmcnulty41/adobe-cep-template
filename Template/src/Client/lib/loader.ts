declare const requirejs: any;

requirejs.config({
    baseurl: "lib",
    paths: {
        app: "../app"
    }
});

requirejs(["app/index"]);
