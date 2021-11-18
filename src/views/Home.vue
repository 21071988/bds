<template>
  <div class="home">
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

export default defineComponent({
  name: "Home",
  components: {
    bds,
    calendar,
    Menu,
  },
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
</style>
