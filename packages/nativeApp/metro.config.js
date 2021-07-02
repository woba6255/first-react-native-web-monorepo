/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')

/**
  *  React native не поддерживает символические ссылки( лерна их использует)
  *   - Настраиваем metro, чтоб получать пакеты из папки packages
  *   - Получаем путь до папки модуля (до папки packages), добавляем в resolver конфига и watchFolders
  *   - Можем обратиться к пакетам, на пример так "@mono/ui-components"
  */


const monoPath = path.resolve(__dirname + '/..')
const extraNodeModules = {
  '@mono': monoPath
};
const watchFolders = [
  monoPath
];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
