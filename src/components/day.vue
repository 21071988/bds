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
  },
  computed: {
    hasbd(): boolean {
      return (
        this.$store.getters.getbdsList.filter(
          (bd: bdInterface) => bd.id === this.dayId
        ).length !== 0
      );
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/css/variables.scss";
.day {
  position: relative;
  &:hover {
    cursor: default;
  }
}
</style>
