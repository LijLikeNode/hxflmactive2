<template>
    <div class="page">
        <img src="../../assets/img/rankBanner.png" alt="">
        <div class="rankList">
            <b></b>
            <b class="cross"></b>
            <List :itemTitleList = 'itemTitleList'></List>
        </div>
    </div>
</template>

<script>
import List from './List';
export default {
  name: "ranklist",
  data() {
    return {
        itemTitleList:[
          {actName:'创业脸谱',markName:'cylp'},
          {actName:'医保通特惠活动',markName:'ybtth'},
          {actName:'常青树（多倍版）评鉴',markName:'cqsdbb'},
          {actName:'福临门（少儿版）评鉴',markName:'flm'},
          {actName:'家庭保障DIY',markName:'ncqs'},
        ]
    };
  },
  components:{List},
  mounted(){
    common.noShare();
  }

};
</script>

<style lang="less" scoped>
@import url("../../assets/css/main.less");
@tdColor: #fdc43b;
@trColor: #fd7331;
div.page {
  min-height: 100vh;
  background: url(../../assets/img/rankbg.png) top center;
  background-size: cover;
  //   padding-top: 2em;
  img {
    width: 100%;
  }
  div.rankList {
    height: 80vh;
    border: 1px solid @trColor;
    border-radius: 7px;
    background: #fff;
    width: 90%;
    margin-left: 5%;
    position: relative;
     box-shadow:@tdColor 0 0 30px ;
     padding: 4em .5em 0;
  }
  b {
    position: absolute;
    top: 0em;
    left: 5.5em;
    width: 11em;
    height: 3em;
    background: url(../../assets/img/rankTitle.png) no-repeat top;
    background-size: 100%;
    &.cross {
      background: url(../../assets/img/crossman.png) no-repeat top;
      background-size: 40%;
      height: 6.5em;
      top: -3em;
      left: -1.8em;
    }
  }
}
</style>


