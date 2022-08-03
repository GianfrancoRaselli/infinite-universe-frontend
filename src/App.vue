<template>
  <div class="page-content" :key="address">
    <header class="page-content__header">
      <MetamaskNavbar class="header__nav--metamask" />
    </header>
    <main class="page-content__main">
      <router-view :key="`${$route.path}${JSON.stringify($route.query)}`" />
      <AppNotifications />
    </main>
    <footer class="page-content__footer"></footer>
  </div>
</template>

<script>
import MetamaskNavbar from "@/components/MetamaskNavbar";
import AppNotifications from '@/components/global/AppNotifications';

import { connectToMetamask } from '@/helpers/connection';
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    MetamaskNavbar,
    AppNotifications
  },
  computed: {
    ...mapState({
      address: state => state.connection.address,
    }),
  },
  created() {
    connectToMetamask();
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", monospace;
  margin: 0;
}

.page-content {
  --metamask-nav-height: 40px;
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header__nav--metamask {
  height: var(--metamask-nav-height);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
}

.page-content__main {
  width: 100%;
  flex-basis: 100%;
  max-width: 1000px;
  margin: auto;
  padding: calc(var(--metamask-nav-height) + 10px) 12px 10px 12px;
}
</style>
