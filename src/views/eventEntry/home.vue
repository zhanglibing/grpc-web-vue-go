<template>
  <div class="eventEntry">

    <div class="logo">
      <img src="../../common/image/iacc.png" alt="">
    </div>
    <div class="page-title">
      欢迎来到不良事件录入页面
    </div>
    <div class="page-detiles">
      融合互联网、大数据、云计算等新一代信息技术，采用PDCA+PSDA的不良事件管理理念，以不良事件的发生前预防、发生中应对和发生后的流程优化能力的“全闭环”管控；建立中国首个面向长期照护服务不良事件维基百科（知识库）和不良事件分类、编码规则为引领的“AI+不良事件共享学习和管理平台”全国性体系，实现“预防为主，系统优化、全员参与、持续改进”的目标，为积极应对人口老龄化提供科技支撑。
    </div>
    <el-steps :space="200" :active="active" finish-status="success">
      <el-step title="第一步"></el-step>
      <el-step title="第二步"></el-step>
      <el-step title="第三步"></el-step>
      <el-step title="第四步"></el-step>
      <el-step title="第五步"></el-step>
    </el-steps>

    <div class="step-title">
      {{titles[active - 1]}}
    </div>
    <first v-if="active==1"></first>
    <second v-if="active==2"></second>
    <three v-if="active==3"></three>
    <four v-if="active==4"></four>
    <five v-if="active==5"></five>
  </div>
</template>

<script>
  import first from './components/first.vue'
  import second from './components/second.vue'
  import three from './components/three.vue'
  import four from './components/four.vue'
  import five from './components/five.vue'
  export default{
    components: {
      first,
      second,
      three,
      four,
      five
    },
    computed:{
      active(){
          return this.$store.state.activeIndex;
      }
    },
    data(){
      return {
        titles: ['服务点选择', '用户信息填写', '事件信息的填写', '质控信息', '预防信息填写']
      }
    }
  }
</script>
<style lang="scss" scoped="">
  .eventEntry{
    padding-top:40px;
    width:70%;
    min-width:1000px;
    margin:0 auto;
    .logo{
      margin-bottom:40px;
    }
    .page-title{
      font-size:30px;
      margin-bottom:30px;
      color:#000;
    }
    .page-detiles{
      margin-bottom:40px;
      line-height:26px;
    }
  }
  .step-title {
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    padding-bottom: 15px;
    padding-top:20px;
    margin-bottom: 40px;
    font-weight:bold;
  }
</style>
