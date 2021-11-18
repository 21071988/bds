<template>
  <div>
    <div class="add" @click="showNewForm">
      <img class="add-img" src="../assets/images/SVG/add.svg" alt="" />
      new
    </div>
    <newForm :showNewFormProp="showNewForm" />
  </div>
</template>

<script lang="ts">
import newForm from "@/components/new-form.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "add",
  components: { newForm },
  methods: {
    showNewForm() {
      this.$store.commit("toggleNewForm");
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/css/variables";
.add {
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    color: $hc;
    cursor: default;
  }
  &-img {
    width: 30px;
    margin-right: 10px;
  }
}
</style>
