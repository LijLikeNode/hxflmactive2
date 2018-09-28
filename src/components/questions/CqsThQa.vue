<template>
    <div class="container page">
      <!-- <img src="../assets/img/bg_ask.png"> -->

      <div class="add_info">
          <img src="../../assets/img/new/n_bgt.png" alt="">

          <div class="content">
                <h2>为真情回馈新老客户，公司结合当前客户需求，推出了常青树（多倍版）+医保通（普惠版）+附加住院医疗2014产品组合计划。为了确保向客户提供高品质的服务体验，所有理财顾问必须获得一定数量客户的好评才能获得该产品的销售资格，请您对理财顾问的表现进行评价，感谢您的支持。</h2>
            <ul>
                <li>
                    <h1>1.请问您对华夏保险整体情况是否已经了解？</h1>
                    <div class="hxradio">
                    <label><input type="radio" v-model="answer.cases" value="1"><em></em>不了解</label>
                    <label><input type="radio" v-model="answer.cases" value="2"><em></em>一般了解</label>
                    <label><input type="radio" v-model="answer.cases" value="3"><em></em>非常了解</label>
                    </div>  
                </li>
                <li>
                    <h1>2.请问您对华夏常青树（多倍版）产品计划的特色和利益是否已经了解？</h1>
                    <div class="hxradio">
                    <label><input type="radio" v-model="answer.benefit" value="1"><em></em>不了解</label>
                    <label><input type="radio" v-model="answer.benefit" value="2"><em></em>一般了解</label>
                    <label><input type="radio" v-model="answer.benefit" value="3"><em></em>非常了解</label>
                    </div>  
                </li>
                <li>
                    <h1>3.请问您对理财顾问的总体评价是？</h1>
                    <div class="hxradio">
                    <label><input type="radio" v-model="answer.comment" value="1"><em></em>优秀</label>
                    <label><input type="radio" v-model="answer.comment" value="2"><em></em>良好</label>
                    <label><input type="radio" v-model="answer.comment" value="3"><em></em>一般</label>
                    </div>  
                </li>
            </ul>
            <h2 class="title">如果您觉得满意，您是否可以考虑再提供三位朋友的联系方式，帮助理财顾问完成考核。</h2>
            <ol class="other">
                <li><input v-model='answer.friend.name1' type="text" class="otherName" placeholder="姓名"><input v-model='answer.friend.phone1' placeholder="电话" type="text" class="otherTel"></li>
                <li><input v-model='answer.friend.name2' type="text" class="otherName" placeholder="姓名"><input v-model='answer.friend.phone2' placeholder="电话" type="text" class="otherTel"></li>
                <li><input v-model='answer.friend.name3' type="text" class="otherName" placeholder="姓名"><input v-model='answer.friend.phone3' placeholder="电话" type="text" class="otherTel"></li>
            </ol>
          </div>
        
        <img src="../../assets/img/new/n_bgb.png" alt="">
      </div>
      <a v-if="!mask" class="btn" @click="evn">确认提交</a>
      <div v-if="mask" class="mask"></div>
    </div>
  
</template>
<script>

export default {
    name: 'question',
    data(){
      return {
        answer:{
          cases:'',
          benefit:'',
          comment:'',
          friend:{
            name1:'',
            name2:'',
            name3:'',
            phone1:'',
            phone2:'',
            phone3:''
          }
        },
        mask:false,
        canSubmit:true
      }
    },
    watch:{

    },
    created(){
      common.noShare();
    },
    mounted(){
      this.answer.salesmanId = this.$route.params.id;
      rq()&&rq().luckCode?this.review_ask():'';
    },
    methods:{
      review_ask(){
        this.mask=true;
        this.request_answer();
      },
      request_answer(){
        ax('findQuestion.do',{'salesmanCode':this.$route.params.id,'luck_code':rq().luckCode},true).then(res=>{
          if(res.result=='succ'){
            let data = JSON.parse(res.data.cqsdbb);
            // data.friend = JSON.parse(data.friend);
            this.answer = data;
          }
        })
      },
      evn(x){//点击跳转
        if(this.canSubmit){
          this.canSubmit=false;
          if(!this.check_empty()){
            popalert.fade('您的问卷有未选择项');
            this.canSubmit=true;
            return;
          }
          if(!this.check_connect_format()){
            this.canSubmit=true;
            return;
          }
          this.submit_data();
        }
      },
      check_empty(){
        let data = this.answer;
        let pass = true;
        for(let i in data){//检查空项
          if(i!='friend'){
            if(data[i]==''){
              pass = false;
              break;
            }
          }
        }

        return pass;
      },
      check_connect_format(){
        //检查电话号码
        let pass=true;
        if(this.answer.friend.name1||this.answer.friend.phone1){
          pass = this.answer.friend.name1&&this.answer.friend.phone1?this.check_format(this.answer.friend.name1,this.answer.friend.phone1):popalert.fade('请将联系人姓名与电话补全');
        }
        if(this.answer.friend.name2||this.answer.friend.phone2){
          pass = this.answer.friend.name2&&this.answer.friend.phone2?this.check_format(this.answer.friend.name2,this.answer.friend.phone2):popalert.fade('请将联系人姓名与电话补全');
        }
        if(this.answer.friend.name3||this.answer.friend.phone3){
          pass = this.answer.friend.name3&&this.answer.friend.phone3?this.check_format(this.answer.friend.name3,this.answer.friend.phone3):popalert.fade('请将联系人姓名与电话补全');
        }
        return pass==true?true:false;
      },
      check_format(name,phone){//console.log('进入检查')
        let pass;
        pass=this.check_name_format(name)&&this.check_phone_format(phone)?true:false;
        return pass;
      },
      check_name_format(name){//console.log('进入姓名检查')
        let pass = /^[\u4E00-\u9FA5A-Za-z]+$/.test(name);
        !pass?popalert.fade('请输入汉字或英文姓名'):'';
        return pass;
      },
      check_phone_format(phone){//console.log('进入手机检查')
        let pass = /^1[345789][0-9]{9}$/.test(phone);
        !pass?popalert.fade('请输入正确的手机号'):'';
        return pass;
      },
      submit_data(){
        let params = {...this.answer};
        ax('cqsdbbSubmitQuestion.do',{data:JSON.stringify(params)},true).then((res)=>{
          res.result=='succ'?this.submit_success(res.codeId):this.error_tip(res.msg);
        }).catch((err)=>{
          this.canSubmit=true;
        })
      },
      submit_success(x){
        popalert.fade('问卷提交成功，即将跳转至信息回执页面');
        setTimeout(()=>{this.$router.push(`/?codeId=${x}&sourceFrom=online&salesmanId=${this.answer.salesmanId}&product_type=cqsdbb`)},2500);
      },
      error_tip(x){
        this.canSubmit=true;
        popalert.fade(x);
      }
    }
}
</script>

<style lang='less' scoped>
@import url(../../assets/css/main.less);
@black:#000;
div.container{
  background: url('../../assets/img/new/newBg.png') top; background-size: cover;position: relative;padding-top: 2em;padding-bottom: 2em;
  div.mask{position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 999;}
  img{width: 100%;}
  a{
    &.btn{
      display: block;margin:0 5%;width: 90%;background: url('../../assets/img/cqsth/btnbg.png') no-repeat center center; background-size: 100%;height: 5em;line-height: 4.8em;text-align:center;font-size: 1.2em;color: #fff;
    }
  }
  div.add_info{
    width:90%;background: #fff;box-shadow: 0px 0px 8px 0px rgba(69,142,204,0.5);padding:.1em 0 0;position: relative;margin-left: 5%;margin-bottom:5%;
    background: url('../../assets/img/new/n_bgs.png') top;
    background-size: 100%; 
    h2{
      font-size: 1em;color: @black;line-height: 2em;margin-bottom:2em;
      &.title{
        font-size: 1.2em;line-height: 1.5;margin-bottom:.3em;
      }
    }
    div.content{
        padding: 0 2em;
    }
    ul{
      li{
        font-size: 1.1em;color: @mainGreen;
        h1{
          padding:  0 0 .8em;line-height: 1.7;color:@black;
        }
        .hxradio{
          display: block;
          label{
            width: 32%;display: inline-block;margin-bottom: 1em;
            &:last-child{
              margin-right: 0;
            }
          }
          &.long{
            label{
              width:42%;margin-right: 1.2em;
            }
          }
          &.wrap{
            padding-bottom: 1em;
          }
          input{
            display: none;
            &[type=radio]{
              &+em{
                display: inline-block;width: 1em;height: 1.5em;vertical-align: -.15em;background: url(../../assets/img/nocheck.png) no-repeat bottom;background-size: 99%;margin-right: .2em;box-sizing: border-box;
              }
              &:checked + em{
                background: url(../../assets/img/check.png) no-repeat bottom;background-size: 99%;overflow: visible;height: 1.5em;
              }
            }
          }
          
        }
      }
      
    }
    ol{
      &.other{
        margin-top: 1em;
        li{
          display: flex;width: 100%;
          input{
            border:1px solid #38a44a;outline: none;margin-bottom: 3%;padding: .4em 0 .4em .5em;font-size: 1.1em;color: @blueShadow;background:transparent;
            &.otherName{
              width: 33%;
              margin-right: 3%;
            }
            &.otherTel{
              width: 62%;
            }
          }
          
        }
        &:last-child{
          margin-bottom: 3%;
        }
      }
    }
  }

}

</style>
