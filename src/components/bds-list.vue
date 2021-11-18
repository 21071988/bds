<template>
  <div class="bds-list-wrapper">
    <div class="bds-list">
      <span class="soon">Soon</span>
      <template v-for="(bd, idx) in getList" :key="idx">
        <div class="bd-card">
          <div class="bd-card__friend-and-bd">
            <span class="bd-card__friend">{{ bd.friend }}</span>
            <span class="bd-card__bd">{{ bd.bd }}</span>
          </div>
          <div class="bd-card__present">{{ bd.present }}</div>
        </div>
        <img src="../assets/images/SVG/line1.svg" class="line1" />
        <p class="remove-btn" @click="removeBd(bd.id)">remove</p>
      </template>
    </div>
    <add />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import add from "@/components/add.vue";
import { bdInterface } from "@/interface/bdInterface";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebaseInit";

export default defineComponent({
  name: "bds-list",
  components: { add },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async removeBd(id: string) {
      this.$store.commit("deletebd", id);
      await deleteDoc(doc(db, "bds", id));
    },
  },
  computed: {
    getList(): bdInterface[] {
      return this.$store.getters.getbdsList;
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/css/variables.scss";

.bds-list {
  @extend .col;

  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 80px);
  }
}
.bd-card {
  &__friend-and-bd {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__friend {
    font-size: 20px;
  }

  &__present {
    font-size: 16px;
    text-align: start;
    color: $grey;
  }
}
.line1 {
  margin-top: 10px;
}
.remove-btn {
  margin-bottom: 20px;
  text-align: start;
  margin-left: 20px;
  margin-top: -5px;
  font-size: 12px;
  color: #d02500;
  opacity: 0;
  transition: 0.5s;
  &:hover {
    opacity: 1;
    cursor: default;
  }
}
.soon {
  font-size: 30px;
  font-weight: 500;
  text-align: start;
}
</style>
