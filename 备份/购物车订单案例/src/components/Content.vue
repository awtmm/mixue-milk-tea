<!-- 首页主要内容组件 -->
<template>
    <!-- 频道广场 -->
    <div class="my-2 center">
        <h1>
            <el-icon>
                <CaretRight/>
            </el-icon>
            频道广场
            <el-icon>
                <CaretLeft/>
            </el-icon>
        </h1>
        <el-row :gutter="12" class="pointer">
            <el-col :span="4"><img src="../data/channelimages/01.png" alt=""></el-col>
            <el-col :span="4"><img src="../data/channelimages/02.png" alt=""></el-col>
            <el-col :span="4"><img src="../data/channelimages/03.png" alt=""></el-col>
            <el-col :span="4"><img src="../data/channelimages/04.png" alt=""></el-col>
            <el-col :span="4"><img src="../data/channelimages/05.png" alt=""></el-col>
            <el-col :span="4"><img src="../data/channelimages/06.png" alt=""></el-col>
        </el-row>
    </div>
    <!-- 猜你喜欢 -->
    <div class="my-2 center">
        <h1>
            <el-icon>
                <CaretRight/>
            </el-icon>
            猜你喜欢
            <el-icon>
                <CaretLeft/>
            </el-icon>
        </h1>
        <el-row :gutter="12">
            <el-col :span="6" v-for="item in randomProducts" :key="randomProducts.cid">
                <div class="box">
                    <img :src="item.imgPath" />
                    <p class="price">￥<span>{{ item.price }}</span>.00</p>
                    <p>{{ item.desc }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {CaretLeft,CaretRight} from '@element-plus/icons-vue'
    import products from '@/data/products'
    import {computed} from 'vue'
    // 使用计算属性生产四个随机产品
    let randomProducts = computed(()=>{
    const array=[]
    const likeArray=[]
    for(let i=0;i<4;i++){
      let num=Math.floor(Math.random()*products.value.length)
       while(array.indexOf(num)>=0){
        Math.floor(Math.random()*products.value.length)
       }
      array.push(num)
      likeArray.push(products.value[num])
    }
      return likeArray
    })
</script>
<style scoped>
.box img{
    width: 100%;
    border-radius: 2px;
}
.box{
    padding: 8px 16px;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid #ddd;
}
.box>p{
    margin: 2% 0;
}
p.price{
    color: red;
    font-size: 0.8rem;
    font-weight: bold;
}
p.price>span{
    font-size: 1.3rem;
    padding-left: 5px;
}
</style>