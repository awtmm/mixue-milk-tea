// 定义用户数据
import { ref } from "vue";
const users=ref([
    {
        id:1,
        phonenumber:'11778907890',
        name:"张三",
        password:'123456'
    },
    {
        id:2,
        phonenumber:'18888888888',
        name:'李四',
        password:'123456'
    }
])
export default users