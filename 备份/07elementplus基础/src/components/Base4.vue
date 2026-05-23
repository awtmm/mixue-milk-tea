<template>
  <div class="base">
    <!-- 第一行:左对齐 -->
     <el-row class="row" :gutter="20" justify="start">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
            <div class="bg3"></div>
         </el-col>
     </el-row>
     <!-- 第一行:居中对齐 -->
     <el-row class="row" :gutter="20" justify="center">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
            <div class="bg3"></div>
         </el-col>
     </el-row>
     <!-- 第一行:右对齐 -->
     <el-row class="row" :gutter="20" justify="end">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
            <div class="bg3"></div>
         </el-col>
     </el-row>
     <!-- 第一行:两边对齐 -->
     <el-row class="row" :gutter="20" justify="space-between">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
            <div class="bg3"></div>
         </el-col>
     </el-row>
     <!-- 第一行:元素四周均匀填充 -->
     <el-row class="row" :gutter="20" justify="space-around">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
            <div class="bg3"></div>
         </el-col>
     </el-row>
     <!-- 第一行:元素四周均匀填充 -->
     <el-row class="row" :gutter="20" justify="space-evenly">
        <!-- 列 -->
         <el-col :span="2">
            <div class="bg1"></div>
         </el-col>
         <el-col :span="5">
            <div class="bg2"></div>
         </el-col>
         <el-col :span="9">
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
