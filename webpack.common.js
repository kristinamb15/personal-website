
module.exports = {
    resolve: {
        fallback: {
            "path" : require.resolve("path-browserify"),
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify")
        }
    },
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendor.js"
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader", // Inject imgs/scripts into html tags
                    options: {
                        attributes: {
                            list: [
                                '...', // Default styles
                                {
                                    tag: "link", // Favicon
                                    attribute: "href",
                                    type: "src"
                                }
                            ]
                        }
                    }
                }
            },
            {
                test: /\.(svg|png|jpg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "img"
                    }
                }                
            }
        ]
    }
};

