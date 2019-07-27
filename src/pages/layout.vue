<template>
    <div class="layout">
           <Header></Header>
          <router-view></router-view>
           <Footer></Footer>
    </div>
</template>


<script>
import Header from './header'
import Footer from './footer'
// import Content from './content'
export default {
    name:'Layout',
    components:{
        Header,
        Footer,
        // Content
   
    }
}
</script>


<style scoped>
 /* .layout{
    display: inline;
}  */
</style>
