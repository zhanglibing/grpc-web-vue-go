import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
//获取session值
function getSessionByName(name) {
  var val = 0;
  if (sessionStorage[name] != "-1" && sessionStorage[name]) {
    val = JSON.parse(sessionStorage[name]);
  }
  return val;
}
//设置session值
function setSessionVal(name, val) {
  sessionStorage[name] = JSON.stringify(val);
}
//状态
const state = {
  userInfo: getSessionByName('aiUserInfo'),
  editInfo:getSessionByName('editInfo'),  //记录五部数据
  activeIndex:1,
  searchList:getSessionByName('searchList')
}

const mutations = {
  setUserInfo(state, val){
    state.userInfo = val;
    setSessionVal('aiUserInfo', val);
  },
  setEditInfo(state, val){
    state.editInfo = Object.assign( {},state.editInfo,val);
    if(state.activeIndex<5){
      state.activeIndex++;
    }
    setSessionVal('editInfo', val);
  },
  setActiveIndex(state,val){
    state.activeIndex--;
  },
  setSearchList(state,val){
    state.searchList=val;
    setSessionVal('searchList', val);
  }
}

export default new Vuex.Store({
  state, mutations
})
