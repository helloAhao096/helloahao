import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import MyLayout from "./MyLayout.vue";
import "./custom.css";
import {createPinia} from "pinia";
import {EnhanceAppContext} from "vitepress/dist/client";
// main.ts

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    const pinia = createPinia();
    app.use(pinia)
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
  },
};
