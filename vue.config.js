const { version, cname } =require("./package.json");

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = `${cname} ${version}`;	// Replace your title here
      return args;
    });
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: cname,
        // options placed here will be merged with default configuration and passed to electron-builder
        electronDownload: {
          "mirror": "https://npm.taobao.org/mirrors/electron/"
        }
      }
    }
  }
}
