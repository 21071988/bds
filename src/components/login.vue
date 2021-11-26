<template>
  <div class="login-wrapper" :class="{'login-wrapper__shown': showForm}" ref="LoginDiv">
    <input type="text" v-model="email" placeholder="email">
    <input type="text" v-model="password" placeholder="password">
    <div @click="createUser" class="login-btn">Login</div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: "login",
  data() {
    return {
      email:'',
      password:''
    }
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
  },
  computed: {
    showForm() {
      console.log(this.$store.getters.getShowLoginForm)
      return this.$store.getters.getShowLoginForm;
    },
  },
  mounted() {
      window.addEventListener('click', (e => {
        console.log(e.target.classList);
        ((e.target !== this.$refs.LoginDiv) &&
            this.showForm &&
            !e.target.classList.contains('login-link') &&
            (e.target.classList.length !== 0) &&
            !e.target.classList.contains('login-btn')
        ) ? this.$store.commit('toggleLogin') : true
    }))
  }
}
</script>

<style scoped lang="scss">
.login {
  &-wrapper {
    width: 100vw;
    height: 200px;
    background: #fff;
    position: absolute;
    top:0;
    left:0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    transition: .5s;
    transform: translateY(-300px);

    &__shown {
      transform: translateY(0);
    }

    input {
      border: none;
      border-bottom: 1px solid #333;
      margin-bottom: 10px;
      outline: none;
    }
  }
  &-btn {
    width: 150px;
    border: 1px solid #333;
    text-align: center;
    height: 25px;
    padding-top: 6px;
  }
}

</style>