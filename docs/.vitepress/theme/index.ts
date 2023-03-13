import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";
import {createPinia} from "pinia";


export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    const pinia = createPinia();
    app.use(pinia)
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  },
};
