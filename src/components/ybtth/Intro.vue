<template>
    <div class="page">
        <img src="../../assets/img/flm/flmbanne.png" alt="">
        <div class="text">
            <h1>服务告知</h1>
            <p>为提升客户满意度，践行“让华夏充满爱”的企业使命，让更多的客户享有高端医疗保障，华夏保险秉承“客户利益至上”的核心价值观，特在“中秋节”和“国庆节”来临之际，隆重推出“一人福临门，全家医保通”特惠活动，致力于让每一位家庭成员都能享受高端医疗保障，让爱无缺口，让爱更完美！
            </p>
            <h1>活动规则</h1>
            <p class="item">当客户同时符合以下所有条件时，投保人可为全家人(投保人本人、配偶、所有子女）单独投保年度最高给付500万的“华夏医保通（普惠版）医疗保险”。
            </p>
            <h2><span></span>条件一</h2>
            <p class="item">客户作为投保人曾为“本人配偶或子女”投保过福临门系列产品，且相关保单处于已生效状态。</p>
            <h2><span></span>条件二</h2>
            <p class="item">客户投保的“华夏福临门年金保险”，单张保单的福临门主险的年交保费×交费年期≥10万元。</p>
            <h2><span></span>条件三</h2>
            <h3>福临门系列产品包括以下九款：</h3>
        </div>
        
        <div class="table">
            <h1>产品名称</h1>
            <div class="flex">
                 <div class="left">福临门年金保险</div>
                <ul class="right">
                    <li>2014尊享版</li>
                    <li>2015</li>
                    <li>富贵版</li>
                    <li>2015至尊版</li>
                    <li>鑫享版（111409）</li>
                    <li>如意版</li>
                    <li>吉祥版</li>
                    <li>少儿版</li>
                </ul>
            </div>
           
            <h1 class="bot">如意来年金保险</h1>
        </div>
        <button @click="handleClick">{{btn_text}}</button>

        <img src="../../assets/img/flm/flmbottom.png" alt="">
        <Question :maskShow="maskShow" @close="maskShow=false"></Question>
        <transition name="fade">
          <ShareMask v-if="maskArrow" @maskClose="maskArrow=false"></ShareMask>
        </transition>
    </div>
</template>

<script>
import Question from "./Question";
import ShareMask from "./ShareMask";
export default {
  data() {
    return {
        maskShow:false,
        maskArrow:false,
    };
  },
  components:{Question,ShareMask},
  computed: {
    btn_text() {
      return rq() && rq().type == "cust" ? "参与有奖问答" : "邀请客户";
    }
  },
  mounted(){
    doShare("","华夏巨献|“一人福临门，全家医保通”特惠活动重磅来袭","一人投保，全家受益！华夏特别巨献——“一人福临门，全家医保通”特惠活动重磅来袭，你还在等什么？","http://zmt.ihxlife.com/tenyears2/#/ybtth/"+this.$route.params.id+"?type=cust",'http://zmt.ihxlife.com/tenyears2/ybtth.png');
  },
  methods:{
    handleClick(){
       let type = rq() && rq().type == "cust" ? 1 : 0;
       type===1?this.maskShow=true:this.maskArrow=true;
    }
  }
};
</script>


<style lang="less" scoped>
@import url("../../assets/css/main.less");
div.page {
  min-height: 100vh;
  background: url(../../assets/img/flm/flmbg.png) top center;
  background-size: 100%;
  // padding-top:1em;
  img {
    width: 100%;
  }
  div.text {
    h1 {
      width: 10em;
      font-size: 1.2em;
      color: #fff;
      line-height: 2.5em;
      margin: 0 auto 0.8em;
      text-align: center;
      background: url("../../assets/img/flm/titleBg.png") no-repeat center
        center;
      background-size: 100%;
    }
    p {
      margin-bottom: 1em;
      text-indent: 2em;
      padding: 0 5%;
      letter-spacing: 0.1em;
      font-size: 1.1em;
      &.item {
        margin-bottom: 0;
      }
    }

    h2 {
      padding: 0 5%;
      display: flex;
      font-size: 1.2em;
      line-height: 2;
      color: #df4858;
      span {
        width: 2em;
        height: 2em;
        background: url("../../assets/img/flm/flow.png") no-repeat center center;
        background-size: 80%;
      }
    }

    h3 {
      padding: 0 5%;
      font-size: 1.2em;
    }
  }

  div.table {
    width: 90%;
    margin-left: 5%;
    background: #fff;
    box-shadow: 3px 3px 20px rgb(138, 133, 133);
    margin-top: 1em;
    h1 {
      background: linear-gradient(to bottom, #e7959d, #df4858);
      color: #fff;
      padding: 0.5em 1.8em;
      &.bot {
        background: transparent;
        color: #000;
      }
    }

    div.flex {
      display: flex;
      border-bottom: 1px solid #eea1a9;
      div.left {
        width: 40%;
        display: flex;
        align-items: center;
        border-right: 1px solid #eea1a9;
        padding-left: 1.8em;
      }
      ul {
        flex-grow: 1;
        li {
          padding: 0.3em 2em;
          border-bottom: 1px solid #eea1a9;
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
  button {
    background: url("../../assets/img/flm/btnBg.png") no-repeat center;
    background-size: 100%;
    border: none;
    width: 11em;
    height: 4em;
    color: #fff;
    font-size: 1.2em;
    margin: 0 auto;
    display: block;
    margin-top: 2em;
    outline: none;
  }
}
</style>


