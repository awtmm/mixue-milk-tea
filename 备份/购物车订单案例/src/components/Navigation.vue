<!-- 商品分类导航组件 -->
<template>
    <!-- 第一行：电子产品 -->
    <el-row class="py-2 bg-white pointer">
        <el-col :span="8" class="py-3">
            <router-link :to="{name:'list',query:{cid:'001'}}">电子产品</router-link>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'001001'}}">手机</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'001002'}}">笔记本</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'001003'}}">数码</router-link></el-col>
    </el-row>
    <!-- 第二行：服饰鞋帽-->
    <el-row class="py-2 bg-white pointer">
        <el-col :span="8" class="py-3">
            <router-link :to="{name:'list',query:{cid:'002'}}">服饰鞋帽</router-link>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'002001'}}">男装</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'002002'}}">女装</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'002003'}}">童装</router-link></el-col>
    </el-row>
    <!-- 第三行：家电厨具 -->
    <el-row class="py-2 bg-white pointer">
        <el-col :span="8" class="py-3">
            <router-link :to="{name:'list',query:{cid:'003'}}">家电厨具</router-link>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'003001'}}">空调·</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'003002'}}">冰箱</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'003003'}}">抽烟机</router-link></el-col>
    </el-row>
    <!-- 第四行：个人清洁 -->
    <el-row class="py-2 bg-white pointer">
        <el-col :span="8" class="py-3">
            <router-link :to="{name:'list',query:{cid:'004'}}">个人清洁</router-link>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'004001'}}">美妆</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'004002'}}">洗漱</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'004003'}}">纸巾</router-link></el-col>
    </el-row>
    <!-- 第五行：绿色出行-->
    <el-row class="py-2 bg-white pointer">
        <el-col :span="8" class="py-3">
            <router-link :to="{name:'list',query:{cid:'005'}}">绿色出行</router-link>
            <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'005001'}}">电动车</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'005002'}}">新能源</router-link></el-col>
        <el-col :span="5" class="py-3"><router-link :to="{name:'list',query:{cid:'005003'}}">配件</router-link></el-col>
    </el-row>
</template>
