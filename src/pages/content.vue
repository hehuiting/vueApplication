<template>
  <div class="app-cotent">
    <div class="content-left">
      <div class="content-left-block">
        <h2>全部产品</h2>
        <div v-for="(item,index) in productList" :key="index">
          <h3>{{item.title}}</h3>
          <ul>
            <li v-for="(subitem,id) in item.product" :key="id">
              <a href>{{subitem.name}}</a>
              <span class="hot-tag" v-if="subitem.hot">hot</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-left-block">
        <h2>最新消息</h2>
        <h3></h3>
      </div>
    </div>
    <div class="content-right">
      <div class="swiper-size">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <img class="swiperimg" :src="item" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>

      <div class="content-list">
      <div class="content-list-item" :class="['content-list-item-'+item.flag,{'line-last':index%2 !==0}]"  v-for="(item,index) in buyData" :key="index">
          <div class="content-list-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <div class="content-list-item-button">
              <router-link tag='a' :to="'/details/'+ item.url " class="button" href="javascript:;">立即购买</router-link>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Content",
  data: function() {
    return {
      //配置swiper
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
    
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
    
        },
        loop: true  //开启轮播图前后循环模式
      },
      swiperData: [
        require("../assets/j1.jpg"),
        require("../assets/j2.jpg"),
        require("../assets/j3.jpg"),
        require("../assets/j4.jpg")
      ],

      productList: [
        {
          title: "手机类应用",
          product: [
            {
              id: 1,
              name: "QQ音乐",
              hot: false
            },
            {
              id: 2,
              name: "有道翻译",
              hot: false
            },
            {
              id: 3,
              name: "抖音",
              hot: true
            }
          ]
        },
        {
          title: "PC产品",
          product: [
            {
              id: 1,
              name: "电脑管家",
              hot: false
            },
            {
              id: 2,
              name: "金山毒霸",
              hot: false
            },
            {
              id: 3,
              name: "2345浏览器",
              hot: true
            }
          ]
        }
      ],

      buyData:[
         {
           title:"开放产品",
           desc:"开放产品是一款开放产品",
           flag:"cake",
           url:"product"
        },
        {
           title:"品牌营销",
           desc:"品牌营销帮助你的产品更好地找到定位",
           flag:"jewellery",
           url:"logo"
        },
        {
           title:"使命必达",
           desc:"使命必达快速迭代永远保持最前端的速度",
           flag:"beauty",
           url:"life"
        },
        {
           title:"勇攀高峰",
           desc:"帮你勇闯高峰，到达事业的顶峰",
           flag:"pet",
           url:"height"
        }
      ]

    };
  }
};
</script>


<style scoped>
.app-cotent {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.content-left {
  float: left;
  width: 300px;
  text-align: left;
}
.content-right {
  float: left;
  width: 900px;
}
.content-left-block {
  margin: 15px;
  background: rgb(255, 255, 200);
  box-shadow: 0 0 1px #ddd;
  height: 350px;
}
.content-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.content-left-block h3 {
  margin-left: 20px;
}
.content-left-block ul li {
  list-style: none;
}
.content-left-block ul li a {
  text-decoration: none;
  /* color:black */
}
.hot-tag {
  background: red;
  color: #fff;
}

.swiperimg {
  width: 100%;
  height: 350px;
}
.swiper-size {
  margin-top: 20px;
}

.content-list{
  overflow: hidden;
  margin-top: 15px;
}
.content-list-item{
  float: left;
  width:400px;
  padding: 15px 20px;
  margin-bottom: 15px;
  background: rgb(255, 255, 100);
  box-shadow: 0 0 1px #ddd;
}
.content-list-item-inner{
  padding-left: 120px;
  min-height:120px;
}
.content-list-item-cake .content-list-item-inner{
  background: url(../assets/1.png) no-repeat;
}
.content-list-item-jewellery .content-list-item-inner{
  background: url(../assets/2.png) no-repeat;
}
.content-list-item-beauty .content-list-item-inner{
  background: url(../assets/3.png) no-repeat;
}
.content-list-item-pet .content-list-item-inner{
  background: url(../assets/4.png) no-repeat;
}
.line-last{
  margin-left: 16px;
}
.content-list-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;

}
.content-list-item p {
  font-size: 14px;
}
.button{
  background: #4fc08d;
	color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    
}
	
</style>
