/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();

// const path = require('path');
// const blacklist = require('metro-config/src/defaults/blacklist');

// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([
//       // This stops "react-native run-windows" from causing the metro server to crash if its already running
//       new RegExp(
//         `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
//       ),
//       // This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
//       /.*\.ProjectImports\.zip/,
//     ]),
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };
