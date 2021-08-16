const { getPages } = require("./utils")
const MathMLtags = ["math", "maction", "maligngroup", "malignmark", "menclose", "merror", "mfenced", "mfrac", "mi", "mlongdiv", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mscarries", "mscarry", "mscarries", "msgroup", "mstack", "mlongdiv", "msline", "mstack", "mspace", "msqrt", "msrow", "mstack", "mstack", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "semantics", "annotation"];

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
      md.use(require("markdown-it-katex"));
    }
  },
  vue: {
    template: { compilerOptions: { isCustomElement: tag => MathMLtags.includes(tag) } }
  }
}
