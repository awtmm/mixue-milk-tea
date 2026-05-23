<template>
    <Header></Header>
    <el-row :gutter="12">
        <el-col :span="6" v-for="item in searchRsult" :key="item.cid" v-if="searchRsult.length > 0">
            <div class="box">
                <img :src="item.imgPath" @click="toDetails(item.cid)" />
                <p class="price">￥<span>{{ item.price }}</span>.00</p>
                <p>{{ item.desc }}</p>
                <p><span class="blue">{{ item.comment }}</span>条评价</p>
                <el-row>
                    <el-col :span="12"><button><el-icon>
                                <Star class="b"></Star>
                            </el-icon>收藏</button>
                    </el-col>
                    <el-col :span="12">
                        <button><el-icon>
                                <ChatLineSquare class="b"></ChatLineSquare>
                            </el-icon>评价</button>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col class="empty" v-else>
            <p>该商品已经售罄，请选择其他商品</p>
        </el-col>
    </el-row>

    <foot></foot>
</template>
<script setup>
import { Star, ChatLineSquare } from "@element-plus/icons-vue"
import Header from "@/components/Header.vue";
import foot from "@/components/foot.vue";
import products from "@/data/products";
import { computed, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
const route = useRoute()
const props = defineProps(['searchword','cid'])

const searchRsult = computed(() => {
    let searchword = props.searchword
    
    let arr = []
    if (searchword) {
        arr = products.value.filter((item) => {
            return item.name.indexOf(searchword) !== -1
        })
    }

    const cid = props.cid
    console.log(cid)
    if (cid?.length === 3) {
        arr = products.value.filter((item) => {
            return item.cid.substring(0, 3) === cid
        })
    } else if(cid?.length ===6){
        arr = products.value.filter((item) => {
            return item.cid.substring(0, 6) === cid
        })
    }
    return arr
})
//编程式导航

const router=useRouter()
function toDetails(cid){
    router.push({path:'/details',query:{cid:cid}})
}
</script>
<style scoped>
.box img {
    width: 90%;
    border-radius: 2px;

}

button {
    width: 100%;
    height: 70px;
    padding: 2%;
    margin-top: 10%;

}

.box {
    padding: 8px 16px;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid #ddd;

}

.box>p {
    margin: 2% 0;
}

p.price {
    color: red;
    font-size: 0.8rem;
    font-weight: bold;
}

p.price>span {
    font-size: 1.3rem;
    padding-left: 5px;
}

p>span {
    color: red;
}</style>