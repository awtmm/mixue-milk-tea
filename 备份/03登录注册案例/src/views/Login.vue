<template>
  <div class="login">
    <h2>这是登录页面</h2>
    <h3>查看输入的用户名和密码</h3>
    <p>用户名：{{route.query.name}}</p>
    <p>用户密码：{{route.query.password}}</p>
  </div>
</template>

<script setup>
   import {useRoute} from 'vue-router'
   let route = useRoute()
</script>

<style scoped>

</style>