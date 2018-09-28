<template>
  <div class="container page" v-loading='loading' 
    element-loading-text="正在提交，请稍等"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <img src="../assets/img/banner.png" alt="">
    <div class="add_info">
      <b></b>
      <b class="cross"></b>
      <b class="leaf"></b>
      <ul>
        <li><input type="text" v-model="name" placeholder="请输入姓名（必填）"></li>
        <li><input type="number" v-model="phone" placeholder="请输入电话（必填）"></li>
        <li><input type="number" v-model="identifycode" placeholder="请输入验证码（必填）"><span :class="count !== '发送<br/>验证码'? 'nomal': ''" @touchstart="send_code($event)"><b v-html="count"></b></span></li>
        <li><input type="text" v-model="workcode" :readonly="source=='online'" placeholder="请输入寿险顾问工号（必填）"></li>
        <li><h3 class="submit_btn" @click="submit">确定</h3></li>
      </ul>
    </div>
  </div>
</template>
<script>
//source;//客户来源 online：线上 offline：线下
import codeIdMaker from '../pluginCom/codeIdMaker.js'
export default {
  name: "index",
  data() {
    return {
      name: "",
      phone: "",
      identifycode: "",
      workcode: "",
      codeId: "",
      count: "发送<br/>验证码",
      loading: false,
      countHtml: "发送<br/>验证码",
      source: "",
      product_type: "flm"
    };
  },
  created() {
    this.codeId = rq() && rq().codeId ? rq().codeId : "";
    this.source = rq() && rq().sourceFrom ? "online" : "offline";
    this.workcode = rq() && rq().salesmanId ? rq().salesmanId : "";
    this.product_type = rq() && rq().product_type ? rq().product_type : "flm";

    //判断来源活动  如果是家庭diy和 创业脸谱  需要手动生成codeid
    if(this.product_type==='ncqs'||this.product_type==='cylp'){
      this.codeId = codeIdMaker(this.product_type);
    }
  },
  mounted() {
    common.noShare();
  },
  computed: {
    // nomal() {
    //   return this.count == "";
    // }
  },
  methods: {
    send_code() {
      //发送短信验证码
      if (this.count == "发送<br/>验证码") {
        if (this.check_phone_format()) {
          ax("sendVercode.do", { phone: this.phone }).then(response => {
            if (response.result && response.result == "succ") {
              this.count_down();
            }
            popalert.fade(response.msg);
          });
        }
      }
    },
    count_down(e) {
      //倒计时
      this.count = 60;
      // this.countHtml = `60`
      let timer = setInterval(() => {
        if (this.count != 1) {
          this.count--;
          // this.countHtml = `${this.count}`
        } else {
          clearInterval(timer);
          this.count = "发送<br/>验证码";
        }
      }, 1000);
    },
    check_empty() {
      //查空
      let pass =
        this.name != "" &&
        this.sex != "" &&
        this.identifycode != "" &&
        this.workcode != "";
      if (!pass) {
        popalert.fade("请您完善回执信息");
      }
      return pass;
    },
    check_format() {
      //检查格式
      //1.姓名格式
      //2.电话号码格式
      //3.短信验证码
      //4.工号
      if (this.check_name_format()) {
        if (this.check_phone_format()) {
          return true;
        }
      }
    },
    check_name_format() {
      let pass = /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(this.name);
      !pass ? popalert.fade("请输入汉字或英文姓名") : "";
      return pass;
    },
    check_phone_format() {
      let pass = /^1[345789][0-9]{9}$/.test(this.phone);
      !pass ? popalert.fade("请输入正确的手机号") : "";
      return pass;
    },
    check_indentifycode_format() {},
    submit() {
      if (this.check_empty()) {
        if (this.check_format()) {
          this.loading = true;
          let param = {
            name: this.name,
            phone: this.phone,
            code: this.identifycode,
            salesmanId: this.workcode,
            codeId: this.codeId,
            source: this.source,
            product_type: this.product_type
          };
          ax("submitInfo.do", param).then(response => {
            // console.log(response);
            this.loading = false;
            if (response.result == "succ") {
              sessionStorage.name = this.name;
              sessionStorage.phone = this.phone;
              this.$router.push(`/present/${this.codeId}/${this.product_type}`);
            } else {
              this.loading = false;
              popalert.fade(response.msg);
            }
            // response.result=='succ'?this.$router.push(`/present/${this.codeId}`):popalert.fade(response.msg);
          });
        }
        // this.check_format()?ax('submitInfo.do',{'name':this.name,'phone':this.phone,'code':this.identifycode,'salesmanId':this.workcode,'codeId':this.codeId}).then(response=>{
        //   // console.log(response);
        //   if(response.result=='succ'){
        //     sessionStorage.name = this.name;
        //     sessionStorage.phone = this.phone;
        //     this.$router.push(`/present/${this.codeId}`)
        //   }else{
        //     popalert.fade(response.msg);
        //   }
        //   // response.result=='succ'?this.$router.push(`/present/${this.codeId}`):popalert.fade(response.msg);
        // }):'';
      }
    }
  }
};
</script>

<style lang='less' scoped>
@import url(../assets/css/main.less);
@mainColor: #ffb629;
div.container {
  img {
    width: 100%;
  }
  background: url(../assets/img/bg.png) no-repeat center center;
  background-size: cover;
  padding-top: 1em;
  div.add_info {
    width: 90%;
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 20px 0px rgba(230, 189, 26, 0.898);
    padding: 4.5em 3em 1.5em;
    border-radius: 10px;
    margin-left: 5%;
    margin-top: 4em;
    ul {
      li {
        height: 3.3em;
        font-size: 1.3em;
        h3 {
          background: linear-gradient(to top, #fd5308, #f88d5d);
          border-radius: 5em;
          height: 2.7em;
          line-height: 2.7;
          text-align: center;
          color: #fff;
        }
      }
      li:not(:last-child) {
        border: 1px solid @mainColor;
        background: #fff;
        border-radius: 50px;
        height: 2em;
        margin-bottom: 1.3em;
        position: relative;
        input {
          background: none;
          border: none;
          outline: none;
          display: block;
          width: 100%;
          text-align: center;
          line-height: 2;
          color: @mainColor;
          // color:#3fb600;
        }
        input::-webkit-input-placeholder {
          color: @mainColor;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: @mainColor;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: @mainColor;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: @mainColor;
        }
        span {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 5.1em;
          color: @mainColor;
          text-align: center;
          border-radius: 5px;
        }
      }
      li:nth-of-type(3) {
        background: transparent;
        border: none;
        input,
        span {
          background: #fff;
          border-radius: 50px;
          border: 1px solid @mainColor;
        }
        input {
          width: 72%;
        }
        span {
          width: 26%;
          font-size: 0.6em;
          line-height: 1.5;
          &.nomal {
            line-height: 3;
          }
          b {
            width: 100%;
            position: absolute;
            font-weight: normal;
            background: transparent;
            top: 43%;
            left: 50%;
            transform: translate(-50%, -40%);
          }
        }
      }
    }
    b {
      position: absolute;
      top: 0em;
      left: 3.5em;
      width: 8em;
      height: 3em;
      background: url(../assets/img/arrow.png) no-repeat top;
      background-size: 100%;
      &.leaf {
        background: url(../assets/img/crossman.png) no-repeat top;
        background-size:45%;
        height: 7em;
        top:-2.5em;
        left: -1.5em;
      }
      &.cross {
        background: url(../assets/img/leaf.png) no-repeat top;
        background-size: 100%;
        left: 72%;
        top:-3em;
        height: 6.5em;
      }
    }
  }
}
</style>