<template>
    <div class="page">
      <img @click="$router.push('/fcrank')" class="banner" src="../../assets/img/home/hbanner.png" alt="">
      <div class="container">
          <div :class="['block',{'animate':animate}]" v-for="(item) in activeList" :key="item.actName" >
            <img :src="item.imgUrl" alt="">
            <a @click="evn(item.url)">{{item.actName}}</a>
          </div>
      </div>
      <img class="bottom" src="../../assets/img/home/hbottom.png" alt="">
    </div>
  
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      activeList: [
        {
          imgUrl: require("../../assets/img/home/hact1.png"),
          actName: "创业脸谱",
          url: `http://new.wufutian.com/?a=hxlife/zgs&b=szy&c=one&&salesmanId=${
            rq().salesmanId
          }`
        },
        {
          imgUrl: require("../../assets/img/home/hact2.png"),
          actName: "医保通特惠活动",
          url: `/ybtth${rq() ? "/" + rq().salesmanId : ""}`
        },
        {
          imgUrl: require("../../assets/img/home/hact3.png"),
          actName: "常青树（多倍版）评鉴",
          url: `/cqsth${rq() ? "/" + rq().salesmanId : ""}`
        },
        {
          imgUrl: require("../../assets/img/home/hact4.png"),
          actName: "福临门（少儿版）评鉴",
          url: `/intro${rq() ? "/" + rq().salesmanId : ""}`
        },
        {
          imgUrl: require("../../assets/img/home/hact5.png"),
          actName: "家庭保障DIY",
          url: `https://sales.ihxlife.com/imr/views/lazy_plan/information_entry.html?v=0719&agentState=1&agentCode=${
            rq().salesmanId
          }`
        },
        {
          imgUrl: require("../../assets/img/home/hact6.png"),
          actName: "更多精彩活动待续",
          url: "no"
        },
        {
          imgUrl: require("../../assets/img/home/hact7.png"),
          actName: "查看我的客户",
          url: `/rank${rq() ? "/" + rq().salesmanId : ""}`
        },
        {
          imgUrl: require("../../assets/img/home/hact8.png"),
          actName: "活动管理",
          url: `/team${rq() ? "?userid=" + rq().salesmanId : ""}`
        }
      ],
      animate: false
    };
  },
  computed: {
    
  },
  mounted() {
    common.noShare();
    // doShare("","填问卷 抽大奖","新福临门上市有奖评鉴  春暖花开华夏好礼相赠","http://zmt.ihxlife.com/tenyears/#/intro/"+rq().salesmanId+"?type=cust",'http://zmt.ihxlife.com/tenyears/pic.png');
    setTimeout(() => {
      this.animate = true;
    }, 100);
  },
  methods: {
    evn(x) {
      //点击跳转
      if(x==="no"){
        return;
      }else if (x.indexOf("http") == -1) {
        this.$router.push(x);
      } else {
        location.href = x;
      }
    },
    to_intro() {
      this.$router.push(`/intro${rq() ? "/" + rq().salesmanId : ""}`);
    },
    to_team() {
      this.$router.push(`/team${rq() ? "?userid=" + rq().salesmanId : ""}`);
    }
  }
};
</script>

<style lang='less' scoped>
@import url("../../assets/css/main.less");
div.page {
  z-index: -2;
  img {
    width: 100%;
    display: block;
  }

  div.container {
    display: flex;
    background: url("../../assets/img/home/bg.png") top;
    background-size: 100%;
    // min-height: 100vh;
    flex-wrap: wrap;
    div.block {
      width: 50%;
      transform: scale(0);
      opacity: 0;
      transition: all 0.2s ease;
      &.animate {
        transform: scale(1);
        opacity: 1;
      }
      img {
        width: 72%;
        margin: 0 auto;
      }

      a {
        display: block;
        margin: 0em auto 1em;
        width: 80%;
        font-size: 1em;
        color: #fff;
        text-decoration: none;
        line-height: 3;
        text-align: center;
        height: 3em;
        background: url("../../assets/img/home/hbtn.png") no-repeat center;
        background-size: 100%;
      }
    }
  }
}
</style>
