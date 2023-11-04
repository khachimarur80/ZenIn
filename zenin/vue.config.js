const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      builderOptions: {
        extraResources: ['src'],
        appId: 'Lan2.com',
        mac: {
          icon: 'src/assets/app_icon.icns'
        }
      },
    }
  },
  pages: {
    main: 'src/pages/main/main.js',
  },
})
