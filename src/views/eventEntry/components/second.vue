<template>
  <div class="first">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="用户性别" prop="patientSex" :rules="[{ required: true, message: '请选择用户性别', trigger: 'change' }]">
        <el-radio-group v-model="form.patientSex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户姓名" prop="patientName" :rules="[{ required: true, message: '用户姓名不能为空', trigger: 'blur' }]">
        <el-input placeholder="请填写用户姓名"  v-model="form.patientName"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄段" prop="patientAge" :rules="[{ required: true, message: '请选择用户年龄段', trigger: 'change' }]">
        <el-select v-model="form.patientAge">
          <el-option v-for="(item,index) in constant.ages" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户类型" prop="patientType" :rules="[{ required: true, message: '请选择用户类型', trigger: 'change' }]">
        <el-select v-model="form.patientType">
          <el-option v-for="(item,index) in constant.userTypes" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户状态类别" prop="patientState" :rules="[{ required: true, message: '请选择用户状态类别', trigger: 'change' }]">
        <el-select v-model="form.patientState">
          <el-option v-for="(item,index) in constant.userStates" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户状态描述" prop="patientStateMemo" :rules="[{ required: true, message: '请选择用户状态描述', trigger: 'change' }]">
        <el-select v-model="form.patientStateMemo">
          <el-option v-for="(item,index) in constant.userStatesMemo" :key="index" :value="item" :label="item"></el-option>
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
          patientSex:'',
          patientName:'',
          patientAge:'',
          patientType:'',
          patientState:'',
          patientStateMemo:'',
        },
        constant:constant,

      }
    },
    created(){
      this.form=Object.assign({},this.form,this.$store.state.editInfo)
    },
    methods:{
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
