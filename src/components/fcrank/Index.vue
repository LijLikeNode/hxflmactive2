<template>
  <div class="page">
      <div class="container">
          <img src="../../assets/img/fcrank/banner.png" alt="">
          <ul class="tab">
              <li @click="tab!==0?tab=0:''" :class="[{'active':tab==0}]">分公司</li>
              <li @click="tab!==1?tab=1:''" :class="[{'active':tab==1}]">中支</li>
              <li @click="tab!==2?tab=2:''" :class="[{'active':tab==2}]">营服</li>
          </ul>
          <DataList :list="list" :tab="tab" v-if="showWhich==='com_branch'"></DataList>
          <DataListBranch :list="list" :tab="tab" v-if="showWhich==='yingfu'"></DataListBranch>
      </div>
  </div>
</template>

<script>
import DataList from "./DataList";
import DataListBranch from "./DataList_branch";
export default {
  components: { DataList,DataListBranch },
  data() {
    return {
      tab: 0,
      list: { }
    };
  },
  watch: {},
  computed: {
    showWhich(){
      return this.tab===0?'com_branch':'yingfu';
    }
  },
  methods: {},
  created() {},
  mounted() {
    common.noShare();
      ax('activityRankData.do',{}).then(res=>{
         this.list = res.data;
      })
  }
};
</script>
<style lang="less" scoped>
@border: #ffc141;
@titleColor: #fd5206;
@bg1: #fdf5d9;
@bg2: #fad489;
@gradient1_t: #f99362;
@gradient1_b: #fd5e17;
@gradient2_t: #f8d07c;
@gradient2_b: #ffb62a;
.page {
  background: url("../../assets/img/fcrank/bg.png") no-repeat top;
  background-size: cover;
  padding-top: 20vh;
  .container {
    // width: 90%;
    // margin-left: 5%;
    height: 80vh;
    background: #fff;
    // border: 1px solid @border;
    // border-radius: 8px;
    box-shadow: 3px 3px 10px #666;
    position: relative;
    padding: 3em 0em;
    img {
      position: absolute;
      top: -9.3em;
      left: 0;
      width: 62%;
    }

    ul.tab {
      display: flex;
      justify-content: space-between;
      li {
        width: 33%;
        text-align: center;
        line-height: 3em;
        background: linear-gradient(to bottom,@gradient2_t, @gradient2_b);
        color: #fff;
        &.active {
          background: linear-gradient(to bottom, @gradient1_t, @gradient1_b);
        }
      }
    }
  }
}
</style>