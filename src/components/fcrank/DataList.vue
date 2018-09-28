<template>
  <div class="listContainer">
      <div class="title">
          <span>排名</span>
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
              <span>{{item.name}}</span>
              <b>{{item.salesCountDay}}</b>
              <b>{{item.custCountDay}}</b>
              <b>{{item.salesCountMonth}}</b>
              <b>{{item.custCountMonth}}</b>
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
            width: 15%;
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
            width: 35%;
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
                width: 50%;
                padding: .5em 0;
            }
        }
    }

    ul.con{
        margin-top: 1em;
        height: 50vh;
        overflow-y: scroll;
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
                width: 15%;
                text-align: center;
            }
            b{
                width: 17.5%;
                text-align:center;
                font-weight: normal;
                
            }
        }
    }
}
</style>