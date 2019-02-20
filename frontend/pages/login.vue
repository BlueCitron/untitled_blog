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

          <div class="textbox">
            <i class="far fa-user"></i>
            <input type="text" placeholder="username"/>
          </div>

          <div class="textbox">
            <i class="fas fa-unlock"></i>
            <input type="password" placeholder="password"/>
          </div>

          <div class="login-btn">
            <button type="button" class="btn btn-outline-dark w-100">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>


export default {
  components: { }
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
