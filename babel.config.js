module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          app: '.',
          lib: './lib',
          components: './components',
          helpers: 'helpers',
          screens: './screens',
          assets: './assets',
          styles: './styles',
          store: './store',
        },
      },
    ],
  ],
}
