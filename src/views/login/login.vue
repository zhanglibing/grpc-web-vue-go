<template>
  <div class="login">
    <div class="bg-particles" style="background: #0b2631">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>

    <div class="login-box">
      <div class="content-box">
        <div class="title-img">AI+不良事件共享学习和管理平台</div>
        <div class="logo"><img src="../../common/image/logo.png" alt=""></div>
        <div class="input-box">
          <input type="text" v-model.trim="username" placeholder="手机号">
          <input type="password" v-model.trim="password" @keyup.enter.native="login" placeholder="密码">
        </div>
        <button class="submit" @click="login">登录</button>
      </div>
      <p class="copyright">Copyright© 爱照护 2009-2018</p>
    </div>
  </div>
</template>

<script>
  import md5 from 'js-md5';
  export default{
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login(){
          if(!this.username){
            this.$message.error("账号不能为空");
          }
          if(!this.password){
            this.$message.error("密码不能为空");
          }
        this.$message.success("登录成功");
        this.$store.commit('setUserInfo',{});
        this.$router.push('admin')
      }
    },
  }
</script>

<style lang="scss" scoped="">
  @import "../../common/css/mixins";

  .bg-particles {
    @include fullScreen;
  }

  .login {
    @include fullScreen;
    .login-box {
      @include middle;
      width: 468px;
      /*background: rgba(35, 35, 35, 0.7);*/
      /*background: #0b2631;*/
      .copyright {
        position: absolute;
        bottom: -50px;
        left: 0;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 14px;
      }
      .title-img {
        position: absolute;
        top: -100px;
        font-size:24px;
        color:#fff;
        text-align: center;
        left: 0;
        width: 100%;
      }

      .content-box {
        position: relative;
        padding: 60px 85px;
        box-sizing: border-box;
        left: 14px;
        top: 16px;
        width: 100%;
        /*background: rgba(11, 38, 49, 0.7);*/
        .logo {
          text-align: center;
          margin-bottom: 40px;
        }
      }
      .input-box {
        margin-bottom: 40px;
        input {
          width: 100%;
          height: 46px;
          background: #fff;
          margin-bottom: 20px;
          padding-left: 15px;
          box-sizing: border-box;
          border-radius: 4px;
          border: none;
          outline: none;

        }
      }
      .submit {
        width: 100%;
        height: 46px;
        background: rgba(0, 82, 193, 1);
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
