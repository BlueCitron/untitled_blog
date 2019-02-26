<template>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="/">UNTITLED_BLOG</a>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <div class="searchbox">
            <label for="search">
              <i class="fas fa-search"></i>
            </label>
            <input type="text" id="search"/>
          </div>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <button class="category-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CATEGORY
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <template v-for="category in $store.state.category.list">
                <a class="dropdown-item" @click="moveCategory(category)">{{ category.title }}</a>
              </template>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  methods: {
    moveCategory (category) {
      const { id } = category
      const { dispatch, commit }  = this.$store
      commit('category/SET_CATEGORY', category)
      dispatch('post/FETCH_POSTS', { page: 1, category: id })
    }
  }
}
</script>
<style scoped>
.category-btn {
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  font-weight: 800;
}
.searchbox {
  color: white;
  font-size: 14px;
  overflow: hidden;

}
.searchbox i {
  padding-top: 10px;
}
.searchbox input {
  background: none;
  border: none;
  outline: none;
  width: 0px;
  border-bottom: 1px solid white;
  color: #eee;
}
.searchbox input:focus {
  width: 200px;
}
.dropdown-item {
  font-size: 12px;
}
</style>
