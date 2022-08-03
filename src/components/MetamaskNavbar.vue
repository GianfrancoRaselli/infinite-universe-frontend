<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
    <div class="ml-auto">
      <div v-if="hasMetamask">
        <span class="mr-2" v-if="isConnected">Connected <span class="hide" v-if="isConnectedToTheValidChain">to {{ validChainName }}</span> with: {{ splitAddress }}</span>
        
        <div class="dropdown" v-if="isConnected">
          <AppButton classes="btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <div class="dropdown-item">
              <AppButton classes="btn-sm btn-warning btn-dropdown" :text="'Change to ' + validChainName" v-if="!isConnectedToTheValidChain" @click="changeToTheValidChain" />
            </div>
            <div class="dropdown-item">
              <AppButton classes="btn-sm btn-danger btn-dropdown" text="Disconnect" @click="disconnect" />
            </div>
          </div>
        </div>

        <AppButton classes="btn-sm btn-success" text="Connect to MetaMask" v-if="!isConnected" @click="connectToMetamask" />
      </div>
      <div v-else>
        You need to install MetaMask
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { hasMetamask, connectToMetamask, checkValidChain, disconnect  } from '@/helpers/connection';

export default {
  name: "MetamaskNavbarComponent",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      address: state => state.connection.address,
    }),
    ...mapGetters(["isConnected", "isConnectedToTheValidChain", "validChainName"]),

    hasMetamask,
    
    splitAddress() {
      let splitAccount = '';

      for (let i = 0; i < 4; i++) {
        splitAccount += this.address.charAt(i);
      }
      splitAccount += '...';
      for (let i = this.address.length - 4; i < this.address.length; i++) {
        splitAccount += this.address.charAt(i);
      }

      return splitAccount;
    }
  },
  methods: {
    async connectToMetamask() {
      this.$store.commit("setDisconnected", false);
      try {
        await connectToMetamask();
      } catch {
        this.$store.commit("setDisconnected", true);
      }
    },
    changeToTheValidChain() {
      checkValidChain();
    },
    disconnect() {
      this.$store.commit("setDisconnected", true);
      disconnect();
    },
  }
};
</script>

<style scoped>
nav {
  color: white;
}

.dropdown {
  display: inline-block;
}

.dropdown-item {
  padding: 2px 0;
}

.btn-dropdown {
  width: 100%;
}

@media (max-width: 530px) {
  .hide {
    display: none;
  }
}
</style>
