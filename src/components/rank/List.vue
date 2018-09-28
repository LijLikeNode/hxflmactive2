<template>
<div class="container">
    <h3>
        <span class="col1">姓名</span>
        <span class="col2">电话</span>
        <span class="col3">中奖日期</span>
        <span class="col4">中奖等级</span>
    </h3>
    <div class="item" v-for="(item,index) in itemTitleList" :key="item.actName">
        <h1 :class="[{'active':activeItem===index}]" @click="getRank(item,index)">{{item.actName}}<b></b></h1>
        <ListContent :activeItem="activeItem" :index="index" :item="item"></ListContent>
    </div>
</div>
    
</template>

<script>
import ListContent from './ListContent'
export default {
    data () {
        return {
            activeItem:'',
        }
    },
    props:['itemTitleList'],
    components:{ListContent},
    mounted(){
        
    },
    methods:{
        getRank(item,index){
            if(this.activeItem===index){
                this.activeItem = ''
            }else{
                this.activeItem = index;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/main.less');
@defaultBgColor:#fdf5d9;
@tdColor: #fdc43b;
@trColor: #fd7331;
div.container{
    h3{
        display: flex;
        padding:.4em 1.6em .9em;
        color: @trColor;
        font-weight: bold;
        span{
            text-align: center;
            &.col1{
                text-align: left;
            }
            &.col4{
                text-align: right
            }
        }
    }
    div.item{
        h1{
            background: @defaultBgColor;
            color: @trColor;
            padding:0 1.5em;
            line-height: 2.7em;
            font-size: 1.1em;
            margin-bottom: .4em;
            b{
                float:right;
                border:7px solid transparent;
                border-top:7px solid #fd5207; 
                margin-top: 1.1em;
            }
            &.active{
                background: linear-gradient(to bottom,#f88c5c,#fd5207);
                color: #fff;
                b{
                    border-top:7px solid #fff; 
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

