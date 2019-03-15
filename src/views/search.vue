<template>
  <div>
    <commonTitle></commonTitle>
    <div class="search-list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="flex-row">
            <p class="list-item">{{item.integration}}</p>
            <el-button type="primary" @click="goView(item.id)">查看详情</el-button>
          </div>
          <p class="time">时间：{{item.createTime}}</p>
          <div class="show-box" @click="goView(item.id)">
            {{item.integration}}
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

  import commonTitle from '@/components/commonTitle'
  export default{
    components: {
      commonTitle
    },
    data(){
      return {
          list:this.$store.state.searchList,
      }
    },
    methods: {

      //前往详情页
      goView(id){
        this.$router.push({
          path: '/admin/submit/',
          query: {id}
        })
      }
    }
  }
</script>
<style lang="scss" scoped="">
  @import "../common/css/mixins";

  .search-list {
    padding-top: 30px;
    width: 70%;
    min-width: 1000px;
    margin: 0 auto;
    ul li {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      position: relative;
      .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .list-item {
          flex: 1;
          @include textOver(1);
          line-height: 30px;
          font-size: 18px;
          height: 30px;
          cursor: pointer;
          color: #000;
        }
        button {
          margin-left: 50px;
        }
      }
      .show-box{
        display: none;
        position: absolute;
        width:calc(100% - 150px);
        left:0;
        top:0;
        background: #fff;
        border:1px solid #ccc;
        padding:30px;
        box-sizing: border-box;
        border-radius: 6px;
        line-height:30px;
        z-index: 10;
        cursor: pointer;
      }
      &:hover{
        .show-box{
          display: block;
        }
      }
    }
  }
</style>
