const { getPages } = require("./utils")
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  lang: "zh-CN",
  title: "梦飞翔的小站",
  customData: {
    pages: getPages(),
  },
  themeConfig: {},
  markdown: { lineNumbers: true },
}
