<template>
    <Header />

    <div class="cart-page">
        <div class="cart-container" v-if="cartproductsmx.length > 0">
            <h2 class="cart-title">我的购物车（{{ cartproductsmx.length }}）</h2>

            <!-- 商品列表 - 卡片化 -->
            <div class="cart-items">
                <div class="cart-item" v-for="productmx in cartproductsmx" :key="productmx.id">
                    <!-- 勾选 -->
                    <el-checkbox v-model="productmx.isChecked" class="cart-checkbox" />

                    <!-- 商品图片 -->
                    <div class="cart-item-img">
                        <img :src="productmx.img" :alt="productmx.desc" />
                    </div>

                    <!-- 商品信息 -->
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">{{ productmx.desc }}</h4>
                    </div>

                    <!-- 单价 -->
                    <div class="cart-item-price">¥{{ productmx.price }}</div>

                    <!-- 数量 -->
                    <div class="cart-item-qty">
                        <el-input-number
                            v-model="productmx.quantity"
                            :min="1"
                            :max="10"
                            size="small"
                        />
                    </div>

                    <!-- 小计 -->
                    <div class="cart-item-subtotal">
                        ¥{{ (productmx.price * productmx.quantity).toFixed(2) }}
                    </div>

                    <!-- 删除 -->
                    <div class="cart-item-del" @click="deleProdect(productmx)">
                        <el-icon :size="20"><Delete /></el-icon>
                    </div>
                </div>
            </div>

            <!-- 底部固定结算栏 -->
            <div class="cart-footer">
                <div class="cart-footer-left">
                    <el-checkbox v-model="isCheckedAllModel" class="cart-footer-check">
                        全选
                    </el-checkbox>
                </div>
                <div class="cart-footer-right">
                    <span class="cart-footer-total-label">合计：</span>
                    <span class="cart-footer-total-price">¥{{ totalPrice.toFixed(2) }}</span>
                    <el-button type="danger" size="large" round @click="submitOrder" class="cart-submit-btn">
                        提交订单（{{ checkedCount }}）
                    </el-button>
                </div>
            </div>
        </div>

        <!-- 空购物车 -->
        <div class="cart-empty" v-else>
            <el-icon :size="80" color="#ddd"><ShoppingCart /></el-icon>
            <p>购物车是空的</p>
            <el-button type="danger" round @click="$router.push('/')">去逛逛</el-button>
        </div>
    </div>
</template>

<script setup>
import { Delete, ShoppingCart } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import cartproductsmx from '@/assets/cartProductsMx'
import ordermxProducts from '@/assets/ordermx'

const router = useRouter()

function deleProdect(productmx) {
    const index = cartproductsmx.value.indexOf(productmx)
    cartproductsmx.value.splice(index, 1)
}

// 全选状态（用 v-model 可读写计算属性）
const isCheckedAllModel = computed({
    get() {
        return cartproductsmx.value.length > 0 && cartproductsmx.value.every(item => item.isChecked)
    },
    set(value) {
        cartproductsmx.value.forEach(item => item.isChecked = value)
    }
})

const checkedCount = computed(() => cartproductsmx.value.filter(item => item.isChecked).length)

const totalPrice = computed(() => {
    return cartproductsmx.value.reduce((sum, item) => {
        if (item.isChecked) return sum + item.price * item.quantity
        return sum
    }, 0)
})

const isCheckedProducts = computed(() => {
    return cartproductsmx.value.filter(item => item.isChecked)
})

function submitOrder() {
    const checked = isCheckedProducts.value
    if (checked.length === 0) return

    checked.forEach(item => {
        ordermxProducts.value.push({
            id: item.id,
            img: item.img,
            desc: item.desc,
            price: item.price,
            num: item.quantity,
            status: 0
        })
    })

    // 清空已提交的商品
    checked.forEach(item => {
        const idx = cartproductsmx.value.indexOf(item)
        cartproductsmx.value.splice(idx, 1)
    })

    router.push('/ordermx')
}
</script>

<style scoped>
.cart-page {
    background: #f5f5f5;
    min-height: calc(100vh - 60px);
    padding-bottom: 120px;
}
.cart-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 24px 20px;
}
.cart-title {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 20px;
    padding-left: 8px;
    border-left: 4px solid #e60012;
}

/* 商品卡片 */
.cart-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.cart-item {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #fff;
    border-radius: 10px;
    padding: 16px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    transition: box-shadow 0.2s;
}
.cart-item:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.cart-checkbox {
    flex-shrink: 0;
}

.cart-item-img {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    background: #fafafa;
}
.cart-item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cart-item-info {
    flex: 1;
    min-width: 0;
}
.cart-item-name {
    font-size: 1rem;
    color: #333;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cart-item-price {
    width: 80px;
    text-align: center;
    color: #999;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.cart-item-qty {
    width: 110px;
    flex-shrink: 0;
}

.cart-item-subtotal {
    width: 90px;
    text-align: right;
    font-weight: bold;
    color: #e60012;
    font-size: 1.05rem;
    flex-shrink: 0;
}

.cart-item-del {
    width: 40px;
    text-align: center;
    color: #ccc;
    cursor: pointer;
    flex-shrink: 0;
    transition: color 0.2s;
}
.cart-item-del:hover {
    color: #e60012;
}

/* 底部结算栏 */
.cart-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0 -2px 12px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    z-index: 999;
}
.cart-footer-left {
    display: flex;
    align-items: center;
}
.cart-footer-right {
    display: flex;
    align-items: center;
    gap: 12px;
}
.cart-footer-total-label {
    font-size: 0.95rem;
    color: #666;
}
.cart-footer-total-price {
    font-size: 1.4rem;
    font-weight: bold;
    color: #e60012;
}
.cart-submit-btn {
    padding: 12px 32px;
    font-size: 1.05rem;
}

/* 空状态 */
.cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding-top: 120px;
    color: #999;
    font-size: 1.1rem;
}
</style>
