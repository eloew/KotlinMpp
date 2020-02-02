config.module.rules.push({
    test: /\.svg$/,
    loader: 'svg-inline-loader'
});

config.resolve.modules.push("../../../processedResources/Js/main");