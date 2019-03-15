<template>
  <div class="first">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="事件分级" prop="eventLv" :rules="[{ required: true, message: '请选择事件分级', trigger: 'change' }]">
        <el-select v-model="form.eventLv">
          <el-option v-for="(item,index) in constant.eventLvs" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="事件结果转归" prop="eventResult" :rules="[{ required: true, message: '请选择事件结果转归', trigger: 'change' }]">
        <el-select v-model="form.eventResult">
          <el-option v-for="(item,index) in constant.eventResult" :key="index" :value="item" :label="item"></el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="原因" prop="eventReasonMemo" :rules="[{ required: true, message: '请选择原因', trigger: 'change' }]">
        <el-select v-model="form.eventReason" @change="eventReasonChange">
          <el-option v-for="(item,index) in constant.eventReason" :key="index" :value="item.name" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="form.eventReasonMemo">
          <el-option v-for="(item,index) in eventReasonMemo" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="跟踪处理措施" prop="followUpl" :rules="[{ required: true, message: '请选择跟踪处理措施', trigger: 'change' }]">
        <el-select v-model="form.followUpl">
          <el-option v-for="(item,index) in constant.followUpl" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="质控负责人" prop="qcUserName" :rules="[{ required: true, message: '质控负责人不能为空', trigger: 'blur' }]">
        <el-input placeholder="质控负责人" v-model="form.qcUserName"></el-input>
      </el-form-item>
      <el-form-item label="质控负责人年龄" prop="qcUserAge" :rules="[{ required: true, message: '请选择质控负责人年龄', trigger: 'change' }]">
        <el-select v-model="form.qcUserAge">
          <el-option v-for="(item,index) in constant.ages1" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="质控负责人性别" prop="disposeWorkerSex" :rules="[{ required: true, message: '请选择质控负责人性别', trigger: 'change' }]">
        <el-radio-group v-model="form.qcUserSex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="质控负责人资质" prop="qcUserTitle" :rules="[{ required: true, message: '请选择质控负责人资质', trigger: 'change' }]">
        <el-select v-model="form.qcUserType" @change="qcUserTypeChange">
          <el-option v-for="(item,index) in constant.qcUserType" :key="index" :value="item.name" :label="item.name"></el-option>
        </el-select>
        <el-select v-model="form.qcUserTitle">
          <el-option v-for="(item,index) in qcUserTitle" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="$store.commit('setActiveIndex')">上一步</el-button>
        <el-button type="primary" @click="submit">继续</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import constant from '../../../common/js/constant'
  export default{
    data(){
      return {
        form:{
          eventLv:'',
          eventResult:'',
          eventReason:'',
          eventReasonMemo:'',
          followUpl:'',
          qcUserName:'',
          qcUserAge:'',
          qcUserSex:'',
          qcUserType:'',
          qcUserTitle:'',
        },
        constant:constant,
        eventReasonMemo:[],
        qcUserTitle:[],
      }
    },
    created(){
      this.form=Object.assign({},this.form,this.$store.state.editInfo)
    },
    methods:{

      eventReasonChange(){
        this.form.eventReasonMemo = '';
        this.eventReasonMemo = this.constant.eventReason.filter(val => val.name == this.form.eventReason)[0].list;
      },
      qcUserTypeChange(){
        this.form.qcUserTitle = '';
        this.qcUserTitle = this.constant.qcUserType.filter(val => val.name == this.form.qcUserType)[0].list;
      },
      submit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$store.commit('setEditInfo',this.form)
          } else {
            return false;
          }
        });

      }
    }
  }
</script>

<style scoped="" lang="scss">
  .el-input {
    max-width: 800px;
  }

  .el-select {
    min-width: 400px;
    max-width: 500px;
  }
</style>
