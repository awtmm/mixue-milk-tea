import { ref } from "vue"
// 定义商品详情数据
const productsdetails=ref([
    {
        cid: "001001001",
        imgs:[
            "src/data/productsdetailsimages/001001/imgs/01.png",
            "src/data/productsdetailsimages/001001/imgs/02.png",
            "src/data/productsdetailsimages/001001/imgs/03.png",
            "src/data/productsdetailsimages/001001/imgs/04.png",
            "src/data/productsdetailsimages/001001/imgs/05.png",
            "src/data/productsdetailsimages/001001/imgs/06.png"
        ],
        colors:["曜金黑","雪域白","可可茶金","星河蓝"],
        colorsimgs:[
            "src/data/productsdetailsimages/001001/colors/c01.png",
            "src/data/productsdetailsimages/001001/colors/c02.png",
            "src/data/productsdetailsimages/001001/colors/c03.png",
            "src/data/productsdetailsimages/001001/colors/c04.png"
        ],
        weight:"0.54kg",
        versions:[ "8+128","8+256","12+256","12+512"],
        prices:[ "3588","3888","4288","5888" ],
        descs:[
            "HUAWEI P50 Pro 原色双影像单元 万象双环设计 8GB+128GB",
            "HUAWEI P50 Pro 原色双影像单元 万象双环设计 8GB+256GB",
            "HUAWEI P50 Pro 原色双影像单元 万象双环设计 12GB+256GB",
            "HUAWEI P50 Pro 原色双影像单元 万象双环设计 12GB+512GB"
        ]
    },
    {
        cid: "001002001",
        imgs:[
            "src/data/productsdetailsimages/001002/imgs/01.png",
            "src/data/productsdetailsimages/001002/imgs/02.png",
            "src/data/productsdetailsimages/001002/imgs/03.png",
            "src/data/productsdetailsimages/001002/imgs/04.png",
            "src/data/productsdetailsimages/001002/imgs/05.png",
            "src/data/productsdetailsimages/001002/imgs/06.png"
        ],
        colors:["深空灰","皓月银"],
        colorsimgs:[
            "src/data/productsdetailsimages/001002/colors/c01.png",
            "src/data/productsdetailsimages/001002/colors/c02.png",
            "src/data/productsdetailsimages/001002/colors/c03.png"
        ],
        weight:"2.16kg",
        versions:[ "MateBook 14  13代酷睿版","MateBook 14 12代酷睿版","MateBook 13 13代酷睿版","MateBook 13 12代酷睿版"],
        prices:[ "4999","4299","4599","3888" ],
        descs:[
            "华为笔记本MateBook14 13代酷睿版 i5 16G 512G 14英寸轻薄办公本",
            "华为笔记本MateBook14 12代酷睿版 i5 16G 512G 14英寸轻薄办公本",
            "华为笔记本MateBook13 13代酷睿版 i5 16G 512G 14英寸轻薄办公本",
            "华为笔记本MateBook13 12代酷睿版 i5 16G 512G 14英寸轻薄办公本",
        ]
    }
])
export default productsdetails