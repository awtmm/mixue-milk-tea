<template>
     <Header></Header>
    <!-- 分类导航和轮播图 -->
    <el-row class="border-b-gray" justify="center">
        <el-col :span="16">
         <Carousel></Carousel>
        </el-col>
    </el-row>
    <div class="details-container" v-if="product">
        <el-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> 详情 </span>
            </template>
        </el-page-header>
        <div class="product-content">
            <img :src="'/' + product.img" :alt="product.name" class="product-image">
            <div class="product-info">
                <h1>{{ product.name }}</h1>
                <p>{{ product.description }}</p>
                <p class="price">￥{{ product.price }}</p>
                <div class="quantity-control">
                    <el-input-number v-model="quantity" :min="1" :max="10" />
                </div>
                <div class="actions">
                    <el-button type="danger" plain @click="buyNow">立即购买</el-button>
                    <el-button type="primary" plain @click="addToCart">加入购物车</el-button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>商品未找到</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import details from '@/assets/details';
import cartproductsmx from '@/assets/cartProductsMx';
import Header from '@/components/Header.vue';
import Carousel from '../components/Carousel.vue';

const route = useRoute();
const router = useRouter();
const quantity = ref(1);

const productId = computed(() => route.params.id);
const product = computed(() => {
    //注意：在比较时，确保类型一致，这里我们把params的id转为Number
    return details.value.find(p => p.id === Number(productId.value));
});

const goBack = () => {
    router.back();
};

const addToCart = () => {
    if (product.value) {
        const cartItem = {
            id: product.value.id,
            img: product.value.img,
            desc: product.value.name,
            price: product.value.price,
            isChecked: false,
            quantity: quantity.value,
        };
        cartproductsmx.value.push(cartItem);
        // 这里可以添加提示，例如使用 ElMessage
       
    }
};

const buyNow = () => {
    // 立即购买逻辑，通常会跳转到订单确认页面
    // 此处仅作示例
    addToCart();
    router.push('/cartmx');
};

</script>

<style scoped>
.details-container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.product-content {
    margin-top: 20px;
    text-align: center;
}
.product-image {
    max-width: 50%;
    height: auto;
    margin-bottom: 20px;
}
.product-info h1 {
    font-size: 24px;
    font-weight: bold;
}
.product-info p {
    color: #606266;
    margin: 10px 0;
}
.product-content >.product-info>.price{
    color: red;
    margin-top: 2%;
    margin-bottom: 2%;
}
.quantity-control {
    margin: 20px 0;
}
.actions {
    margin-top: 20px;
}
</style> 