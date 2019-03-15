<template>
  <el-container>
    <el-header>
      <p class="title">
        AI+不良事件共享学习和管理平台
      </p>
      <div class="loginOut">
        <el-button type="primary" @click="$router.push('/admin')">搜索事件</el-button>
        <el-button type="primary" @click="$router.push('/admin/eventEntry')">事件录入</el-button>
        <el-button type="primary" @click="$router.push('/admin/dataBoard')">数据统计看板</el-button>
        <el-button type="primary"><a href="http://test.icloudcare.com/DataAI.xlsx">数据导出</a></el-button>
        <el-button  type="" @click="loginOut">退出登录</el-button>
      </div>
    </el-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :key="$route.fullPath" v-if="!$route.meta.keepAlive"></router-view>
  </el-container>
</template>
<script>
  export default{
    data(){
      return {
        activeIndex: this.$route.path,
      }
    },
    methods: {
      //注销登录
      loginOut(){
        this.$store.commit('setUserInfo', '');
        this.$router.push('/')
      }
    },
  }
</script>
<style lang="scss" scoped="">


  .container {
    width: 100%;
    background: #222d32;
    display: flex;
    flex-direction: row;
  }

  .el-header {
    position: relative;
    z-index: 2;
    background: #0747a6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 24px;
      color: #fff;
    }
    .loginOut {

      line-height: 60px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      position: relative;
      button {
        margin-left: 20px;
      }
    }
  }



</style>
