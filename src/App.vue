<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style lang="scss">
  .pageTitle {
    padding: 10px;
  }

  .el-footer {
    height: 50px;
  }

  .block {
    position: relative;
    margin-top: 15px;
    height:30px;
    .refresh {
      position: absolute;
      top: 0;
      right: 0;
      height: 36px;
      width: 40px;
      padding: 0;
    }
  }
  .search-box {
    margin-bottom:10px;
    margin-top:10px;
    .el-input {
      width: 200px;
    }
    label{
      margin-right:15px;
    }
  }
  .page-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:10px;
  }
</style>
