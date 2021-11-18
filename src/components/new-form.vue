<template>
  <div>
    <div class="new-form-wrapper" v-if="showForm">
      <div class="new-form-background" ref="newFormBackground"></div>
      <div class="new-form-div">
        <input type="text" v-model="friend" placeholder="name" />
        <input
          type="text"
          v-model="bd"
          placeholder="dd/mm/yy"
          @keyup="formatText"
          ref="bdInput"
        />
        <input type="text" v-model="present" placeholder="present" />
        <p class="new-form__submit-btn" @click="submitForm">Add</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebaseInit.ts";

export default defineComponent({
  name: "newForm",
  data() {
    return {
      showNewForm: false,
      friend: "",
      bd: "",
      present: "",
      newbd: {},
      keyCode: 0,
      codes: ['0','1','2','3','4','5','6','7','8','9']
    };
  },
  methods: {
    close() {
      window.addEventListener("click", (e) => {
        if (e.target === this.$refs.newFormBackground) {
          this.$store.commit("toggleNewForm");
        }
      });
    },
    validateBd() {
      let day = parseInt(this.bd.substr(0, 2));
      let month = parseInt(this.bd.substr(3, 2));
      if (isNaN(day)) {
        console.log("noooooo");
      }
      if (isNaN(month)) {
        console.log("nooooo");
      }
    },
    async submitForm() {
      let day = this.bd.substr(0, 2);
      let month = this.bd.substr(3, 2);
      if (this.bd[0] === "0") {
        day = day.slice(1);
      }

      if (this.bd[3] === "0") {
        month = month.slice(1);
      }

      const id = Date.now() + day + month;
      console.log(id);
      this.validateBd();

      if (this.friend.length === 0 && this.bd.length === 0) {
        return;
      }
      // fill new birthday model
      this.newbd = {
        id: id,
        friend: this.friend,
        bd: this.bd,
        present: this.present,
      };
      console.log(this.newbd);
      this.$store.commit("newbd", this.newbd);
      this.$store.commit("toggleNewForm");

      setDoc(doc(db, "bds", this.newbd.id), this.newbd);
    },
    formatText() {
      if(this.codes.filter(code => code === this.keyCode).length === 0 && this.notDeleting) {
        this.bd = this.bd.slice(0,-1)
        return
      }
      if(this.bd.length > 10) {
        this.bd = this.bd.slice(0,-1)
        return
      }

      this.bd = this.bd.split('')
      if (
        (this.bd.length === 2 || this.bd.length === 5) &&
        this.notDeleting
      ) {
        this.bd.push("/");
      }
      if (this.bd.length ===3 && this.bd[2] !== "/") {
        this.bd.push(this.bd[2])
        this.bd.splice(2,1,'/')
      }

      if (this.bd.length ===5 && this.bd[4] !== "/") {
        this.bd.push(this.bd[4])
        this.bd.splice(5,1,'/')
      }

      this.bd = this.bd.join('')
    },
    addListener() {
      if (this.showForm) {
        this.$refs.bdInput.addEventListener("keydown", (e) => {
          this.keyCode = e.key;
        });
      }
    },
  },
  computed: {
    showForm() {
      return this.$store.getters.getShowNewForm;
    },
    notDeleting() {
      return this.keyCode !== "Backspace" && this.keyCode !== "delete"
    },
  },
  mounted() {
    this.close();
    this.addListener();
  },
});
</script>

<style scoped lang="scss">
@import "../assets/css/variables";

.new-form {
  &-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    @extend .center;
    z-index: 100;
  }
  &-background {
    background: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  &-div {
    width: 40vw;
    background: #fff;
    position: relative;
    @extend .center;
    padding: 80px 40px 40px;

    input {
      margin-bottom: 40px;
      border: 0;
      border-bottom: 0.5px solid $grey;
      width: 100%;
      outline: none;
      padding-bottom: 5px;
    }
  }

  &__submit-btn {
    transition: 0.5s;
    font-size: 20px;

    &:hover {
      color: $hc;
      cursor: default;
    }
  }
}
</style>
