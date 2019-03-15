<template>
  <div class="first">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="服务点类别" prop="domainType"
                    :rules="[{ required: true, message: '请选择服务点类别', trigger: 'change' }]">
        <el-select v-model="form.domainType">
          <el-option v-for="(item,index) in constant.domainTypes" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务点名称" prop="domainId"
                    :rules="[{ required: true, message: '请选择服务点名称', trigger: 'change' }]">
        <el-select v-model="form.domainId" @change="domainChange">
          <el-option v-for="(value, key, index) in constant.domains" :key="index" :value="key"
                     :label="value.displayName"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务点地址" prop="abbreviate">
        <el-input placeholder="服务点地址与服务点数据自动匹配" :readonly="true" v-model="form.domainAddresss"></el-input>
      </el-form-item>
      <el-form-item label="成立年份">
        <el-input placeholder="成立年份与服务点数据自动匹配" :readonly="true" v-model="form.domainCreatetime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">继续</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {DOMAIN} from '../../../common/js/DOMAINS_ALLINFO'
  import constant from '../../../common/js/constant'
  export default{
    data(){
      return {
        domains: DOMAIN,
        constant:constant,
        form: {
          domainType: '',
          domainId: '',
          domainName: '',
          domainAddresss: '',
          domainCreatetime: ''
        },
      }
    },
    created(){
      this.form = Object.assign({}, this.form, this.$store.state.editInfo)
    },
    methods: {
      domainChange(){
        let {addressInfo, creationTime, displayName} = this.domains[this.form.domainId];
        this.form.domainName = displayName;
        this.form.domainAddresss = addressInfo;
        this.form.domainCreatetime = creationTime;
      },

      submit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$store.commit('setEditInfo', this.form)
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
