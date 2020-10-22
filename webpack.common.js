
module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendor.js"
    },
    module: {
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

