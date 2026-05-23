<!-- 搜索组件 -->
<template>
    <el-row>
        <!-- 左边输入框 -->
        <el-col :span="21">
            <el-input class="h-40" placeholder="华为手机"
            :prefix-icon="Search" v-model="searchword"></el-input>
        </el-col>
        <!-- 右边按钮 -->
        <el-col :span="3">
            <el-button type="danger" class="h-40 w-100 a"><router-link :to="{name:'list',query:{
                searchword:searchword
            }}">搜索</router-link></el-button>
        </el-col>
        
    </el-row>
    
</template>

<script setup>
    import {Search} from "@element-plus/icons-vue"
    import {ref} from 'vue'
    const searchword = ref('')
</script>
<style scoped>
.a a{
    font-size: 15px;
    color: white;
}
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