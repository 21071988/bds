<template>
  <div class="month-wrapper">
    <div
      class="day"
      :class="{ hasbd: hasbd }"
      @mouseover="showCldrListModal"
      @mouseleave="hideCldrListModal"
    >
      {{ day }}
      <cldrBdsList :showCldrModal="showCldrModal" :bdId="dayId" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cldrBdsList from "@/components/cldr-bds-list.vue";
import { bdInterface } from "@/interface/bdInterface";
export default defineComponent({
  name: "month",
  components: { cldrBdsList },
  props: ["day", "dayId"],
  data() {
    return {
      days: [],
      showCldrModal: false,
      bdId: "",
    };
  },
  methods: {
    showCldrListModal() {
      this.showCldrModal = true;
    },
    hideCldrListModal() {
      this.showCldrModal = false;
    },
    formatBdId(bd: string) {
      let day = bd.substr(0,2)
      let month = bd.substr(3,2)
      day[0] === "0" ? (day = day.substr(1, 1)) : true;
      month[0] === "0" ? (month = month.substr(1, 1)) : true;
      bd = day + month;
      return bd;
    },
  },
  computed: {
    hasbd(): boolean {
      return (
        this.$store.getters.getbdsList.filter(
          (b: bdInterface) =>b.bdId === this.dayId).length !== 0
      );
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/css/variables.scss";
.day {
  position: relative;
  text-align: center;
  &:hover {
    cursor: default;
  }
}
</style>
