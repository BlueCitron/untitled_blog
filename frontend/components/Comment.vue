<template>
  <div>
    <div class="comment-area" v-for="comment in comments">

      <div class="commentor-info">
        <h6 class="commentor">
          {{ comment.writer }}
        </h6>
        <small class="comment-date">
          {{ $moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
        </small>
        <small class="comment-date">
          <span @click="$emit('selectComment', comment)" data-toggle="modal" data-target="#exampleModal">삭제</span>
          <!-- | <span @click="$emit('selectComment', comment)">답글</span> -->
        </small>
      </div>

      <p>
        {{ comment.content }}
      </p>

      <hr/>

      <!-- 답글 -->
      <!-- <div class="recomment">
        <Comment
        :comments="comment.comments"
        ></Comment>
      </div> -->

    </div>
  </div>
</template>
<script>
import Comment from './Comment.vue'

export default {
  name: 'Comment',
  components: {
    Comment
  },
  props: {
    comments: Array,
  },
  data () {
    return {

    }
  }

}
</script>
<style scoped>
.comment-area {
  margin: 20px 0;
}
.comment-area p {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 14px;
  margin: 15px 0;
}
.commentor-info {
  font-family: 'Nanum Gothic', sans-serif;
  display: flex;
  align-items: center;
}
.commentor {
  font-weight: 400;
}
.comment-date {
  font-size: 12px;
  color: #999;
  margin-left: 15px;
  padding-bottom: 7px;
}
.comment-date span {
  cursor: pointer;
}
.child-comment {
  padding-left: 100px;
}
.comment-info {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  margin-top: 15px;
}
.comment-name, .comment-password {
  width: 49%;
  padding: 0 10px;
}
.comment {
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
}
.recomment {
  padding-left: 40px;
}
</style>
