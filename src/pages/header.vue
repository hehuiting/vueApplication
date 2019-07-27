<template>
  <div class="app-head">
    <div id="app-head-inner">
      <img src="../assets/logo.png" alt />
      <span>构建Vue应用</span>
      <div class="head-nav">
        <ul class="nav-list">
          <li>登录</li>
          <li class="devide">|</li>
          <li >注册</li>
          <li class="devide">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  width: 100%;
  padding: 0px
}

.app-head-inner {
  width: 1200px;
  margin: 0 auto;
  /* height:90px; */
  background-color: aquamarine;
}
img {
  width: 60px;
  margin: 20px 30px;
}
span {
  position: relative;
  top: -45px;
  font-size: 20px;
}
.head-nav {
  float: right;
  margin-right: 100px;
}
.nav-list{
  margin: 0px;
  padding: 0px;
 line-height: 90px
}
.nav-list li {
  list-style: none;
  display: inline-block;
}
.devide{
    padding: 0 10px
}
</style>
