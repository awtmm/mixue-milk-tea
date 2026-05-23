<template>
  <div class="base">
    <!-- 第一行:未设置分栏间距 -->
     <el-row class="row">
        <!-- 列 -->
         <el-col :span="12">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="12">
            <div class="bg2"></div>
         </el-col>
     </el-row>
     <!-- 第二行:设置分栏间距20 -->
     <el-row class="row" :gutter="20">
        <!-- 列 -->
         <el-col :span="12">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="12">
            <div class="bg2"></div>
         </el-col>
     </el-row>
     <!-- 第三行:设置分栏间距20 -->
     <el-row class="row" :gutter="20">
        <!-- 列 -->
         <el-col :span="8">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="8">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="8">
            <div class="bg3"></div>
         </el-col>
     </el-row>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .base{
    width: 80%;
    border: 1px solid black;
    margin: 0 auto;
  }
  .row{
    height: 50px;
    margin-top: 10px;
  }
  .bg1{
    background-color: skyblue;
    height: 50px;
  }
  .bg2{
    background-color: pink;
    height: 50px;
  }
  .bg3{
    background-color: yellowgreen;
    height: 50px;
  }
</style>
