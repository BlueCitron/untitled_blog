<template>
<div>
  <hr>
  <footer>
    <div class="container">
      <div class="row d-flex flex-row justify-content-between">
        <div class="col-lg-4 col-md-4 nowadays">
          <h6>최근 게시글</h6>
          <hr/>
          <div class="nowadays-items">
            <p>
              첫번째 게시글
            </p>
            <p>
              첫번째 게시글
            </p>
            <p>
              첫번째 게시글
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 nowadays">
          <h6>최근 댓글</h6>
          <hr/>
          <div class="nowadays-items">
            <p>
              첫번째 댓글
            </p>
            <p>
              첫번째 댓글
            </p>
            <p>
              첫번째 댓글
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-3">
          <div class="total">
            <h5>Total</h5>
            <h3>717,373</h3>
          </div>
          <div class="visit">
            <h6>Today</h6>
            <h6>373</h6>
          </div>
          <div class="visit">
            <h6>Yesterday</h6>
            <h6>73</h6>
          </div>
        </div>

      </div> <!-- end of row -->

      <!-- <p class="copyright text-muted">Copyright &copy; Your Website 2019</p> -->

    </div>
  </footer>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.nowadays {
  margin: 0;
  padding: 0 30px;
  line-height: 0;
}
.nowadays-items p {
  margin: 15px 0;
  font-size: 14px;
  font-family: 'Nanum Gothic', sans-serif;
  color: #aaa;
}
.visit {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.visit h6 {
  font-weight: 600;
  font-size: 12px;
}
</style>
