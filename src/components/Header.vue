<template>
    <header class="mx-header">
        <div class="mx-header-inner">
            <!-- Logo + 品牌名 -->
            <router-link to="/" class="mx-logo-wrap">
                <img src="/src/assets/images/logo.jpeg" alt="蜜雪冰城" class="mx-logo-img" />
                <span class="mx-logo-text">蜜雪冰城</span>
            </router-link>

            <!-- 搜索栏 -->
            <div class="mx-search-area">
                <div class="mx-search-input-wrap">
                    <el-input
                        v-model="searchword"
                        placeholder="搜索你喜欢的奶茶..."
                        :prefix-icon="SearchIcon"
                        class="mx-search-input"
                        @keyup.enter="doSearch"
                    />
                </div>
                <el-button type="danger" class="mx-search-btn" @click="doSearch">搜索</el-button>
            </div>

            <!-- 右侧操作区 -->
            <div class="mx-actions">
                <router-link to="/cartmx" class="mx-cart-btn">
                    <el-badge :value="cartCount" :hidden="cartCount === 0" class="mx-cart-badge">
                        <el-icon :size="24" color="#fff"><ShoppingCart /></el-icon>
                    </el-badge>
                    <span class="mx-cart-text">购物车</span>
                </router-link>
                <router-link to="/ordermx" class="mx-nav-link">我的订单</router-link>
                <router-link to="/login" class="mx-nav-link">登录</router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search as SearchIcon, ShoppingCart } from '@element-plus/icons-vue'
import cartproductsmx from '@/assets/cartProductsMx'

const router = useRouter()
const searchword = ref('')

const cartCount = computed(() => cartproductsmx.value.length)

function doSearch() {
    if (searchword.value.trim()) {
        router.push({ name: 'listmx', query: { searchword: searchword.value } })
    }
}
</script>

<style scoped>
.mx-header {
    background: #e60012;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(230, 0, 18, 0.25);
}

.mx-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 24px;
}

/* Logo */
.mx-logo-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    flex-shrink: 0;
}
.mx-logo-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    object-fit: cover;
}
.mx-logo-text {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    white-space: nowrap;
}

/* 搜索区 */
.mx-search-area {
    display: flex;
    flex: 1;
    max-width: 500px;
    gap: 0;
}
.mx-search-input-wrap {
    flex: 1;
}
.mx-search-input :deep(.el-input__wrapper) {
    border-radius: 4px 0 0 4px;
    border: none;
}
.mx-search-btn {
    border-radius: 0 4px 4px 0;
    height: 40px;
    flex-shrink: 0;
}

/* 右侧操作 */
.mx-actions {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
}
.mx-cart-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.2s;
}
.mx-cart-btn:hover {
    background: rgba(255,255,255,0.15);
}
.mx-cart-text {
    font-size: 0.9rem;
}
.mx-cart-badge :deep(.el-badge__content) {
    border: 2px solid #e60012;
}
.mx-nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.2s;
    white-space: nowrap;
}
.mx-nav-link:hover {
    background: rgba(255,255,255,0.15);
}
</style>
