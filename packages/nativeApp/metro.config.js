/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')

/**
  *   Настраиваем metro, чтоб получать пакеты из папки packages
  *   - Получаем путь до папки модуля (до папки packages), добавляем в resolver конфига и watchFolders
  *   - Можем обратиться к пакетам, например так "@mono/ui-components"
  */


const monoPath = path.resolve(__dirname + '/../ui-components')

const watchFolders = [
  monoPath
];

module.exports = {
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
