<template>
  <div class="bds">
    <bdsList></bdsList>
  </div>
</template>

<script>
import bdsList from "@/components/bds-list.vue";
export default {
  name: "dbs",
  components: { bdsList },
};
</script>

<style scoped>
.bds {
  margin-right: 40px;
}
</style>
