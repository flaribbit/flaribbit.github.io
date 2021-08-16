import DefaultTheme from "vitepress/theme"
import BlogList from "./BlogList.vue"
import "./style.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("BlogList", BlogList)
  }
}
