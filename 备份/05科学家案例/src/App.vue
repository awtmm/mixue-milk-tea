<template>
    <div class="container">
       <!-- 搜索框 -->
       <div class="search">
          <input type="text" placeholder="请输入搜索关键字" v-model="keywords">
          <!-- 路由跳转 -->
          <router-link 
          :to="
          {name:'list',
          query:{
            keywords:keywords
          }
        }
          ">
        </router-link>
       </div>
       <!-- 显示路由组件 -->
       <div class="content">
          <router-view></router-view>
       </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const keywords = ref('')
</script>

<style scoped>
a{
  text-decoration: none;
}
.container{
  width:80%;
  margin: 0 auto;
}
.search{
  margin: 20px auto;
  text-align: center;
}
.search>input {
  width: 30%;
  padding: 12px 24px;
  padding-bottom:13px;
  display: inline-block;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid #ccc;
}
.search>a{
  display: inline-block;
  position: relative;
  top:16px;
  width: 60px;
  height: 40px;
  background-color: #ddd;
  background-image: url("./assets/search.png");
  border: 1px solid #ccc;
  border-left:none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color:#333;
}
</style>
