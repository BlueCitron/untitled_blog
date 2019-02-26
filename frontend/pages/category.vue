<template>
<div>

  <MasterHead :mainTitle="$store.state.category.category.title || `BlueCitron's Blog`" subTitle="Javascript & Node.js & Vue.js"></MasterHead>

  <div class="container">
    <div class="row">
      <div class="col-md-10 mx-auto pt-4">

        <div class="textbox">
          <input type="text" placeholder="카테고리 이름을 입력해주세요." v-model="title" @keyup.enter="createCategory(title)" />
        </div>

        <div class="categorybox mt-4">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">ORDER</th>
                <th scope="col">CATEGORY</th>
                <th scope="col"> - </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in $store.state.category.list">
                <th scope="row">{{ category.order }}</th>
                <td>
                  <span>{{ category.title }}</span>
                </td>
                <td>
                  <span class="icon" @click="changeOrder(category, 'down')">
                    <i class="fas fa-angle-down"></i>
                  </span>
                  <span class="icon" @click="changeOrder(category, 'up')">
                    <i class="fas fa-angle-up"></i>
                  </span>
                  <span
                  class="icon"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  @click="editTitle = category.title"
                  >
                    <i class="fas fa-edit"></i>
                  </span>
                  <span class="icon" @click="deleteCategory(category)">
                    <i class="fas fa-trash-alt"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- 카테고리 수정 모달 -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">

          <h5 class="modal-title" id="exampleModalLabel">카테고리 수정</h5>

          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

        </div>

        <div class="modal-body">

          <div class="input-group mb-3">
            <!-- <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div> -->
            <input type="text" class="form-control" v-model="editTitle">
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">취소</button>
          <button
          type="button"
          class="btn"
          data-dismiss="modal"
          @click="updateTitle(editTitle)">수정</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import MasterHead from '~/components/MasterHead.vue'

export default {
  components: {
    MasterHead,
  },

  data() {
    return {
      title: '',
      editTitle: '',
    }
  },

  methods: {
    async createCategory(title) {
      const { getters, dispatch } = this.$store
      const order = getters['category/getMaxOrder']
      try {
        const { data } = await dispatch('category/INSERT_CATEGORY', { title, order })
        this.title = ''
        await dispatch('category/FETCH_CATEGORIES')
      } catch (error) {
        console.log('Error from pages/category.vue/create()', error)
      }
    },

    async changeOrder(category, type) {
      const { state, dispatch } = this.$store
      const { id, title, order } = category

      if (order == 1 && type == 'up' ||
          order == this.$store.getters['category/getMaxOrder'] && type == 'down') return

      let target = null, change = null
      if (type == 'up') {
        change = order - 1
        target = state.category.list
                  .find(category => category.order == change)
      } else if (type == 'down') {
        change = order + 1
        target = state.category.list
                  .find(category => category.order == change)
      }

      await dispatch('category/UPDATE_CATEGORY', { id, title, order: change})
      await dispatch('category/UPDATE_CATEGORY', { id: target.id, title: target.title, order })
      await dispatch('category/FETCH_CATEGORIES')
    },

    updateTitle() {

    },

    async deleteCategory(category) {
      const { id } = category
      const { dispatch } = this.$store
      await dispatch('category/DELETE_CATEGORY', { id })
      await dispatch('category/FETCH_CATEGORIES')
    },
  },

  async created() {
    await this.$store.dispatch('category/FETCH_CATEGORIES')
  }
}
</script>
<style scoped>
.container {
  min-height: 800px;
}

.textbox {
  border-bottom: 1px solid grey;
}

.textbox input {
  border: none;
  outline: none;
  width: 100%;
  padding: 8px 10px;
  font-size: 14px;
}

th,
td {
  text-align: center;
}

.icon {
  margin: 0 15px;
  cursor: pointer;
}
</style>
