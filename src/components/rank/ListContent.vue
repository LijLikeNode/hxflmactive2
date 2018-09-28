<template>
    <div :class="['con',{'show':activeItem===index}]">
        <ul>
            <li v-for="(item,index) in rankList" :key="index" @click="review_ask(item.source,item.luck_code,item.salesmanCode,item.product_type)">
                <span class="col1">{{item.name}}</span>
                <span class="col2">{{item.phone}}</span>
                <span class="col3">{{item.tTime}}</span>
                <span class="col4">{{item.luckLevel+'等奖'}}</span>
            </li>
        </ul>
        <p v-if="has_more"><i @click="getList">点击加载更多</i></p>
    </div>
</template>

<script>
export default {
    name:'list',
    data () {
        return {
            current_page:1,
            rankList:[],
            has_more:false,
        }
    },
    computed:{
        active(){
            return this.activeItem===this.index;
        }
    },
    watch:{
        active(newVal){
            if(!!newVal){
                this.getList();
            }else{
                this.rankList=[];
                this.current_page=1;
            }
        }
    },
    props:['activeItem','index','item'],
    mounted(){
        
    },
    methods:{
        getList(){
            ax('rankingGrade.do',{'salesmanId':this.$route.params.id,'type':this.item.markName,page:this.current_page,rows:10},true).then(res=>{
                this.rankList.push(...res.data);
                this.has_more = (res.status=='yes');
                this.current_page++;
            });
        },
        review_ask(source,luckCode,salesmanId,productType){
            if(source=='online'){
                switch (productType){
                    case 'flm':
                    this.$router.push(`/question/${salesmanId}?luckCode=${luckCode}`);
                    break;
                    case 'ncqs':
                    break;
                    case 'ybt':
                    this.$router.push(`/ybtquestion/${salesmanId}?luckCode=${luckCode}`);
                    case 'cqsdbb':
                    this.$router.push(`/cqsthqa/${salesmanId}?luckCode=${luckCode}`);
                    default:
                    break;
                }
            }
      }
    }
}
</script>


<style lang="less" scoped>
@import url('../../assets/css/main.less');
@fontColor:#f3b637;
div.con{
    height: 0em;
    transition: height .3s ease;
    overflow: hidden;
    color: @fontColor;
    
    &.show{
        height: 30vh;
        overflow-y: scroll;
        padding:0 1em;
    }
    p{
      text-align: center;
      i{
        display: inline-block;padding:1em ;color:@fontColor;text-decoration: underline;
      }
    }
    ul{
        li{
            display: flex;
            padding:.6em;
            border-bottom: .01em solid @fontColor;
            &:last-child{
                border-bottom: none;
                padding-bottom:0em;
            }
            span{
                flex-grow: 1;
                text-align: center;
                &.col1{
                    text-align:left;
                }
                &.col4{
                    text-align: right;
                }
            }
        }
    }
}

.col1{
    width:15%;
}
.col2{
    width:40%;
}
.col3{
    width:25%;
}
.col4{
    width:20%;
}

</style>


