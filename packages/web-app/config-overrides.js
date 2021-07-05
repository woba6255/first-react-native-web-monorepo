const path = require("path");
const ModuleScopePlugin = require('./node_modules/react-dev-utils/ModuleScopePlugin');


module.exports = {
    webpack: (config) => {
        config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
        // config.watchOptions = Object.assign({
        //     followSymlinks: true
        // }, config.watchOptions)
        // config.resolve.symlinks = true
        config.resolve.alias = Object.assign({
            '@mono/ui-components': path.resolve(__dirname, '../ui-components/dist')
        }, config.resolve.alias)
        return config
    }
}