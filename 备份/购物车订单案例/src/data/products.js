import { ref } from "vue"
// 定义商品数据
const products = ref([
    {
        "cid": "001001001",  // 电子产品 > 手机 
        "name": "华为手机",
        "imgPath": "src/data/pimages/001001.png",
        "price": "3588",
        "desc": "HUAWEI P50 Pro 原色双影像单元 万象双环设计 8GB+128GB可可茶金",
        "comment": "40万+"
    },
    {
        "cid": "001002001",  // 电子产品 > 笔记本 
        "name": "华为笔记本",
        "imgPath": "src/data/pimages/001002.png",
        "price": "5499",
        "desc": "华为笔记本MateBook14 13代酷睿版 i5 16G 512G 14英寸轻薄办公本银灰",
        "comment": "10万+"
    },
    {
        "cid": "001003001",  // 电子产品 > 可穿戴设备 
        "name": "小米手环",
        "imgPath": "src/data/pimages/001003.png",
        "price": "239",
        "desc": "小米手环8NFC 睡眠血氧心率检测 智能运动手环小米手环7升级版亮黑色",
        "comment": "20万+"
    },
    {
        "cid": "002001001",  // 服装 > 男装 
        "name": "李宁男装",
        "imgPath": "src/data/pimages/002001.png",
        "price": "159",
        "desc": "李宁（LI-NING）运动套装男冰丝速干T恤短裤夏季薄款足球服篮球服",
        "comment": "10万+"
    },
    {
        "cid": "002002001",  // 服装 > 女装 
        "name": "恒源祥",
        "imgPath": "src/data/pimages/002002.png",
        "price": "167",
        "desc": "恒源祥夏季新款真丝碎花连衣裙遮肚显瘦女装40岁中年女中长裙 杏色",
        "comment": "1万+"
    },
    {
        "cid": "002003001",  // 服装 > 童装 
        "name": "361童装",
        "imgPath": "src/data/pimages/002003.png",
        "price": "49.9",
        "desc": "361°童装儿童t恤男童运动短袖夏季短袖速干印花纯色波仕蓝2023新款",
        "comment": "10万+"
    },
    {
        "cid": "003001001",  // 家电 > 空调 
        "name": "美的空调",
        "imgPath": "src/data/pimages/003001.png",
        "price": "109",
        "desc": "美的酷省电新一级能效全直流变频节能省电双节能低噪智能除菌 节能24%",
        "comment": "50万+"
    },
    {
        "cid": "003002001",  // 家电 > 冰箱 
        "name": "海尔冰箱",
        "imgPath": "src/data/pimages/003002.png",
        "price": "2799",
        "desc": "海尔335升星辉法式多门四开门电冰箱家用一级能效变频节能超薄嵌入式",
        "comment": "30万+"
    },
    {
        "cid": "003003001",  // 家电 > 厨房电器 
        "name": "方太抽油烟机",
        "imgPath": "src/data/pimages/003003.png",
        "price": "2399",
        "desc": "方太侧吸式家用抽油烟机小尺寸大吸力挥手智控风魔方静音烟机自动清洗",
        "comment": "8万+"
    },
    {
        "cid": "004001001",  // 日用品 > 美妆 
        "name": "珀莱雅美妆",
        "imgPath": "src/data/pimages/004001.png",
        "price": "249",
        "desc": "珀莱雅双抗精华液虾青素保湿提亮面部精华提亮肤色抗皱护肤双抗精华",
        "comment": "2万+"
    },
    {
        "cid": "004002001",  // 日用品 > 个护清洁 
        "name": "纳爱斯牙膏",
        "imgPath": "src/data/pimages/004002.png",
        "price": "18.8",
        "desc": "纳爱斯小苏打牙膏含氟防蛀固齿牙龈护理温和去渍清新口气牙渍烟渍软垢",
        "comment": "20万+"
    },
    {
        "cid": "004003001",  // 日用品 > 生活用纸 
        "name": "维达纸巾",
        "imgPath": "src/data/pimages/004003.png",
        "price": "69.9",
        "desc": "维达抽纸超韧130抽*24包S码 整箱 超韧软抽,超韧大升级,湿水不易破,五层",
        "comment": "80万+"
    },
    {
        "cid": "005001001",  // 交通工具 > 电动车 
        "name": "雅迪电动车",
        "imgPath": "src/data/pimages/005001.png",
        "price": "3899",
        "desc": "雅迪电动车DV1新国标电动自行车48V24Ah锂电长续航动力持久成人电瓶车",
        "comment": "8000+"
    },
    {
        "cid": "005002001",  // 交通工具 > 汽车 
        "name": "比亚迪唐",
        "imgPath": "src/data/pimages/005002.png",
        "price": "299000",
        "desc": "比亚迪国产电动老大唐DM-i 动力强劲 超长续航 领航铂金版全新来袭",
        "comment": "2000+"
    },
    {
        "cid": "005003001",  // 交通工具 > 汽车配件 
        "name": "宁德时代电池",
        "imgPath": "src/data/pimages/005003.png",
        "price": "1699",
        "desc": "蓄骑士宁德时代电动车锂电池三元锂深远外卖专用国标电瓶快递三轮车",
        "comment": "3000+"
    },
    {
        "cid": "001001002",  // 电子产品 > 手机 
        "name": "小米手机",
        "imgPath": "src/data/pimages/001004.png",
        "price": "1318",
        "desc": "Redmi Note12Pro极速版 5G 骁龙 一亿像素 OLED柔性直屏 8GB+256GB",
        "comment": "50万+"
    }
])

export default products