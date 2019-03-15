<template>
  <div class="nameBoard">
    <div v-title>数据统计看版</div>
    <div class="board-box" v-if="showData">
      <div v-for="(item,index) in showData" class="item-box">
        <columnar :data="item.data" showType="bar" type="add" :showText="item.name"></columnar>
      </div>
    </div>
  </div>
</template>

<script>
  import {dataBoard} from '../../common/js/constant'
  import columnar from '@/components/columnar'
  export default{
    components: {
      columnar
    },
    data(){
      return {
        showData: dataBoard
      }
    },
    created(){

    },
    methods: {

    },

  }
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";
  .nameBoard{
    box-sizing: border-box;
    padding:30px;
    background: #0d033a;
  }
  .board-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item-box{
      width:28%;
      margin-right:8%;
      &:first-child{
        margin-bottom:calc(6vh);
      }
      &:nth-child(3n){
        margin-right:0;
      }
    }
  }

</style>
