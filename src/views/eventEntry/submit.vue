<template>
  <div>
    <common-title v-if="id"></common-title>
    <div class="submit-box">
      <div class="btn-box" v-if="id">
        <el-button type="primary" @click="submit">编辑保存</el-button>
        <el-button @click="$router.go(-1)">返回</el-button>
      </div>
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="服务点类别" prop="domainType"
                      :rules="[{ required: bool, message: '请选择服务点类别', trigger: 'change' }]">
          <el-select v-model="form.domainType">
            <el-option v-for="(item,index) in constant.domainTypes" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服务点名称" prop="domainId"
                      :rules="[{ required: bool, message: '请选择服务点名称', trigger: 'change' }]">
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
        <el-form-item label="用户性别" prop="patientSex"
                      :rules="[{ required: bool, message: '请选择用户性别', trigger: 'change' }]">
          <el-radio-group v-model="form.patientSex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户姓名" prop="patientName"
                      :rules="[{ required: bool, message: '用户姓名不能为空', trigger: 'blur' }]">
          <el-input placeholder="请填写用户姓名" v-model="form.patientName"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄段" prop="patientAge"
                      :rules="[{ required: bool, message: '请选择用户年龄段', trigger: 'change' }]">
          <el-select v-model="form.patientAge">
            <el-option v-for="(item,index) in constant.ages" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户类型" prop="patientType"
                      :rules="[{ required: bool, message: '请选择用户类型', trigger: 'change' }]">
          <el-select v-model="form.patientType">
            <el-option v-for="(item,index) in constant.userTypes" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户状态类别" prop="patientState"
                      :rules="[{ required: bool, message: '请选择用户状态类别', trigger: 'change' }]">
          <el-select v-model="form.patientState">
            <el-option v-for="(item,index) in constant.userStates" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户状态描述" prop="patientStateMemo"
                      :rules="[{ required: bool, message: '请选择用户状态描述', trigger: 'change' }]">
          <el-select v-model="form.patientStateMemo">
            <el-option v-for="(item,index) in constant.userStatesMemo" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发生场所" prop="eventPlace"
                      :rules="[{ required: true, message: '请选择发生场所', trigger: 'change' }]">
          <el-select v-model="form.eventPlaceType" @change="eventPlaceChange">
            <el-option v-for="(item,index) in constant.placeTypes" :key="index" :value="item.name"
                       :label="item.name"></el-option>
          </el-select>
          <el-select v-model="form.eventPlace">
            <el-option v-for="(item,index) in places" :key="index" :value="item" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发生时间段" prop="eventTime"
                      :rules="[{ required: true, message: '请选择发生时间段', trigger: 'change' }]">
          <el-select v-model="form.eventTime">
            <el-option v-for="(item,index) in constant.eventTimes" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="场景" prop="eventScene"
                      :rules="[{ required: true, message: '请选择用户状态描述', trigger: 'change' }]">
          <el-select v-model="form.eventScene">
            <el-option v-for="(item,index) in constant.eventScene" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="事件种类" prop="eventMemo"
                      :rules="[{ required: true, message: '请选择事件种类', trigger: 'change' }]">
          <el-select v-model="form.eventType" @change="eventTypeChange">
            <el-option v-for="(item,index) in constant.eventType" :key="index" :value="item.name"
                       :label="item.name"></el-option>
          </el-select>
          <el-select v-model="form.eventMemo">
            <el-option v-for="(item,index) in eventMemo" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="症状" prop="symptom" :rules="[{ required: true, message: '请选择症状', trigger: 'change' }]">
          <el-select v-model="form.symptom">
            <el-option v-for="(item,index) in constant.symptoms" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="紧急处理" prop="dispose" :rules="[{ required: true, message: '请选择紧急处理', trigger: 'change' }]">
          <el-select v-model="form.dispose">
            <el-option v-for="(item,index) in constant.disposes" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="紧急处理人岗位" prop="disposeWorkerTitle"
                      :rules="[{ required: true, message: '请选择紧急处理人岗位', trigger: 'change' }]">
          <el-select v-model="form.disposeWorkerType" @change="workerTypeChange">
            <el-option v-for="(item,index) in constant.workerTypes" :key="index" :value="item.name"
                       :label="item.name"></el-option>
          </el-select>
          <el-select v-model="form.disposeWorkerTitle">
            <el-option v-for="(item,index) in workerTitle" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="紧急处理人年龄" prop="disposeWorkerAge"
                      :rules="[{ required: true, message: '请选择紧急处理人年龄', trigger: 'change' }]">
          <el-select v-model="form.disposeWorkerAge">
            <el-option v-for="(item,index) in constant.ages1" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="紧急处理人姓名" prop="disposeWorkerName"
                      :rules="[{ required: true, message: '紧急处理人姓名不能为空', trigger: 'blur' }]">
          <el-input placeholder="请填写紧急处理人姓名" v-model="form.disposeWorkerName"></el-input>
        </el-form-item>
        <el-form-item label="紧急处理人性别" prop="disposeWorkerSex"
                      :rules="[{ required: true, message: '请选择紧急处理人性别', trigger: 'change' }]">
          <el-radio-group v-model="form.disposeWorkerSex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="事件分级" prop="eventLv" :rules="[{ required: true, message: '请选择事件分级', trigger: 'change' }]">
          <el-select v-model="form.eventLv">
            <el-option v-for="(item,index) in constant.eventLvs" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事件结果转归" prop="eventResult"
                      :rules="[{ required: true, message: '请选择事件结果转归', trigger: 'change' }]">
          <el-select v-model="form.eventResult">
            <el-option v-for="(item,index) in constant.eventResult" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="原因" prop="eventReasonMemo"
                      :rules="[{ required: true, message: '请选择原因', trigger: 'change' }]">
          <el-select v-model="form.eventReason" @change="eventReasonChange">
            <el-option v-for="(item,index) in constant.eventReason" :key="index" :value="item.name"
                       :label="item.name"></el-option>
          </el-select>
          <el-select v-model="form.eventReasonMemo">
            <el-option v-for="(item,index) in eventReasonMemo" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跟踪处理措施" prop="followUpl"
                      :rules="[{ required: true, message: '请选择跟踪处理措施', trigger: 'change' }]">
          <el-select v-model="form.followUpl">
            <el-option v-for="(item,index) in constant.followUpl" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="质控负责人" prop="qcUserName"
                      :rules="[{ required: true, message: '质控负责人不能为空', trigger: 'blur' }]">
          <el-input placeholder="质控负责人" v-model="form.qcUserName"></el-input>
        </el-form-item>
        <el-form-item label="质控负责人年龄" prop="qcUserAge"
                      :rules="[{ required: true, message: '请选择质控负责人年龄', trigger: 'change' }]">
          <el-select v-model="form.qcUserAge">
            <el-option v-for="(item,index) in constant.ages1" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="质控负责人性别" prop="disposeWorkerSex"
                      :rules="[{ required: true, message: '请选择质控负责人性别', trigger: 'change' }]">
          <el-radio-group v-model="form.qcUserSex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="质控负责人资质" prop="qcUserTitle"
                      :rules="[{ required: true, message: '请选择质控负责人资质', trigger: 'change' }]">
          <el-select v-model="form.qcUserType" @change="qcUserTypeChange">
            <el-option v-for="(item,index) in constant.qcUserType" :key="index" :value="item.name"
                       :label="item.name"></el-option>
          </el-select>
          <el-select v-model="form.qcUserTitle">
            <el-option v-for="(item,index) in qcUserTitle" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="预防措施" prop="preventive"
                      :rules="[{ required: bool, message: '用户姓名不能为空', trigger: 'change' }]">
          <el-select v-model="form.preventive">
            <el-option v-for="(item,index) in constant.preventives" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预防措施责任人姓名" prop="preventiveManager"
                      :rules="[{ required: bool, message: '预防措施责任人姓名不能为空', trigger: 'blur' }]">
          <el-input placeholder="请填写用户姓名" v-model="form.preventiveManager"></el-input>
        </el-form-item>
        <el-form-item label="事故及责任" prop="accidentLiability"
                      :rules="[{ required: bool, message: '请选择事故及责任', trigger: 'change' }]">
          <el-select v-model="form.accidentLiability">
            <el-option v-for="(item,index) in constant.accidentLiability" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预防措施责任人岗位" prop="preventiveManagePost"
                      :rules="[{ required: bool, message: '请选择预防措施责任人岗位', trigger: 'change' }]">
          <el-select v-model="form.preventiveManagePost">
            <el-option v-for="(item,index) in constant.preventiveManagePost" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预防措施责任人年龄" prop="patientAge"
                      :rules="[{ required: bool, message: '请选择预防措施责任人年龄', trigger: 'change' }]">
          <el-select v-model="form.patientAge">
            <el-option v-for="(item,index) in constant.ages1" :key="index" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预防措施责任人性别" prop="preventiveManageAge"
                      :rules="[{ required: bool, message: '请选择预防措施责任人性别', trigger: 'change' }]">
          <el-radio-group v-model="form.preventiveManageAge">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预防措施责任人资质" prop="preventiveManageTitle"
                      :rules="[{ required: bool, message: '请选择预防措施责任人资质', trigger: 'change' }]">
          <el-select v-model="form.preventiveManageTitle">
            <el-option v-for="(item,index) in constant.preventiveManageTitle" :key="index" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="!id">
          <el-button @click="$router.go(-1)">上一步</el-button>
          <el-button type="primary" @click="submit">{{id ? '编辑保存' : '确认上传并返回首页'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<script>
  import constant from '../../common/js/constant'
  import commonTitle from '@/components/commonTitle'
  import { server } from "@/common/server.js";
  export default{
    components: {
      commonTitle
    },
    data(){
      return {
        bool: true,
        form: this.$store.state.editInfo,
        constant: constant,
        id: '',
        places: [],
        eventMemo:[],
        workerTitle:[],
        eventReasonMemo: [],
        qcUserTitle: [],
        isInit: true,
      }
    },
    created(){
      let id = this.$route.query.id;
      this.id = id;
      if (id) {
        server.view({id}).then(res => {
          this.form = res;
          this.init()
        })

      }
      else {
        this.form = this.$store.state.editInfo;
        this.init()
      }
    },
    methods: {
      init(){
        this.eventPlaceChange();
        this.eventTypeChange();
        this.workerTypeChange();
        this.eventReasonChange();
        this.qcUserTypeChange();
        this.isInit = false;
      },
      domainChange(){
        let {addressInfo, creationTime, displayName} = this.domains[this.form.domainId];
        this.form.domainName = displayName;
        this.form.domainAddresss = addressInfo;
        this.form.domainCreatetime = creationTime;
      },
      //发生场所
      eventPlaceChange(){
        if (!this.isInit) {
          this.form.eventPlace = '';
        }
        let res = this.constant.placeTypes.filter(val => val.name == this.form.eventPlaceType)[0];
        this.places=res.list?res.list:[];
      },
      eventTypeChange(){
        if (!this.isInit) {
          this.form.eventMemo = '';
        }
        let res= this.constant.eventType.filter(val => val.name == this.form.eventType)[0];
        this.eventMemo=res.list?res.list:[];
      },
      workerTypeChange(){
        if (!this.isInit) {
          this.form.disposeWorkerTitle = '';
        }
        let res = this.constant.workerTypes.filter(val => val.name == this.form.disposeWorkerType)[0];
        this.workerTitle=res.list?res.list:[];
      },
      eventReasonChange(){
        if (!this.isInit) {
          this.form.eventReasonMemo = '';
        }
        let res = this.constant.eventReason.filter(val => val.name == this.form.eventReason)[0];
        this.eventReasonMemo=res.list?res.list:[];
      },
      qcUserTypeChange(){
        if (!this.isInit) {
          this.form.qcUserTitle = '';
        }
        let res = this.constant.qcUserType.filter(val => val.name == this.form.qcUserType)[0];
        this.qcUserTitle=res.list?res.list:[];
      },
      submit(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            server.save(this.form).then(res => {
              let isEdit = this.form.id;
              this.$message.success(`${isEdit ? '保存' : '上传'}成功`);
              this.$store.commit('setEditInfo', ''); //清空缓存
              if (!isEdit) {
                this.$router.push('/admin')
              } else {  //编辑成功
              }

            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped="">
  @import "../../common/css/mixins";

  .btn-box {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .submit-box {
    @include commonWidth;
    padding-top: 40px;
  }

  .el-input {
    max-width: 800px;
  }

  .el-select {
    min-width: 400px;
    max-width: 500px;
  }
</style>
