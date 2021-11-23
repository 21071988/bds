<template>
  <div class="menu-wrapper">
    <div @click="createUser">login</div>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <div class="menu-burger" @click="showMenu = !showMenu">
      <hr :class="{ shown1: showMenu }" />
      <hr :class="{ shown2: showMenu }" />
    </div>
    <div class="menu" :class="{ 'menu-shown': showMenu }">
      <div class="menu-links">
        <router-link to="About">Budget</router-link>
        <router-link to="About">Settings</router-link>
        <router-link to="About">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "menu",
  data() {
    return {
      showMenu: false,
      email: '',
      password: ''
    };
  },
  methods: {
    createUser() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/variables";

.menu {
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  transform: translateX(200vw);
  transition: 1s;

  &-links {
    margin: 40vh 0 0 20vw;
    @extend .col;
    align-items: flex-start;

    a {
      margin-bottom: 30px;
      text-decoration: none;
      color: #333;
      font-size: 25px;
      transition: 0.5s;

      &:hover {
        color: $hc;
      }
    }
  }

  &-shown {
    transform: translateX(0);
  }
  &-burger {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 300;

    hr {
      width: 30px;
      transition: 1s;
    }
  }
}
.shown1 {
  transform: rotateZ(45deg);
}
.shown2 {
  transform: rotateZ(-45deg) translateY(-7px) translateX(7px);
}
</style>
