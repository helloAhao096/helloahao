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
    const pinia = createPinia();
    const { app } = ctx;
    app.use(pinia)
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    // app.route("resume",)
  },
};
