<template>
  <div class="first">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="发生场所" prop="eventPlace" :rules="[{ required: true, message: '请选择发生场所', trigger: 'change' }]">
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
      <el-form-item label="场景" prop="eventScene" :rules="[{ required: true, message: '请选择用户状态描述', trigger: 'change' }]">
        <el-select v-model="form.eventScene">
          <el-option v-for="(item,index) in constant.eventScene" :key="index" :value="item" :label="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="事件种类" prop="eventMemo" :rules="[{ required: true, message: '请选择事件种类', trigger: 'change' }]">
        <el-select v-model="form.eventType" @change="eventTypeChange">
          <el-option v-for="(item,index) in constant.eventType" :key="index" :value="item.name" :label="item.name"></el-option>
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
          <el-option v-for="(item,index) in constant.workerTypes" :key="index" :value="item.name" :label="item.name"></el-option>
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
        form: {
          disposeWorkerSex: '',
          disposeWorkerName: '',
          disposeWorkerAge: '',
          eventPlaceType: '',
          eventPlace: '',
          eventTime: '',
          eventScene: '',
          eventType: '',
          eventMemo: '',
          symptom: '',
          dispose: '',
          disposeWorkerType: '',
          disposeWorkerTitle: '',
        },
        constant: constant,
        places: [],
        eventMemo:[],
        workerTitle:[],
      }
    },
    created(){
      this.form = Object.assign({}, this.form, this.$store.state.editInfo)
    },
    methods: {
      //发生场所
      eventPlaceChange(){
        this.form.eventPlace = '';
        this.places = this.constant.placeTypes.filter(val => val.name == this.form.eventPlaceType)[0].list;
      },
      eventTypeChange(){
        this.form.eventMemo = '';
        this.eventMemo = this.constant.eventType.filter(val => val.name == this.form.eventType)[0].list;
      },
      workerTypeChange(){
        this.form.disposeWorkerTitle = '';
        this.workerTitle = this.constant.workerTypes.filter(val => val.name == this.form.disposeWorkerType)[0].list;
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
