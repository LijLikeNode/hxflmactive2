<template>
  <div class="page">
      <img src="../../assets/img/cqsth/banner.png" alt="">
      <div class="container">
        <p>为响应监管“保险姓保”号召，追求极致客户体验，华夏保险隆重推出疾病全保障、医疗全守护的<span class="green">常青树+医保通+附加医疗</span>保险产品组合,重磅出击、火爆市场！</p>

        <!-- 1.产品特色 -->
        <div class="block1">
          <h1><img src="../../assets/img/cqsth/feature.png" alt=""></h1>

          <div class="con" v-for="(item,index) in featuresList" :key="item.title">
            <em class="arrow" v-if='index!=featuresList.length-1'></em>
            <h2>{{item.title}}</h2>
            <div class="items" v-for="(val) in item.content" :key="val.title">
              <h3><b></b>{{val.title}}</h3>
              <ul>
                <li  v-for="intro in val.detailList" :key="intro"><i></i>{{intro}}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 2.投保案例 -->
        <div class="block1">
          <h1><img src="../../assets/img/cqsth/case.png" alt=""></h1>

          <p>30岁王先生是某公司中层管理人员，正值而立之年，王先生决定为自己的健康加一份保障，具体险种计划如下：</p>
          <div class="table">
            <img src="../../assets/img/cqsth/table1.png" alt="">
          </div>
          <h5>王先生将获得以下保障：</h5>
          <div class="table">
            <img src="../../assets/img/cqsth/table2.png" alt="">
          </div>

          <div class="con" v-for="(item,index) in caseList" :key="item.title">
            <em class="arrow" v-if='index!=featuresList.length-1'></em>
            <h2>{{item.title}}</h2>
            <p v-for="para in item.paragraph" :key="para">{{para}}</p>

            <div class="title2">
              <div class="cons">
                <h3>{{item.nextTitle}}</h3>
              </div>
              
            </div>
            <p v-if="item.tips">{{item.tips}}</p>
            <div class="items" v-for="(val) in item.content" :key="val.title">
              <h3><b></b>{{val.title}}</h3>
              <ul>
                <li class="noStyle"  v-for="intro in val.detailList" :key="intro">{{intro}}</li>
              </ul>
            </div>
          </div>
        </div>



        <!-- 3.综述 -->
        <div class="content">
          <div class="border">

          </div>
          综上，王先生累计报销费用：6万元意外住院医疗 + 37万元癌症住院医疗 = 43万元；<br/>王先生累计重疾理赔：30万元肺癌确诊理赔 + 30万元重大器官移理赔 = 60万元；<br/>王先生合计理赔 103万元<br/><br/>且①常青树（多倍版）剩余四组重疾责任依旧有效；<br>②医保通（普惠版）如果未停售，保障有效至终身，可持续报销后续住院医疗费用，每年最高500万额度。
        </div>


        <!-- 4.说明 -->
        <div class="intro">
          <h3><img src="../../assets/img/yx_sm_05.png" alt="">说明</h3>
          <p>1.常青树（多倍版）指华夏常青树（多倍版）重大疾病保险；医保通（普惠版）指华夏医保通（普惠版）医疗保险；附加质子重离子指华夏附加质子重离子医疗保险；附加住院医疗2014指华夏附加住院费用补偿医疗保险（2014）；</p>
          <p>2.本资料仅供参考，具体的保险责任、责任免除等事项以我司《华夏常青树（多倍版）重大疾病保险条款》《华夏医保通（普惠版）医疗保险条款》《华夏附加质子重离子医疗保险条款》《华夏附加投保人豁免保费重大疾病保险条款》《华夏附加住院费用补偿医疗保险（2014）条款》及生效保险合同等为准。</p>


        </div>
       
        
      </div>
      <div class="btn" @click="evn">
        {{btn_text}}
      </div>
      <transition name="fade">
          <ShareMask v-if="maskArrow" @maskClose="maskArrow=false"></ShareMask>
        </transition>

  </div>
</template>

<script>
import ShareMask from "../ybtth/ShareMask";
export default {
  components: {ShareMask},
  props: {},
  data() {
    return {
      maskArrow:false,
      featuresList: [
        {
          title: "常青树（多倍版）",
          content: [
            {
              title: "重疾赔六次，癌症单分组 ",
              detailList: [
                "重疾分6组，每组可赔一次。",
                "癌症单独分组，更加人性贴心。"
              ]
            },
            {
              title: "中症责任新，病种一五五 ",
              detailList: [
                "创新中症责任，可赔50%保额×2次。",
                "155种疾病，再创病种数量新纪录。"
              ]
            },
            {
              title: "赔过就豁免，随便重中轻 ",
              detailList: [
                "重疾、中症、轻症都可豁免保费。",
                "保费豁免，合同继续有效。"
              ]
            },
            {
              title: "身故/全残/疾病终末期 ",
              detailList: [
                "18周岁前，等待期后给付2倍已交保费。",
                "18周岁后，等待期后按基本保额、已交保费和现金价值较大者赔付。"
              ]
            }
          ]
        },
        {
          title: "医保通（普惠版）",
          content: [
            {
              title: "100种重疾0免赔 免赔额最低5000 ",
              detailList: [
                "100种重疾：0元免赔。",
                "一般医疗：1万元免赔额（无理赔每2年可降低1000元，最低5000元。例：无理赔，第1年1万；第3年9000元；第5年8000元......第11年5000元）。"
              ]
            },
            {
              title: "保障高达500万",
              detailList: [
                "每年拥有高达500万元的医疗保障额度，其中一般医疗200万元；100种重疾医疗200万元；附加质子重离子医疗100万元。"
              ]
            },
            {
              title: "有无医保均可100%给付",
              detailList: [
                "100%给付，有无医保均可享，新农合、城镇医保、大学生医保都属医保。投保时选择有医保，但实际上没有医保或未经医保报销的，按照应赔付金额的60%赔付。"
              ]
            },
            {
              title: "先进质子重离子 百万保额零免赔",
              detailList: [
                "附加质子重离子治疗，每年最高100万保障额度，零免赔。"
              ]
            },
            {
              title: "多款外购靶向药免费用",
              detailList: [
                "首次投保医保通（普惠版）医疗保险，可获赠为期1年的“医保外肿瘤靶向及免疫用药服务”，被保险人可凭相关诊断材料向第三方合作机构提出用药申请，审核通过后，可免费获得部分靶向及免疫类药品。"
              ]
            }
          ]
        },
        {
          title: "附加住院医疗2014",
          content: [
            {
              title: "一般住院医疗“0”元免赔 ",
              detailList: [
                "附加住院医疗（2014）与医保通（普惠版）医疗保险搭配购买，可以实现一般住院医疗“100%”赔付。即住院医疗（2014）的保额可用于抵扣医保通（普惠版）的免赔额，进而实现整体保障方案中的一般住院医疗保险责任的“100%”赔付。"
              ]
            }
          ]
        }
      ],
      caseList: [
        {
          title: "1.假如王先生遭遇意外车祸",
          paragraph: [
            "王先生在投保一年后，在一次出游时不幸发生车祸，导致小腿骨折，随即入院。在住院治疗的过程中，由于小腿伤势严重需要手术植入钢板，在选择进口钢板还是国产钢板的时候，王先生毅然选择了进口钢板及进口手术器材。",
            "王先生康复较快，在医院住了一个月就办理了出院，住院期间累计花费医疗费用6万元。"
          ],
          nextTitle: "费用报销",
          tips:'',
          content: [
            {
              title: "社保报销： ",
              detailList: [
                "王先生在住院期间6万元的治疗费用，扣除社保免赔额、自付部分、自费部分共报销1.8万元；"
              ]
            },
            {
              title: "附加住院医疗(2014)： ",
              detailList: [
                "社保未报销部分4.2万元，经住院医疗（2014）共报销1万元；"
              ]
            },
            {
              title: "医保通(普惠版)：",
              detailList: [
                "由于附加住院医疗报销的1万元可以抵扣医保通免赔额，故剩余3.2万元住院费用100%报销；"
              ]
            }
          ]
        },
        {
          title: "2.不幸患癌",
          paragraph: [
            "王先生投保两年后，在一次公司例行体检中检查出肺部有阴影，之后到三甲医院进行复查后，不幸被确诊为肺癌早期。",
            "在接下来的一年时间里，王先生都在医院中度过，医院对王先生持续进行了放射治疗和化学治疗，暂时癌细胞得到了控制，尚未发生扩散，但由于放化疗的副作用及癌症本身导致王先生由180斤暴瘦到110斤，骨瘦如柴、苦不堪言。",
            "在以上治疗过程中，王先生累计花费医疗费用37万元，我们来看一下这些医疗费用如何通过我们的保障方案进行弥补。"
          ],
          nextTitle: "费用报销及补偿",
          tips:'',
          content: [
            {
              title: "癌症确诊：",
              detailList: [
                "在肺癌确诊之后，保险公司给付30万元重疾保险金，保单其余5组癌症责任继续有效；"
              ]
            },
            {
              title: "社保报销：",
              detailList: [
                "王先生37万元的癌症治疗费用，扣除免赔额、自付部分、自费部分、社保报销11万元；"
              ]
            },
            {
              title: "医保通(普惠版)：",
              detailList: [
                "由于被保险人患肺癌，医保通(普惠版)“0”免赔额，故剩余26万元住院费用100%报销；"
              ]
            }
          ]
        },
        {
          title: "3.器官移植",
          paragraph: [
            "王先生投保四年后，由于肺癌恶化，需要进行“肺”器官移植。幸运的是找到了“肺”，但需要支付30万元的器官购买费用，以及近35万元的器官移植费用。",
            "由于王先生患癌后身体素质大不如前，无法胜任之前的工作，已经辞职在家专心养病，导致这三年并没有任何收入，全家人的生活支出全部靠王太太一人承担，目前家庭状况已经无力承担器官购买及移植费用。",
            "在此绝望之际，王先生打电话咨询了华夏保险…"
          ],
          nextTitle: "费用报销",
          tips:'华夏保险首先对王先生的不幸遭遇表示慰问，并依据王先生当前的保单状态进行了理赔说明：',
          content: [
            {
              title: "第一：",
              detailList: [
                "“肺”器官移植属于常青树（多倍版）分组中第二组，即重大器官移植，根据条款可以赔付30万元重大疾病理赔金，保单剩余四组重疾责任仍旧有效；"
              ]
            },
            {
              title: "第二：",
              detailList: [
                "重大器官移植手术费用，可以根据实际发生金额，利用附加住院医疗（2014）+医保通（普惠版）实现100%报销。"
              ]
            },
          ]
        }
      ]
    };
  },
  watch: {},
  computed: {
    btn_text(){
      return (rq()&&rq().type=="cust") ? "填写问卷" : "邀请客户";
    }
  },
  methods: {
     evn(){//判断来源 业务员OR客户
        (rq()&&rq().type=="cust") ? this.customer_click() : this.salesman_click();
      },
      customer_click(){
        this.$router.push(`/cqsthqa/${this.$route.params.id}`)
      },
      salesman_click(){
        this.maskArrow = true;
      }
  },
  created() {},
  mounted() {
    doShare("","王牌组合 让保障没有漏洞","常青树+医保通+附加医疗  疾病全保障 医疗全守护","http://zmt.ihxlife.com/tenyears2/#/cqsth/"+this.$route.params.id+"?type=cust",'http://zmt.ihxlife.com/tenyears2/cqsdbb.png');
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/main.less");
@mainColor: #1a9731;
@blockBgColor: #d8e58d;
.page {
  background: url("../../assets/img/cqsth/ybtbg.png") top;
  background-size: 100%;
  padding-bottom:7em;
  img {
    width: 100%;
  }
  div.container {
    margin: 0 auto;
    width: 92%;
    p {
      text-indent: 2em;
      font-size: 1.1em;
      span {
        &.green {
          color: @mainColor;
        }
      }
    }

    div.content{
      border:.2em solid #1a9731;
      padding: 1.5em;
      position: relative;
      width: 95%;
      z-index: 2;
      color:@mainColor;
      margin-top:-1.5em;
      div.border{
        height: 102%;
        width: 102%;
        border:.2em solid  #88c689;
        top: -.8em;
        left: .5em;
        position: absolute;
        
      }
    }

    div.intro{
      margin-top: 1.5em;
      h3{
        color: @mainColor;
        font-size:1em;
        img{
          width: 1.2em;
          vertical-align: middle;
          margin-right: .2em;
        }
      }
      p{
        text-indent: 0;
        font-size:1em;
        margin-top: 1em;
      }
    }

    div.block1 {
      margin-top: 2em;
      h1 {
        text-align: center;
        margin-bottom: 1em;
        img {
          width: 85%;
        }
      }
      div.table {
        margin: 1em 0;
      }

      div.con {
        border: 1px solid #8d8988;
        background: @blockBgColor;
        padding: 0.8em 0 1.5em 0;
        border-radius: 8px;
        margin-bottom: 4em;
        position: relative;
        .arrow {
          position: absolute;
          bottom: -3em;
          width: 1.7em;
          height: 1.7em;
          background: url("../../assets/img/cqsth/arrow.png") no-repeat center;
          background-size: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        p {
          padding: 0 3%;
          font-size: 1em;
        }
        h2 {
          width: 76%;
          font-size: 1.2em;
          color: #fff;
          text-align: center;
          padding: 1em 0;
          background: url("../../assets/img/cqsth/titlebg.png") no-repeat center;
          background-size: 100%;
          margin: 0 auto;
        }

        div.title2 {
          text-align: center;
          margin: 1em 0;
          div.cons {
            display: inline-block;
            width: 15em;
            height: 3em;
            padding: 0.2em;
            background: #1a4064;
          }
          h3 {
            color: #fff;
            border: 1px solid #fff;
            line-height: 2.53;
          }
        }

        div.items {
          padding: 0 7%;
          h3 {
            color: @mainColor;
            font-size: 1.1em;
            position: relative;
            margin: 0.3em 0;
            b {
              position: absolute;
              width: 1em;
              height: 1em;
              background: url("../../assets/img/cqsth/tip.png") no-repeat center;
              background-size: 100%;
              left: -1.2em;
              top: 0.1em;
            }
          }

          ul {
            li {
              position: relative;
              margin-left: 0.5em;
              &.noStyle {
                margin-left: 0;
              }
              i {
                width: 0.3em;
                height: 0.3em;
                border-radius: 1em;
                background: @mainColor;
                position: absolute;
                left: -0.6em;
                top: 0.55em;
              }
            }
          }
        }
      }
    }

    div.block2 {
      h1 {
        text-align: center;
        margin-bottom: 1em;
        img {
          width: 85%;
        }
      }

      div.table {
        margin: 1em 0;
      }
    }
  }

  div.btn{
    width: 80%;
    padding:1.8em 0 2em 0;
    position: fixed;
    bottom: 1.5em;
    left: 10%;
    background: url('../../assets/img/cqsth/btnbg.png') no-repeat center;
    background-size: 100%;
    text-align:center;
    color:#f9f5e5;
  }
}
</style>