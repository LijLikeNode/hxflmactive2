<template>
  <div :class="['container',{'active':maskShow}]">
      <!-- 1.问题 -->
      <div class="content" v-show="startAnswer">
          <img src="../../assets/img/flm/qbanner1.png" alt="">
          <h3>{{question.title}}</h3>
          <p v-for="(item,index) in question.answers" :key="item" @click="chooseAnswer=index"><span :class="[{'active':chooseAnswer===index}]"></span>{{item}}</p>

          <button @click="checkAnswer">提交答案</button>
          <b class="close" @click="close"></b>
      </div>

        <!-- 2.回答正确 -->

     <div :class="['content','animate',{'active':right=='right'}]">
          <img src="../../assets/img/flm/qbanner2.png" alt="">

          <p class="tips">恭喜您，成功答对了题目，点击按钮，参与幸运抽奖活动。</p>

          <button @click="toIndex">参与抽奖</button>
          <b class="close" @click="close"></b>
      </div>

        <!-- 3.回答错误 -->

        <div :class="['content','animate',{'active':right=='false'}]">
          <img src="../../assets/img/flm/qbanner3.png" alt="">

          <p class="tips">很抱歉，您的回答有误。为了避免对您造成误导，请您再次确认活动规则。</p>

          <button @click="reRead">重新阅读</button>
          <b class="close" @click="close"></b>
      </div>


  </div>
</template>

<script>
import codeIdMaker from '../../pluginCom/codeIdMaker.js'
export default {
  components: {},
  props: ["maskShow"],
  data() {
    return {
      question: {
        title: "",
        answers: ["1",  "2", "3", "4"],
        rightAnswer: ""
      },
      questionList: [
        {
          title: "下列哪项不属于本次活动产品范围？",
          answers: ["福临门2015", "福临门2016", "福临门（少儿版）", "常青树（全能版）"],
          rightAnswer:3
        },
        {
          title: "当投保人符合本次活动条件时，可以为以下哪些亲属单独投保医保通？",
          answers: ["本人", "子女", "配偶", "以上全部"],
          rightAnswer:3
        },
        {
          title: "“华夏医保通（普惠版）医疗保险”年度最高给付金额为？",
          answers: ["1万元", "5万元", "50万元", "500万元"],
          rightAnswer:3
        },
        {
          title: "参与“一人福临门，全家医保通”单张福临门主险的年交保费×交费年期最低应为？",
          answers: ["1万元", "2万元", "5万元", "10万元"],
          rightAnswer:3
        }
      ],
      right: false,
      chooseAnswer: "",
      //   maskShow: false,
      startAnswer: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    toIndex(){
      this.$router.push(`/?codeId=${codeIdMaker('ybtth')}&sourceFrom=online&salesmanId=${this.$route.params.id}&product_type=ybtth`)
    },
    checkAnswer() {
      if (this.chooseAnswer === this.question.rightAnswer){ this.right = "right"; }
      else if (this.chooseAnswer===''){ popalert.fade('请您选择答案'); return;}
      else {this.right = "false";}
      this.chooseAnswer = "";
      this.startAnswer = false;
    },
    reRead() {
      setTimeout(() => {
        this.startAnswer = true;
      }, 800);
      this.right = "";
    },
    close(){
        setTimeout(()=>{
            this.startAnswer = true;
            this.right = '';
        },200)
        
        this.$emit('close');
    }
  },
  created() {},
  mounted() {
      const num = Math.round(Math.random()*3);
      this.question = this.questionList[num];
  }
};
</script>
<style lang="less" scoped>
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(144, 138, 138, 0.6);
  transition: all 0.2s linear;
  transform: rotateY(90deg);
  &.active {
    transform: rotateY(0deg);
  }
  // transform: rotateY(90deg);
  img {
    width: 100%;
  }
  .content {
    width: 80%;
    margin-left: 10%;
    position: absolute;
    top: 30%;
    background: #fff;
    padding: 4em 0 1em 0;
    border-radius: 10px;
    &.animate {
      top: -40%;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    &.active {
      top: 40%;
    }
    b{
        position: absolute;
        bottom:-3em;
        left: 50%;
        transform: translateX(-50%);
        width: 2em;
        height: 2em;
        background: url('../../assets/img/close.png') no-repeat center;
        background-size:100%;
    }
    img {
      position: absolute;
      top: -9em;
      left: 0;
    }
    h3 {
      font-size: 1.2em;
      margin-bottom: 1em;
      margin-left: 3em;
    }
    p {
      font-size: 1.2em;
      margin-left: 3em;
      margin-bottom: 0.4em;
      &.tips {
        text-indent: 2em;
        margin: 0 3em;
      }
      span {
        display: inline-block;
        width: 1.3em;
        height: 1.3em;
        margin-top: -3px;
        margin-right: 0.7em;
        vertical-align: middle;
        background: url("../../assets/img/flm/qnocheck.png") no-repeat center;
        background-size: 100%;
        &.active {
          background: url("../../assets/img/flm/qcheck.png") no-repeat center;
          background-size: 100%;
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
    margin-top: 1em;
    outline: none;
  }
}
</style>