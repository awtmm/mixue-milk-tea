<template>
    <div class="carousel-wrapper">
        <el-carousel height="360px" :interval="4000" class="mx-carousel">
            <el-carousel-item v-for="item in carousel" :key="item.id">
                <img :src="item.imgpath" class="carousel-img" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import carousel from '../assets/lunbotu'
</script>

<style scoped>
.carousel-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 20px 0;
}
.mx-carousel {
    border-radius: 12px;
    overflow: hidden;
}
.carousel-img {
    width: 100%;
    height: 360px;
    object-fit: cover;
}
</style>
