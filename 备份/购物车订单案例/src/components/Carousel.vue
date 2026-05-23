<!-- 轮播图组件 -->
<template>
    <el-carousel height="318px" type="card" :interval="4000">
        <el-carousel-item v-for="item in carouselarray" :key="item.id">
            <img :src="item.imgpath" />
        </el-carousel-item>
    </el-carousel>
</template>

<script setup>
    import carouselarray from '../data/carousel'
</script>

<style scoped>
    img{
        width: 100%;
        height: 318px;
    }
</style>