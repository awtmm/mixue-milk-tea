<!-- 首页组件 -->
<!-- 首页主要包含头部组件（包含搜索组件）导航组件 轮播图组件 内容组件 尾部组件-->
<template>
    <!-- 头部组件 -->
    <Header></Header>
    <!-- 分类导航和轮播图 -->
    <el-row class="border-b-gray bg-gray">
        <!--分类导航 -->
        <el-col :span="6">
            <Navigation></Navigation>
        </el-col>
        <!-- 轮播图导航 -->
        <el-col :span="18">
            <Carousel></Carousel>
        </el-col>
    </el-row>
    <Content></Content>
    <foot></foot>
</template>

<script setup>
    import Header from '../components/Header.vue'
    import Navigation from '../components/Navigation.vue'
    import Carousel from '../components/Carousel.vue'
    import Content from '../components/Content.vue'
    import foot from '@/components/foot.vue'
</script>