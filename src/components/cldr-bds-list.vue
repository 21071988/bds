<template>
  <div class="cldr-bds-list-wrapper" v-if="showModal && isNotEmptyList">
    <img src="../assets/images/SVG/line1.svg" class="line1" />
    <div class="clds-bds-list">
      <div class="clds-bd" v-for="(bd, idx) in getList" :key="idx">
        <p>{{ bd.friend }}</p>
        <p>{{ bd.present }}</p>
      </div>
    </div>
    <img src="../assets/images/SVG/line1.svg" class="line1" />
  </div>
</template>

<script lang="ts">
import { bdInterface } from "@/interface/bdInterface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "cldr-bds-list",
  props: ["bdId", "showCldrModal"],
  computed: {
    getList(): bdInterface[] {
      return this.$store.getters.getbdsList.filter(
        (bd: bdInterface) => bd.bdId === this.bdId
      );
    },
    isNotEmptyList(): boolean {
      return this.getList.length !== 0;
    },
    showModal(): boolean {
      return this.showCldrModal;
    },
  },
});
</script>

<style scoped lang="scss">
.cldr-bds-list {
  &-wrapper {
    min-width: 200px;
    min-height: 100px;
    background: #fff;
    padding: 10px;
    position: absolute;
    bottom: -120px;
    right: -220px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    z-index: 2;
  }
}
.clds-bd {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 14px;

  p {
    margin: 0;
  }
}
</style>
