<template>
    <div class="container page">
      <img src="../assets/img/ybt_banner.png">
      <img class="line" src="../assets/img/dashed_line.png">
      <p>　　常青树，是华夏保险推出的产品性价比市场领先的终身型重大疾病保险；医保通，是华夏保险推出的“低保费、高保障”的医疗险。</p>
      <p>　　华夏常青树+医保通，是最体现客户利益至上的重疾险组合，为客户提供最好的家庭健康防护网。</p>
      <div class="con">
        <img src="../assets/img/feature1.png">
      </div>
      <p>　　住院医疗全面覆盖：门急诊报销，住院前后全程呵护；社保内外费用可以给付，包括：手术费、药品费、膳食费、材料费、护理费等等。年度最高报销额度200万，终身报销额度500万。续保无忧，直至终身。</p>
      <div class="con">
        <img src="../assets/img/feature2.png">
      </div>
      <p>　　不分性别，费率低廉，如30岁308元/年，40岁385元/年。</p>
      <img class="line narrow" src="../assets/img/dashed_line.png">
      <span class="crossline"></span>
      <div class="con client">
        <img class="small" src="../assets/img/client_case.png">
      </div>

      <p class="brown">　　2016年末，小李爸爸为2岁的儿子购买了金牌产品组合常青树+医保通，首年保费5676元。2017年4月，宝宝因发烧到医院检查，被诊断为“急性淋巴细胞白血病”，确诊重疾后，公司依照常青树重大疾病险保险责任，赔付了50万元。</p>
      <img class="higher" src="../assets/img/table1.png">
      <p class="brown">　　治疗一直在持续，在扣除年度免赔额后，剩余自负部分，公司依照医保通产品责任进行了理赔，在医保通的一个保单年度内共赔付了10次，合计赔付184271.4元。</p>
      <img class="higher" src="../assets/img/table2.png">
      <p class="brown">　　2017年末，医保通自动续保成功。目前治疗仍在继续，后续的治疗我们依然承担责任。持续的保障将为小李带来全面呵护，使李爸爸后顾无忧。</p>
      <span class="crossline"></span>
      <div class="con">
        <img src="../assets/img/stagerate.png">
      </div>
      <img class="higher" src="../assets/img/table3.png">
      <div class="intro">
        <p>说明：</p>
        <p>　　1.本文中的常青树是指：目前在售的华夏常青树重大疾病系列保险产品；案例中的常青树是指华夏常青树重大疾病保险（全能版）。</p>
        <p>　　2.本资料仅供参考，具体的保险责任、责任免除等事项以我司华夏常青树重大疾病保险系列产品条款和《华夏医保通费用补偿医疗保险条款》及生效保险合同为准。</p>
      </div>
      <!-- <div class="banner"></div> -->
      <!-- <div class="exhibition">
        <h2>尊敬的客户：</h2>
        <p>因华夏医保通费用补偿性医疗保险续保条件为额度内终身续保，根据监管要求，市场上此类产品需在6月底前停止销售。</p>
        <p>为更好地满足客户新需求，设计有竞争力的保险产品，华夏保险现面向广大客户征求新医保通产品设计意见，凡填写医保通产品问卷调研客户，可获得<span>幸运抽奖</span>一次，感谢您的参与！（注：每个手机号可参与一次活动）。</p>
      </div> -->
      <div class="suppStyle"></div>
      <a @click="evn" :class="{cust:isCustomer}"></a>
      <transition name="fade">
        <div class="guide_mask" v-show="guide" @click="guide=false">
         <!--  <img src="../assets/img/guide.png" width="100%" height="100%"> -->
        </div>
      </transition>
    </div>
  
</template>
<script>

export default {
    name: 'ybtintro',
    data(){
      return {
        guide:false
      }
    },
    computed:{
      isCustomer(){
        return (rq()&&rq().type=="cust") ? true : false;
      }
    },
    mounted(){
      doShare("","百万医疗“医保通”震撼来袭 全国热销等你来抢！","开门红爆款！最低每天五毛钱，即可享高达每年200万、终身500万的住院医疗保障！","http://zmt.ihxlife.com/tenyears2/#/ybtintro/"+this.$route.params.id+"?type=cust",'http://zmt.ihxlife.com/tenyears2/ybt.png');
    },
    methods:{
      evn(){//判断来源 业务员OR客户
        (rq()&&rq().type=="cust") ? this.customer_click() : this.salesman_click();
      },
      customer_click(){
        this.$router.push(`/ybtquestion/${this.$route.params.id}`)
      },
      salesman_click(){
        this.guide = true;
      }
    }
}
</script>

<style lang='less' scoped>
@import url(../assets/css/main.less);
.page{z-index:0;}
div.container{
  padding-bottom: 7em;min-height:190vh;
  img{
    display:block;width: 100%;
    &.line{
      margin-bottom:.5rem;
      &.narrow{
        margin-bottom:.3rem;
      }
     }
    &.higher{
      // height:2rem;
      margin-bottom:.5rem;
      width:90%;
      margin-left:5%;
    }
  }
  p{
    color:@deepRed;font-size:1rem;margin-bottom:.5rem;padding: 0 1rem;
    &.brown{
      color:#4f4f4f;
    }
  }

  .con{
    position:relative;text-align:center;margin:1rem 0;
    img{
     width:60%;display:inline-block;
     &.small{
      width:45%;
     }
    }
  }

  span.crossline{
    display:block;height:.5rem;background:@lightGreen;
  }
  div.intro{
    height:14rem;background:url('../assets/img/introborder.png') no-repeat center center ;background-size:100%;padding-top: 11%;
    p{
      font-size:.8rem;padding: 0 1.5rem;margin-bottom:.2rem;
    }
  }
  div.suppStyle{
    background:#75c4b1;height:10rem;position:absolute;bottom:0;width:100%;z-index:-1;
  }
  // div.banner{
  //   // background: url('../assets/img/ybt_banner.png') no-repeat center center; background-size: 100%;height:40%;position:absolute;width:100%;
  // }
  // div.exhibition{
  //   background:#FFECAB;border: 1px solid #54ACA4;position:absolute;top:43%;width:90%;margin-left: 5%;border-radius: 5px;padding: 1em 3% 1.5em;
  //   p{
  //     color:#75314D;font-size:1.25em;line-height:1.6em;
  //     span{color:#eb5e12;font-weight:bold;}
  //   }
  //   h2{
  //     color:#75314D;font-size:1.4em;font-weight: bold;margin-bottom: .3em;
  //   }
  // }
  // img{width: 100%;}
  a{
    position: fixed;bottom: 2%;margin:0 5%;width: 90%;background: url('../assets/img/ybt_invite.png') no-repeat center center; background-size: 100%;height: 5em;line-height: 4.8em;text-align:center;font-size: 1.2em;color: #fff;
    &.cust{
      background: url('../assets/img/ybt_cust.png') no-repeat center center;background-size: 100%;
    }
  }
  div.guide_mask{
    position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: url('../assets/img/guide.png') no-repeat center center ; background-size: 100% 100%;
  }
}


</style>
