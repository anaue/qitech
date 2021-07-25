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
        },
        nyc_mocha: {
            options: {  },
            target: {
                src: "./src/test/**/*.spec.js",
                options: {
                    nyc: {
                        coverage: {                                 // report nyc coverage results
                            dir: "dist/coverage",            // ... to folder
                            reporter: [ "html", "text-summary" ]  // ... using reporters
                        },
                        excludes: [ "**/*.spec.js" ],         // exclude test files from instrumentation!
                        requires: [ "grunt-nyc-mocha/scripts/sourcemapsupport" ]
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks( "nyc_mocha" );
    grunt.registerTask("test", "Run the jasmine and mocha tests", ["eslint", "mochaTest", "nyc_mocha:target"]);
    grunt.registerTask("build", "Run webpack and bundle the source", ["clean", "webpack"]);
};
