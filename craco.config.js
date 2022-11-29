const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#15A362',
                            '@font-size-base': '16px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
