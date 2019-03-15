import Vue from 'vue'

function initGlobal() {
//全局title
  Vue.directive('title', {
    inserted: (el, binding) => {
      document.title = el.innerText;
      $(el).css({display: 'none'});
    },
    update: (el, binding) => {//组件更新后重新赋值
      document.title = el.innerText;
    },
  })

}

export {
  initGlobal
}
