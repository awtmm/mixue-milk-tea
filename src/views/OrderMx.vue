<template>
  <Header></Header>
    <!-- 分类导航和轮播图 -->
    <el-row class="border-b-gray" justify="center">
        <el-col :span="16">
         <Carousel></Carousel>
        </el-col>
    </el-row>
    <!-- //购物车内容 -->
   <div class="ordermx-container">
    <el-row :gutter="10" class="my-2" align="middle">
            <el-col :span="2" :offset="3">序号</el-col>
            <el-col :span="2">商品名称</el-col>
            <el-col :span="4" :offset="2">商品图片</el-col>
            <el-col :span="3">购买数量</el-col>
            <el-col :span="3">商品总价</el-col>
            <el-col :span="4" :offset="1" >操作</el-col>
    </el-row>
    <el-row class="py-1 center title" v-for="(item,index) in ordermxProducts" :key="item.defineComponent" v-if="ordermxProducts.length>0" >
         <el-col :span="2" :offset="2">{{ index+1 }}</el-col>
         <el-col :span="3">{{ item.desc }}</el-col>
         <el-col :span="5" >
        <div class="img" >
               <img :src="item.img" alt="">
        </div></el-col>
        <el-col :span="3" >
           {{ item.num }}
        </el-col>
        <el-col :span="3" class="price">
             ￥{{ item.price*item.num }}
        </el-col>
        <el-col :span="1" :offset="2">
            <el-button type="danger" v-if="item.status===0" @click="item.status=1">付款</el-button>
           <el-button type="warning" v-else-if="item.status===1"
           @click="item.status=2"
           >取消订单</el-button>
           <el-button type="danger" v-else-if="item.status===2"
           @click="deleteOrder(item)">删除订单</el-button>
        </el-col>
    </el-row>
    <el-row v-else>
        <el-col>
            <p class="empty">还没有订单哦。赶紧去购物</p>
        </el-col>
    </el-row>
   </div>
</template>
<script setup> 
import ordermxProducts from '@/assets/ordermx';
import Header from '@/components/Header.vue';
import Carousel from '@/components/Carousel.vue';
import { computed } from 'vue';
function deleteOrder(item){
    let index=ordermxProducts.value.indexOf(item)
     ordermxProducts.value.splice(index,1)
}
</script>
<style scoped>
.col>a{
    display: inline-block;
    padding: 1% 2%;
    font-weight: bold;
    color: #222;
    cursor: pointer;
}
.col>a.active{
    color: red;
    border-bottom: 2px solid red;
    position: relative;
    top: 1px;
}
.ordermx-container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.img{
    width: 100%;
   
    text-align: center;
}
.img>img{
    width: 70px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
}
.price{
    font-weight: bold;
    color: red;
    font-size: 1.1rem;
}
</style>