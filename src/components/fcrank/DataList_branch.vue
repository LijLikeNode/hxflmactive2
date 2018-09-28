<template>
  <div class="listContainer">
      <div class="title">
          <span>排名</span>
          <span>分公司</span>
          <span>机构</span>
          <div class="day">
              <h1>当日</h1>
              <span class="act">参与活动</span>
              <span class="cust">获客</span>
          </div>
          <div class="month">
              <h1>当月</h1>
              <span class="act">参与活动</span>
              <span class="cust">获客</span>
          </div>
      </div>

      <ul class="con">
          <li v-for="(item,index) in showList" :key="index">
              <span>{{index>=3?index+1:''}}</span>
              <span>{{item.comname}}</span>
              <span>{{item.name}}</span>
              <b class="act">{{item.salesCountDay}}</b>
              <b class="cust">{{item.custCountDay}}</b>
              <b class="act">{{item.salesCountMonth}}</b>
              <b class="cust">{{item.custCountMonth}}</b>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  components:{},
  props:['list','tab'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{
      showList(){
          const { com_list , middlecom_list , fourcom_list  } = this.list;
          return this.tab===0?com_list :this.tab===1?middlecom_list :fourcom_list ;
      }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
@border:1px solid #fdbd3e;
@titleColor:#fd5206;
@bg1:#fdf5d9;
@bg2:#fad489;
.listContainer{
    margin-top: 1em;
    .title{
        display: flex;
        span{
            width: 14%;
            text-align: center;
            background: @bg1;
            color: @titleColor;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-right: @border;
            box-sizing: border-box;
            &.cust{
                border-right:none;
            }
        }
        div{
            width: 29%;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            &.day{
                border-right: @border;
            }
            h1{
                width: 100%;
                background: @bg2;
                color: @titleColor;
                padding: .5em 0;
                border-bottom:@border;
            }
            span{
                &.act{
                    width: 60%;
                }
                &.cust{
                    width: 40%;
                }
                
                padding: .5em 0;
            }
        }
    }

    ul.con{
        margin-top: 1em;
        height: 50vh;
        overflow-y: scroll;
        font-size: .8em;
        li{
            display: flex;
            color: @titleColor;
            padding: .7em 0;
            align-items: center;
            &:first-child{
                span{
                    &:first-child{
                        background: url('../../assets/img/no1.png') no-repeat center;
                        background-size: auto 90%;
                        height: 2em;
                    }
                }
            }
            &:nth-child(2){
                span{
                    &:first-child{
                        background: url('../../assets/img/no2.png') no-repeat center;
                        background-size: auto 90%;
                        height: 2em;
                    }
                }
            }
            &:nth-child(3){
                span{
                    &:first-child{
                        background: url('../../assets/img/no3.png') no-repeat center;
                        background-size: auto 90%;
                        height: 2em;
                    }
                }
            }
            span{
                width:14%;
                text-align: center;
            }
            b{
                &.act{
                    width: 17.4%;
                }
                &.cust{
                    width: 11.6%;
                }
                
                text-align:center;
                font-weight: normal;
                
            }
        }
    }
}
</style>