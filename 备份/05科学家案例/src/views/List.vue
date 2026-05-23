<template>
  <div class="list">
    <!-- 科学家内容 -->
    <div class="item" v-for="(item,index) in searchResultList" :key="index">
      <!-- 图片 -->
      <div class="img">
        <img :src="item.img" alt="">
      </div>
      <!-- 内容 -->
      <div class="content">
        <p class="name">{{ item.name }}</p>
        <p class="title">{{ item.title }}</p>
        <p class="honor">{{ item.honor }}</p>
        <p class="desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import img01 from "../assets/qxs.png"
import img02 from "../assets/ylp.png"
import img03 from "../assets/yw.png"
import img04 from "../assets/pjw.png"
import img05 from "../assets/mwm.png"
import img06 from "../assets/hww.png"
import {reactive,computed} from 'vue'
  const scientists = reactive([
        {name:"钱学森",title:"中国航天之父",img:img01,honor:"中国科学院自然科学奖一等奖，全国科技进步特等",desc:"1911年出生于上海，协助国家研制了核弹和氢弹，让我国步入核武俱乐部，中国人真正拥有了杀手锏，在世界上真正拥有了话语权，在导弹研制等方面也做出突出贡献。享誉海内外的国家杰出贡献科学家和中国航天事业的奠基人，被授予“共和国勋章”。"},
        {name:"袁隆平",title:"杂交水稻之父",img:img02,honor:"国家最高科学技术奖，国家科学技术进步奖、特等奖等",desc:"致力于杂交水稻技术的研究、应用与推广，发明“三系法”籼型杂交水稻，成功研究出“两系法”杂交水稻，创建了超级杂交稻技术体系，并提出并实施“种三产四丰产工程”，运用超级杂交稻的技术成果，被授予“共和国勋章”。"},
        {name:"杨伟",title:"歼20总设计师",img:img03,honor:"国家科技进步特等奖，国防科技进步特等奖等",desc:"中国第一型自主研发的第三代战斗机歼-10到新一代外贸机枭龙战机，从歼-10的系列改进型歼-10双座机、歼-10A、歼-10B、歼-10C到中国第四代战斗机歼-20飞机，是中国新一代歼击机电传飞控系统的组织者和开拓者，为中国航空科技和武器装备发展做出了突出贡献。"},
        {name:"潘建伟",title:"中国量子之父",img:img04,honor:"国家自然科学一等奖等",desc:"首次实验实现量子隐形传态及纠缠交换、终端开放的量子隐形传态、复合系统量子隐形传态、16公里自由空间量子隐形传态；首次实现三、四、五、六、八光子纠缠。在量子通信、量子计算以及多光子纠缠操纵等量子信息实验领域中做出的杰出贡献。"},
        {name:"马伟明",title:"中国电磁弹射之父",img:img05,honor:"国家科技进步奖一等奖等",desc:"带领科研创新团队在“舰船能源与动力”、“电磁发射技术”和“新能源接入技术”等领域开展了一系列应用基础理论研究、关键技术攻关和重大装备研制，引领了舰船综合电力和电磁发射两大颠覆性技术的发展，推进了军民通用新能源技术领域的进步。"},
        {name:"胡伟武",title:"龙芯总设计师",img:img06,honor:"中国科学院杰出成就奖等",desc:"2001年，胡伟武出任龙芯CPU首席科学家，2002年9月28日，中国第一枚通用CPU龙芯一号成功发布，终结了中国计算机产业“无芯”的尴尬历史，之后开发了2号、3号系列处理器和龙芯桥片系列，在政企、安全、金融、能源等应用场景得到了广泛的应用。"}
      ])
  //接收传递的参数
  const props = defineProps(['keywords'])
  // console.log(props.keywords)
  //计算属性
  let searchResultList = computed(()=>{
    let keywords = props.keywords
    let arr = [] //保存筛选的结果
    if(keywords){
      arr = scientists.filter((item)=>{
        return item.name.indexOf(keywords) !== -1
      })
    }else{
      arr = scientists
    }
    return arr
  })
</script>

<style scoped>
.list{
  width:100%;
  overflow: hidden;
}
.list>.item{
  width:48%;
  float:left;
  border:1px solid #ccc;
  margin-bottom:5px;
  overflow: hidden;
  padding:5px 10px;
  border-radius: 3px;
}
.list>.item:nth-of-type(2n){
  float:right;
}
.list>.item>.img{
  width:32%;
  float:left;
  padding-top:12px;
}
.list>.item>.img>img{
  width: 100%;
  border-radius: 3px;
}
.list>.item>.content{
  width:64%;
  float:right;
  text-align: left;
  font-weight: bold;
}
.list>.item>.content>.name {
  color: rgb(240, 101, 25);
  font-size: 1.2rem;
}
.list>.item>.content>.title {
  color: rgb(239, 179, 38);
  font-size: 1.1rem;
}
.list>.item>.content>.desc{
  font-weight: normal;
}
</style>
