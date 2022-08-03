import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";
import FontAwesome from "@/plugins/FontAwesome";

import AppNotifications from "@/components/global/AppNotifications";
import AppDate from "@/components/global/AppDate";
import AppAlert from "@/components/global/AppAlert";
import AppButton from "@/components/global/AppButton";


const app = createApp(App);

app.use(router);
app.use(store);
app.use(FontAwesome);

app.component('AppNotifications', AppNotifications);
app.component('AppDate', AppDate);
app.component('AppAlert', AppAlert);
app.component('AppSmallBtn', AppButton);

app.mount("#app");
