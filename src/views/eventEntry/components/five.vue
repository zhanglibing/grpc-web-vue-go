<template>
  <div class="first">
    <el-form ref="form" :model="form" label-width="150px">

      <el-form-item label="预防措施" prop="preventive" :rules="[{ required: true, message: '用户姓名不能为空', trigger: 'change' }]">
        <el-select v-model="form.preventive">
          <el-option v-for="(item,index) in constant.preventives" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预防措施责任人姓名" prop="preventiveManager" :rules="[{ required: true, message: '预防措施责任人姓名不能为空', trigger: 'blur' }]">
        <el-input placeholder="请填写用户姓名"  v-model="form.preventiveManager"></el-input>
      </el-form-item>
      <el-form-item label="事故及责任" prop="accidentLiability" :rules="[{ required: true, message: '请选择事故及责任', trigger: 'change' }]">
        <el-select v-model="form.accidentLiability">
          <el-option v-for="(item,index) in constant.accidentLiability" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预防措施责任人岗位" prop="preventiveManagePost" :rules="[{ required: true, message: '请选择预防措施责任人岗位', trigger: 'change' }]">
        <el-select v-model="form.preventiveManagePost">
          <el-option v-for="(item,index) in constant.preventiveManagePost" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预防措施责任人年龄" prop="patientAge" :rules="[{ required: true, message: '请选择预防措施责任人年龄', trigger: 'change' }]">
        <el-select v-model="form.patientAge">
          <el-option v-for="(item,index) in constant.ages1" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预防措施责任人性别" prop="preventiveManageAge" :rules="[{ required: true, message: '请选择预防措施责任人性别', trigger: 'change' }]">
        <el-radio-group v-model="form.preventiveManageAge">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="预防措施责任人资质" prop="preventiveManageTitle" :rules="[{ required: true, message: '请选择预防措施责任人资质', trigger: 'change' }]">
        <el-select v-model="form.preventiveManageTitle">
          <el-option v-for="(item,index) in constant.preventiveManageTitle" :key="index" :value="item" :label="item"></el-option>
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
          preventive:'',
          preventiveManager:'',
          accidentLiability:'',
          preventiveManagePost:'',
          preventiveManageAge:'',
          preventiveManageSex:'',
          preventiveManageTitle:'',
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
            this.$router.push('/admin/submit')
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
