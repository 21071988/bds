<template>
  <div class="home">
    <div class="login-link" @click="showLoginForm">Login</div>
    <Login :shown="shown"/>
    <Menu />
    <bds></bds>
    <calendar></calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bds from "@/components/bds.vue";
import calendar from "@/components/calendar.vue";
import Menu from "@/components/menu.vue";
import Login from '@/components/login.vue'

export default defineComponent({
  name: "Home",
  components: {
    bds,
    calendar,
    Menu,
    Login
  },
  data() {
    return {
      shown: false
    }
  },
  methods: {
    showLoginForm() {
      this.$store.commit("toggleLogin");
    }
  }
});
</script>
<style scoped lang="scss">
.home {
  display: flex;
  padding: 40px;
}
.bds {
  width: 40vw;
}
.calendar {
  width: 60vw;
}


.login {
  &-link {
    position: absolute;
    transform: translateX(-50%);
    right: 50%;
    top: 20px;
    font-weight: bold;
    &:hover{
      cursor: default;
    }
  }
}
</style>
