
// 首页奶茶数据
import { ref } from "vue"
const drinks=ref([
    {
        id: 1,
        name: "芝士奶盖四季春",
        description: "清新四季春茶底搭配浓郁芝士奶盖，口感层次丰富",
        price: 15,
        img:"src/assets/naichaImg/01.jpg"
      },
      {
        id: 2,
        name: "红豆奶茶",
        description: "香浓奶茶加入软糯红豆，经典搭配回味无穷",
        price: 12,
        img:"src/assets/naichaImg/02.jpg"
      },
      {
        id: 3,
        name: "三拼霸霸奶茶",
        description: "珍珠、布丁、椰果三种配料，一次满足你的所有需求",
        price: 18,
        img:"src/assets/naichaImg/03.jpg"
      },
      {
        id: 4,
        name: "珍珠奶茶",
        description: "经典珍珠奶茶，Q弹珍珠搭配香醇奶茶",
        price: 13,
        img:"src/assets/naichaImg/04.jpg"
      },
      {
        id: 5,
        name: "芝士奶盖莓莓",
        description: "新鲜草莓果肉搭配芝士奶盖，酸甜可口",
        price: 16,
        img:"src/assets/naichaImg/05.jpg"
      },
      {
        id: 6,
        name: "杨枝甘露",
        description: "芒果、西柚、西米组合，港式经典甜品饮品",
        price: 17,
        img:"src/assets/naichaImg/06.jpg"
      },
      {
        id: 7,
        name: "满杯百香果",
        description: "新鲜百香果调制，酸甜清爽，夏日必备",
        price: 14,
        img:"src/assets/naichaImg/07.jpg"
      },
      {
        id: 8,
        name: "棒打鲜橙",
        description: "现榨鲜橙汁，维生素C满满，健康之选",
        price: 13,
        img:"src/assets/naichaImg/08.jpg"
      },
      {
        id: 9,
        name: "冰鲜柠檬水",
        description: "新鲜柠檬切片，清爽解渴，夏日特饮",
        price: 10,
        img:"src/assets/naichaImg/09.jpg"
      },
      {
        id: 10,
        name: "桃桃摇摇奶昔",
        description: "新鲜水蜜桃与奶昔的完美结合，口感绵密",
        price: 16,
        img:"src/assets/naichaImg/09.jpg"
      }
])


export default drinks