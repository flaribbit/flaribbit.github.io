import DefaultTheme from "vitepress/theme"
import BlogList from "./BlogList.vue"
import CalcDemo from "./CalcDemo.vue"
import "./style.css"
import "katex/dist/katex.min.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("BlogList", BlogList)
    app.component("CalcDemo", CalcDemo)
  }
}
