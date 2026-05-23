<!-- //订单组件 -->
<template>
    <Header></Header>
    <!-- 订单内容 -->
    <el-row style="border-bottom: 2px solid #ccc;">
        <el-col class="col">
            <a @click="orderStatus=-1" :class="{active:orderStatus===-1}">所有订单</a>
            <a @click="orderStatus=0" :class="{active:orderStatus===0}">代付款订单</a>
            <a @click="orderStatus=1" :class="{active:orderStatus===1}">已付款订单</a>
            <a @click="orderStatus=2" :class="{active:orderStatus===2}">未取消订单</a>
        </el-col>
    </el-row>
    <!-- 订单标题 -->
    <el-row class="bg-gray py-1 center" align="middle">
        <el-col :span="4" class="py-1">订单号</el-col>
        <el-col :span="4" >商品图片</el-col>
        <el-col :span="5" >商品描述</el-col>
        <el-col :span="2" >商品数量</el-col>
        <el-col :span="2" >商品单价</el-col>
        <el-col :span="3" >小计</el-col>
        <el-col :span="4" >交易状态</el-col>
    </el-row>
      <!-- 商品列表 -->
    <el-row class="py-1 center title" v-for="item in myOrders" :key="item.id" v-if="myOrders.length>0" align="middle">
        <el-col :span="4">{{ item.id }}</el-col>
        <el-col :span="4"><div class="img"><img :src="item.img" alt=""></div></el-col>
        <el-col :span="5">{{ item.desc }}</el-col>
        <el-col :span="2">{{ item.num }}</el-col>
        <el-col :span="2" class="price">￥{{ item.price }}</el-col>
        <el-col :span="3" class="price">￥{{ item.num*item.price }}</el-col>
        <el-col :span="4">
           <el-button type="success" v-if="item.status===0" @click="item.status=1">付款</el-button>
           <el-button type="warning" v-else-if="item.status===1"
           @click="item.status=2"
           >取消订单</el-button>
           <el-button type="danger" v-else-if="item.status===2"
           @click="deleteOrder(item)">删除订单</el-button>
        </el-col>
    </el-row>
    <!-- 无订单信息展示 -->
    <el-row v-else>
        <el-col>
            <p class="empty">还没有订单哦。赶紧去购物</p>
        </el-col>
    </el-row>
    <foot></foot>
</template>
<script setup>
import orders from '@/data/orders';
import Header from '@/components/Header.vue';
import foot from '@/components/foot.vue';
import { onMounted } from 'vue';
import { watch } from 'vue';
import { ref } from 'vue';
import { computed } from 'vue';
onMounted(function(){
    orders.value=JSON.parse(localStorage.getItem('orders') || '[]')
})
//监听订单数组，发生变化重新保持到本地计算机
watch(orders,function(){
    localStorage.setItem("orders",JSON.stringify(orders.value))
},{deep:true})
//定义订单状态
let orderStatus=ref(-1)
//筛选不同订单
  let myOrders=computed(()=>{
    if(orderStatus.value>=0){
        return orders.value.filter(item=>{
            return item.status === orderStatus.value
        })
    }
    else{
        return orders.value
    }
  })
  function deleteOrder(order){
    let index=orders.value.indexOf(order)
    orders.value.splice(index,1)
    localStorage.setItem("orders",JSON.stringify(orders.value))
  }
  
</script>
<style>
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
.img{
    width: 100%;
    height: 120px;
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