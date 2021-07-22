"use strict";

module.exports = function gruntFile(grunt) {
    require("load-grunt-tasks")(grunt);
    const webpackConfig = require("./webpack.config.js");
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            dist: "dist/**"
        },
        eslint: {
            target: ["src/**/*.js"]
        },
        mochaTest: {
            test: {
                src: ["test/**/*.js"]
            },
            options: {
                timeout: 30000
            }
        },
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === "development"
            },
            prod: webpackConfig,
            dev: Object.assign({ watch: true }, webpackConfig)
        }
    });
    grunt.loadNpmTasks("grunt-webpack");
    grunt.registerTask("test", "Run the jasmine and mocha tests", ["eslint", "mochaTest"]);
    grunt.registerTask("build", "Run webpack and bundle the source", ["clean", "webpack"]);
};
