<template>
   <Header></Header>
   <el-row :gutter="20" v-if="details">
      <el-col :span="9">
         <el-row>
            <el-col>
               <img :src="details.imgs[imgIndex]" class="w-95" alt="">
            </el-col>
         </el-row>
         <el-row :gutter="10">
            <el-col :span="4" v-for="(item, index) in details.imgs" :key="index">
               <img :src="item" class="border-gray w-100" @click="imgIndex=index" alt=""></el-col>
         </el-row>
      </el-col>
      <el-col :span="14">
         <el-row class="my-3">{{ details.descs[versionIndex] }}</el-row>
         <el-row class="my-3 price">{{ details.prices[versionIndex] }}</el-row>
         <el-row class="my-3">
            <el-col :span="3">配送至</el-col>
            <el-col :span="21">江西省丰城市</el-col>
         </el-row>
         
         <el-row>
            <el-col :span="3" class="py-1">选择颜色</el-col>
            <el-col :span="21">
               <span v-for="(color, index) in details.colors"
               @click="colorIndex=index" :class="{active:colorIndex ===index}"  :key="index">{{ color }}</span>
            </el-col>
         </el-row>
         <el-row>
            <el-col :span="3" class="py-1">
               选择版本
            </el-col>
            <el-col :span="21" class="py-1">
               <span v-for="(version, index)  in details.versions" 
               @click="versionIndex=index" :class="{active:versionIndex===index}" :key="index">
                  {{ version }}</span>
            </el-col>
         </el-row>
         <el-row>
            <el-col :span="3" class="py-1">购买数量</el-col>
            <el-col :span="21" class="number">
               <el-input-number v-model="num" :min="1" :max="10">
                    
               </el-input-number>
            </el-col>
         </el-row>
         <!-- 加入购物车 -->
         <el-row class="my-3">
            <el-col :span="22" :offset="2">
                <el-button type="success" size="large" class="btn" @click="addCart()">加入购物车</el-button>
                <el-button type="danger" size="large" class="btn">立即购买</el-button>
            </el-col>
         </el-row>
      </el-col>
   </el-row>
   <!-- 当前商品没有详情 -->
   <el-row class="empty" v-else>
      <el-col>
         <p>该商品无详情页面，请选择其他商品！</p>
      </el-col>
   </el-row>
   <foot></foot>
</template>
<script setup>
import productsdetails from '@/data/productsdetails';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import foot from '@/components/foot.vue';
import { ref } from 'vue';
const route = useRoute()
let details = computed(() => {
   const cid = route.query.cid
   for (let item of productsdetails.value) {
      if (item.cid === cid) {
         return item
      }
   }
})
const imgIndex = ref(0)
const num=ref(1)
const colorIndex=ref(0)
const versionIndex=ref(0)
//保存购物车数据
//引入购物车数组
import cartproducts from '@/data/cart';

function addCart(){
       //定义购物车对象
       let newProducts=ref({
         cid:details.value.cid,
         quantity:num.value,
         //加购商品价格
         price: details.value.prices[versionIndex.value],
         color:details.value.colors[colorIndex.value],
         desc:details.value.descs[versionIndex.value],
         img:details.value.imgs[imgIndex.value],
         //商品是否被选中
         isChecked:false
       })
       cartproducts.value.push(newProducts.value)
       localStorage.setItem('cartproducts',JSON.stringify(cartproducts.value))
}
    
</script>
<style scoped>
.price{
   color: red;
   font-size:1.1rem;
   font-weight: bold;
   background-color: #eee;
   padding: 5px 10px;
}
span{
   display: inline-block;
   padding: 6px 30px;
   text-align: center;
   background-color: #eee;
   margin-right: 5px;
   border: 1px solid #eee;
   border-radius: 3px;
   cursor: pointer;
}
.btn{
   width: 200px;
   font-weight: bold;
}
.active{
   border: 1px solid red!important;;
}
</style>