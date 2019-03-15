<template>
  <div class="home-box">
    <common-title></common-title>
    <div class="wrapper-box">
      <div class="content">
        <div class="search-box clear">
          <div class="input-box">
            <img src="../common/image/search.png" alt="" @click="getSearch">
            <input type="text" v-model="search" placeholder="请输入事件的关键词" @keyup.enter="getSearch">
          </div>
          <div class="btn-box">
            <button @click="getSearch">一键搜索</button>
          </div>
        </div>
        <ul class="qrcode-box">
          <li>
            <div class="img-box">
              <img src="../common/image/weixin1.png" alt="">
            </div>
            <p>
              爱照护
              <br>
              官方微信
            </p>
          </li>
          <li>
            <div class="img-box">
              <img src="../common/image/weixin2.png" alt="">
            </div>
            <p>
              护理和照护分会
              <br>
              官方微信
            </p>
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li style="margin-bottom: 10px;" v-for="item,index in list" :key="index">{{item.integration}}</li>
    </ul>

  </div>
</template>

<script>
  import { server } from "@/common/server.js";
  import commonTitle from '@/components/commonTitle'
  export default{
    components: {
      commonTitle
    },
    data(){
      return {
        search: '',
        list:[]
      }
    },
    methods: {
      //搜索
      getSearch(){
        server.search( {keyword:this.search})
          .then(res => {
              if(res.length){
                this.$store.commit('setSearchList',res);
                this.$router.push('/admin/search/')
              }else{
                this.$message.error('未搜索到内容')
              }

          })
          .catch(err => {
              this.$message.error('未搜索到内容')
              console.log(err);
          });
      },

    }
  }
</script>

<style lang="scss" scoped="">
  @import "../common/css/mixins";

  .wrapper-box {
    @include commonWidth;
    padding-top:calc(20vh);
  }

  .search-box {
    width: 900px;
    margin: 0 auto 60px;
    .input-box {
      position: relative;
      float: left;
      padding: 6px;
      width: 750px;
      height: 70px;
      border-radius: 4px;
      box-sizing: border-box;
      margin-right: 10px;
      background-color: rgba(255, 255, 255, 0.52);
      border: 1px solid #ccc;
      img {
        position: absolute;
        top: 16px;
        left: 33px;
        cursor: pointer;
      }
      input {
        box-sizing: border-box;
        padding-left: 90px;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 18px;
      }
    }
    .btn-box {
      float: left;
      width: 134px;
      height: 70px;
      padding: 6px;
      box-sizing: border-box;
      background-color: rgba(0, 144, 244, 0.53);
      button {
        width: 100%;
        height: 100%;
        background: #0398ff;
        cursor: pointer;
        color: #fff;
        font-size: 18px;
      }
    }
  }

  .qrcode-box {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      width: 130px;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-box {
        width: 120px;
        height: 120px;
        margin-bottom: 10px;
        background: rgba(255, 255, 255, 0.3);
        text-align: center;
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }


</style>
