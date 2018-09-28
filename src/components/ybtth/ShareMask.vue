<template>
  <div class="maskWhite" @click="$emit('maskClose')">
      <img src="../../assets/img/shareArrow.png" alt="">
  </div>
</template>

<script>
export default {
  components:{},
  props:[],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.maskWhite{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255,255,255,.6);
    img{
        width: 100%;
    }
}
</style>