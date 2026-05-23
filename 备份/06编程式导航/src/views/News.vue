<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newList" :key="news.id">
        <button @click="showDetail(news)">点击查看新闻</button>
        <!-- 第二种方法 -->
        <router-link 
          :to="{
            name:'detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }">
        {{news.title}}</router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
   import {reactive} from 'vue'
   //定义新闻数据
   const newList = reactive([
    {id:'001',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'002',title:'如何一夜暴富',content:'学IT'},
    {id:'003',title:'震惊！万万没想到',content:'明天是周一'},
    {id:'004',title:'好消息！好消息！',content:'过年啦！'},
   ])
   //实现编程式导航
   import {useRouter} from 'vue-router'
   const router = useRouter()
   //实现跳转
  function showDetail(news){
    router.push({
            name:'detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          })
  }
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>