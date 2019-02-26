<template>
<div>

  <header class="masthead" style="background-image: url('/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="container">
    <div class="row" >
      <div class="col-lg-4 col-md-10 mx-auto">
        <div class="login-box">

          <h1>LOGIN</h1>

          <div class="textbox mt-4 mb-3">
            <i class="far fa-user"></i>
            <input type="text" placeholder="username" v-model="username"/>
          </div>

          <div class="textbox mt-3 mb-4">
            <i class="fas fa-unlock"></i>
            <input type="password" placeholder="password" v-model="password"/>
          </div>

          <div class="login-btn">
            <button type="button" class="btn btn-outline-dark w-100" @click="login()">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
export default {
  components: { },
  data () {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    async login () {
      const { dispatch, commit } = this.$store
      const { username, password } = this
      try {
        const { data } = await dispatch('auth/LOGIN', { username, password })
        const { accessToken } = data
        commit('auth/SET_ACCESSTOKEN', accessToken)
        this.$cookie.set('accessToken', accessToken)
        await this.verify(accessToken)
        this.$router.push('/')
      } catch (error) {
        this.username = ''
        this.password = ''
      }
    },

    async verify (accessToken) {
      const { dispatch, commit } = this.$store
      const { data } = await dispatch('auth/VERIFY', { accessToken })
      const { user } = data
      commit('auth/SET_USER', user)
    },
  }
}
</script>
<style scoped>
.container {
  height: 600px;
}
.login-box {
  text-align: center;
  width: 300px;
  padding-top: 180px;
}
.textbox {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #888;
  margin: 10px 0;
}
.textbox input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding: 2px 15px;
  font-size: 14px;
}
</style>
