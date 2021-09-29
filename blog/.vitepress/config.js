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
  themeConfig: {
    repo: "flaribbit/flaribbit.github.io",
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require("@iktakahiro/markdown-it-katex"));
      // from https://github.com/Maorey/Blog/blob/ac5ced6deb3bbec689c672ec425640a0fba598f3/docs/.vitepress/config.js#L51
      const originalRender = md.render;
      md.render = function () {
        return originalRender
          .apply(this, arguments)
          .replace(/<span class="katex">/g, '<span v-pre class="katex">')
      }
    }
  }
}
