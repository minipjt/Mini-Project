const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "./docs"),
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'? '/emoji-music-player': '/'  
})
