<template>
    <div class="page">
        <img class="banner" src="../../assets/img/pbanner.png" alt="">
        <!-- 抽奖区域 -->
        <div class="flex">
            
                <div :class="['box viewport-fli',{'active':item.start},{'first':item.start&&shake&&index===9}]" title="点击翻面" @click="turnCard(item)"  v-for="(item,index) in cardList" :key="index">
                     <a  :class="['list flip',{'out':!item.active},{'in':item.active}]"><img :src="item.presentUrl" alt="纸牌正面"></a>
                     <a  :class="['list flip',{'in':!item.active},{'out':item.active}]"><img src="../../assets/img/present0.png" alt="纸牌背面"></a>
                 </div>
                 <span v-if="initStart" @click="initUrl"></span>
        </div>
        
        <div class="table">
            <ul>
                <li class="title"><span>奖品等级</span><span>奖品设置</span></li>
                <li v-for="(item,index) in presentList" :key="index">
                    <span>{{item.level}}</span>
                    <span>{{item.present}}</span>
                </li>
            </ul>
        </div>


        <transition name="fade">
            <div class="mask" v-if="prompts">
                <div :class="['conbox',{'active':prompts2}]">
                    <b></b>
                    <i></i>
                <h2 v-html="tipmsg"></h2> 
                <span @click="prompts=prompts2=false"></span>
                </div>
                <!-- 四等奖 -->
                <div :class="['conbox1',{'active':prompts3}]">
                    <img src="../../assets/img/cardInvite.png" alt="">
                <span @click="prompts=prompts3=false"></span>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    name:'present',
    data () {
        return {
            eleBack:'',
            eleFront:'',
            canTurn:'',
            luckLevel:'',
            prompts:false,
            prompts2:false,
            prompts3:false,
            initStart:true,
            shake:false,
            tipmsg:'',
            cardList:[
                {presentUrl:require('../../assets/img/present1.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present4.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present3.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present4.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present1.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present2.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present2.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/present3.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/presents.png'),active:true,start:false},
                {presentUrl:require('../../assets/img/presents.png'),active:true,start:false},
            ],
            presentList:[
                {level:'特等奖',present:'100g金条'},
                {level:'一等奖',present:'iPhone XS手机'},
                {level:'二等奖',present:'小米32寸智能电视'},
                {level:'三等奖',present:'云南慈善助学鲜花饼'},
                {level:'四等奖',present:'客户答谢卡'},
            ],
        }
    },
    mounted(){
        // this.rotate_start();
        common.noShare();

    },
    methods:{
        initUrl(){
            this.initStart = false;
            this.cardList = [
                {presentUrl:require('../../assets/img/present1.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present4.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present3.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present4.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present1.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present2.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present2.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/present3.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/presents.png'),active:false,start:false},
                {presentUrl:require('../../assets/img/presents.png'),active:false,start:false},
            ]
            
            this.canTurn =false;
            this.cardList.map((val,i)=>{
                // setTimeout(()=>{
                    val.start = true;
                    i===9?setTimeout(()=>{this.shake=true},1900):'';
                // },i*(1-i*0.05)*300)
            })

            setTimeout(()=>{
                this.cardList.map((val,i)=>{
                    setTimeout(()=>{
                        val.start = false;

                       if( i===9){
                           this.canTurn=true;
                           this.cardList = [
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                                {presentUrl:'',active:false,start:false},
                            ]
                       }
                        
                    },i*(1-i*0.05)*300)
                })
            },4000)
        },
        turnCard(item){

        if(!this.canTurn){
            return ;
        }
        // if(!!this.luckLevel){
        //     // popalert.fade('不可重复抽奖哦');
        //     return;
        // }
        
        this.rotate_start(item);
           
        },
        rotate_start(item){
        
          ax('luckPrize.do',{codeId:this.$route.params.id,name:sessionStorage.name,phone:sessionStorage.phone})
          .then(response=>{
            
            // console.log(response)
            //模拟获奖
            if(response.result=='succ'){
              // console.log('start')
              let luckNum = response.luckCn;
              let level = response.level;
              this.luckLevel = response.level;
              item.presentUrl = this.init_level();

              this.successAction(item,luckNum,level);
             
            
            }else{
              // this.init_level();
              this.tipmsg = response.msg;this.prompts = true;setTimeout(()=>this.prompts2=true,50);
            //   this.noStop = false;
            }
          })
          .catch(err=>{
              //断网四等奖
               item.presentUrl = require('../../assets/img/present4.png');
               !item.active? item.active = true:'';
                setTimeout(()=>{
                //   this.tipmsg = `恭喜您获得<br/>四等奖 客户答谢卡`;
                  this.prompts = true;setTimeout(()=>this.prompts3=true,50);
                },100)
          })

      },
      init_level(){
          let imgurl='';
          let luckNum = this.luckLevel;
          if(luckNum==1||luckNum==5){
              imgurl = require('../../assets/img/present1.png');
          }else if(luckNum==2||luckNum==6){
              imgurl = require('../../assets/img/present2.png');
          }else if(luckNum==3||luckNum==7){
              imgurl = require('../../assets/img/present3.png');
          }else if(luckNum==4||luckNum==8){
              imgurl = require('../../assets/img/present4.png');
          }else if(luckNum==9||luckNum==10){
              imgurl = require('../../assets/img/presents.png');
          }
          return imgurl;
      },
      successAction(item,luckNum,level){
            !item.active? item.active = true:'';
            let present = {
            num0:'特等奖  100g金条',
            num1:'一等奖  iPhone XS手机',
            num2:'二等奖  小米32寸智能电视',
            num3:'三等奖  云南慈善助学鲜花饼',
            num4:'四等奖  客户答谢卡',
            }
            let again = luckNum!=4&&luckNum ? '为家人再来一次' : '';
            setTimeout(()=>{
            this.tipmsg = `恭喜您获得<br/>${level == 1 ? present.num1 : level == 2 ? present.num2 : level == 3 ? present.num3 : level == 4 ? present.num4 : level == 5 ? present.num1 : level == 6 ? present.num2 : level == 7 ? present.num3 : level == 8 ? present.num4 : level == 9 ? present.num0 : level == 10 ? present.num0 :''}<br/><span style="color:gray;font-style:italic;font-weight: bold;font-size: 0.9em;">${again}</span>`;
            this.prompts = true;//这个是弹层的半透明黑色背景，没有过渡和动画
            setTimeout(()=>level==4||level==8?this.prompts3=true:this.prompts2=true,50);//这个是展示几等奖的面板  有向下滑动的动画
            this.noStop=false;
            },100)
      }
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/main.less');
@import url('./style.less');
@tdColor:#fdc43b;
@trColor:#fd7331;
div.page{
    min-height: 100vh;
    background: url(../../assets/img/presentbg.png)  top center;
    background-size: cover;
    padding-top:1em;
    padding-bottom: .1em;
    position: relative;
    img.banner{
        width: 100%;
    }
    .flex{
        // display: flex;
        position: relative;
        // flex-wrap: wrap;
        margin: 5%;
        height: 19em;
        // justify-content: space-between;
        span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 3;
            width: 6em;
            height: 6em;
            background: url('../../assets/img/start.png') no-repeat center;
            background-size: 100%; 
        }
    }

    .table{
        width: 80%;
        margin-left:10%;
        border: 2px solid @tdColor;
        background: #fdf6db;
        border-radius: 5px;
        padding: 1em;
        box-shadow:@tdColor 0 0 70px ;
        margin-top: 2em;
        margin-bottom: 2em;
        ul{
            li{
                display: flex;
                justify-content: space-around;
                line-height: 1.7em;
                color: @tdColor;
                font-size: 1.1em;
                &.title{
                    color: @trColor;
                    font-size: 1em;
                }
                span{
                    text-align: center;
                    
                    &:first-child{
                        width: 40%;
                    }
                    &:last-child{
                        width: 60%;
                    }
                }
            }
        }
    }
}

.mask{
  background:rgba(0,0,0,.7);position:fixed;width:100%;height:100%;z-index: 10;display: block;top:0;
  .conbox{
    position: absolute;top: -30%;left:50%;transform:translateX(-50%);z-index: 11;width: 70%;border-radius: 5px;color:@trColor;background:#fad489;;padding: 13%;text-align: center;transition: top .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    b{
        position:absolute;
        top: -2em;
        right: 1em;
        background:url('../../assets/img/leaf.png') no-repeat center;
        background-size:100%;
        width: 5em;
        height: 4em;
    }
    i{
        position:absolute;
        top: -2.5em;
        left: 1em;
        background:url('../../assets/img/crossman.png') no-repeat center;
        background-size:100%;
        width: 3em;
        height: 5em;
    }
    &.active{
      top: 30%;
    }
    span{
      position: absolute;bottom:-30%;left:50%;transform:translateX(-50%);background: url(../../assets/img/close.png);width: 2em;height: 2em;background-size: 100%;
    }
    h2{
      line-height: 2;color: #fd5e17;
    }
  }
  .conbox1{
       position: absolute;top: -50%;left:50%;transform:translateX(-50%);z-index: 11;width: 90%;text-align: center;transition: top .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
       &.active{
        top: 30%;
        }
        img{
            width: 100%;
        }
        span{
      position: absolute;bottom:-30%;left:50%;transform:translateX(-50%);background: url(../../assets/img/close.png);width: 2em;height: 2em;background-size: 100%;
    }
  }

}
</style>

