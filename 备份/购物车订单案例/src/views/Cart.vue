<template>
    <Header></Header>
    <template v-if="cartproducts.length > 0">
        <el-row justify="space-between" class="title mt-1">
            <el-col :span="6">
                <h2>购物车</h2>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="my-2" align="middle">
            <el-col :span="9" :offset="3">商品信息</el-col>
            <el-col :span="3">价格</el-col>
            <el-col :span="4">数量</el-col>
            <el-col :span="3">小记</el-col>
            <el-col :span="1">操作</el-col>
        </el-row>
        <!-- 购车列表 -->
        <el-row :gutter="10" class="row" v-for="product in cartproducts" :key="product.cid" align="middle">
            <el-col :span="1" :offset="1">
                <el-checkbox v-model="product.isChecked"></el-checkbox>
            </el-col>
            <el-col :span="3">
                <div class="img"><img :src="product.img" alt=""></div>
            </el-col>
            <el-col :span="6">
                {{ product.desc }}
            </el-col>
            <el-col :span="3">{{ product.price }}</el-col>
            <el-col :span="4">
                <el-input-number v-model="product.quantity" :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col :span="3">￥{{ product.price * product.quantity }}</el-col>
            <el-col :span="1" :offset="1" class="pointer">
                <el-icon @click="deleProdect(product)">
                    <Delete></Delete>
                </el-icon>
            </el-col>
        </el-row>
        <!-- //购物车结算 -->
        <el-row :gutter="10" class="title">
            <el-col :span="1" :offset="1">
                <el-checkbox v-model="isCheckedAll">全选</el-checkbox>
            </el-col>
            <el-col :span="6" :offset="3">已选商品{{ isCheckedProducts.length }}</el-col>
            <el-col :span="6" :offset="3">合计（不含运费）<span class="price"><span class="yen">
                        &yen;
                    </span>{{ totalPrice }}</span></el-col>
            <el-col :span="2">
                <el-button type="danger" @click="submitOrder()">提交订单</el-button></el-col>
        </el-row>
    </template>
    <div class="empty">
        <p>购物车为空，赶紧去浏览商品购物吧!</p>
    </div>
    <foot></foot>
</template>
<script setup>
import cartproducts from '@/data/cart';
import Header from '@/components/Header.vue';
import foot from '@/components/foot.vue';
import { Delete } from "@element-plus/icons-vue"
import { computed,onMounted } from 'vue';
import { watch,ref } from 'vue';
onMounted(function(){
    //从本地计算机读取购物车数据
    cartproducts.value=JSON.parse(localStorage.getItem('cartproducts') || '[]')
})
let isCheckedAll = computed({
    get() {
        return cartproducts.value.every(item => item.isChecked===true)
    },
    set(value) {
          //根据isCheckedAll的值来修改所以单选框的状态
          cartproducts.value.forEach(item=>item.isChecked=value)
    }
})
//
//筛选已选商品
let isCheckedProducts=computed(()=>{
    return cartproducts.value.filter(item=>item.isChecked ===true)
})
let totalPrice=computed(()=>{
    return cartproducts.value.reduce((sum,item)=>{
        if(item.isChecked){
            return sum+item.price*item.quantity
        }
        else{
            return sum
        }
    },0)
})
function deleProdect(product){
    let index=cartproducts.value.indexOf(product)
    cartproducts.value.splice(index,1)
    localStorage.setItem('cartproducts',JSON.stringify(cartproducts.value))
}
//watch监视
  watch(cartproducts,function(){
    localStorage.setItem('cartproducts',JSON.stringify(cartproducts.value))
  },{deep:true})
  import orders from '@/data/orders';
  import { useRouter } from 'vue-router';

  const router=useRouter()
  function submitOrder(){
    let length=isCheckedProducts.value.length
    if(length>0){
        for(let i=0;i<length;i++){
            const order=ref({
                //订单编号
                id:orderCode(),
                //订单图片
                img:isCheckedProducts.value[i].img,
                desc:isCheckedProducts.value[i].desc,
                price:isCheckedProducts.value[i].price,
                num:isCheckedProducts.value[i].quantity,
                //订单商品付款情况，0代表未付款，1代表已付款，3代表已取消
                status:0

            })
            orders.value.push(order.value)
        }
        localStorage.setItem("orders",JSON.stringify(orders.value))
        //删除购物车中已经添加到订单的商品
        cartproducts.value=cartproducts.value.filter(item=>!item.isChecked)
        router.push('/order')
    }else{
        alert('请选择商品后提交')
    }
  
  }
  //随机生产订单号
  function orderCode(){
    var orderCode=''
    //随机生产0-9的随机数
    for(var i=0;i<6;i++){
       orderCode+= Math.floor(Math.random()*10)
    }
    orderCode=new Date().getTime() + orderCode
    return orderCode
  }
</script>
<style scoped>
.title {
    height: 60px;
    line-height: 60px;
    text-align: center;
}

.img {
    width: 100%;
    height: 120px;
    text-align: center;
}

.img>img {
    height: 70px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
}

.row {
    margin: 10px 0;
    text-align: center;
    background-color: rgb(244, 241, 238);
    border-radius: 10px;
}

.price,
.num {
    font-weight: bold;
    color: red;
    font-size: 1.1rem;
    padding-right: 3px;
}

.yem {
    font-size: 0.8rem;
    padding-right: 3px;
}</style>