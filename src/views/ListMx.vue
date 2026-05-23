<template>
    <Header />
    <div class="list-page">
        <!-- 搜索栏 -->
        <div class="list-toolbar">
            <div class="list-toolbar-inner">
                <div class="list-search"><Search /></div>
                <el-button type="danger" :icon="ShoppingCart" @click="$router.push('/cartmx')" round>我的购物车</el-button>
            </div>
        </div>

        <!-- 搜索结果 -->
        <div class="product-grid" v-if="detailsResult.length > 0">
            <div class="product-card" v-for="item in detailsResult" :key="item.id">
                <router-link :to="'/detailsmx/' + item.id" class="product-card-img-link">
                    <div class="product-card-img">
                        <img :src="item.img" :alt="item.name" />
                    </div>
                </router-link>
                <div class="product-card-body">
                    <h3 class="product-card-name">{{ item.name }}</h3>
                    <p class="product-card-desc">{{ item.description }}</p>
                    <div class="product-card-footer">
                        <span class="product-card-price">¥{{ item.price }}</span>
                        <el-button type="danger" size="small" round @click="addCartMx(item)">加入购物车</el-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="empty" v-else>
            <p>快去选择奶茶吧！</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import details from '@/assets/details'
import cartproductsmx from '@/assets/cartProductsMx'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import { ShoppingCart } from '@element-plus/icons-vue'

const route = useRoute()

const detailsResult = computed(() => {
    const searchword = route.query.searchword
    if (searchword) {
        return details.value.filter(item => item.name.indexOf(searchword) !== -1)
    }
    return details.value
})

function addCartMx(item) {
    cartproductsmx.value.push({
        id: item.id,
        img: item.img,
        desc: item.name,
        price: item.price,
        isChecked: false,
        quantity: 1
    })
}
</script>

<style scoped>
.list-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.list-toolbar {
    background: #fff;
    border-radius: 12px;
    padding: 16px 24px;
    margin-bottom: 24px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.06);
}
.list-toolbar-inner {
    display: flex;
    align-items: center;
    gap: 16px;
}
.list-search {
    flex: 1;
    max-width: 500px;
}

/* 商品网格 */
.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

/* 商品卡片 — 同首页风格 */
.product-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    transition: transform 0.2s, box-shadow 0.2s;
}
.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.product-card-img-link { display: block; }
.product-card-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #fafafa;
}
.product-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}
.product-card:hover .product-card-img img {
    transform: scale(1.05);
}

.product-card-body { padding: 12px; }
.product-card-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px;
}
.product-card-desc {
    font-size: 0.8rem;
    color: #999;
    margin: 0 0 10px;
}
.product-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.product-card-price {
    color: #e60012;
    font-size: 1.1rem;
    font-weight: bold;
}
</style>
