<template>
  <div>
    <div class="myChart" ref="myChart"></div>
  </div>
</template>
<script>
  export default{
    props: {
      data: {  //数据
        type: Object,
        default: () => {
          return {};
        }
      },
      showType: {
        type: String,
        default: 'bar'
      },
      type: {
        type: String,
        default: ''
      },
      index: {  //父组件穿过来的选中值
        type: Number,
        default: 3
      },
      showText: {  //父组件穿过来的选中值
        type: String,
        default: '标定次数(次)'
      }
    },
    data(){
      return {
        activeIndex: -1, //选中状态
      }
    },

    computed:{
      total(){
        let result=this.data.y.reduce((num,item,index)=>{
          return num+item;
        })
        return result;
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        let myChart = this.$echarts.init(this.$refs.myChart);
        myChart.setOption({
          color: ['#fff'],
          title: {
            text:` ${this.showText}(${this.total})`,
            textStyle:{color: '#fff'},
          },
          toolbox: {

          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            },
//          backgroundColor: 'rgba(250,250,250,0.7)',// 悬浮框的颜色
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.data.x,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                interval: 0,
                rotate: 50,
                textStyle: {
                  color: '#999'
                }
              },
            }
          ],
          yAxis: [{
            // type: 'value'
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#999'
              }
            },
          }],
          series: [
            {
              type: this.showType,
              barGap: '-100%',
              barCategoryGap: '40%',
              animation: true,
              itemStyle: this.getItemStyle(),
              name: this.showText,
              data: this.data.y,
            },

          ]
        });
        myChart.on('click', (params) => {
          this.activeIndex = params.dataIndex;
          if (this.type) {
            let id = this.data.id[params.dataIndex];
            this.$router.push({path: `/admin/label/${this.type}`, query: {id}})
          }

        });
      },
      getItemStyle(){
        return {
          normal: {
            //添加圆角
            barBorderRadius: [2, 2, 0, 0],
            barBorderColor: (params) => {
              if (this.index != -1 && this.index == params.dataIndex) {
                return '#C33531';
              }
            },
            //背景色
            color: (params) => {
              if (this.activeIndex == params.dataIndex) {
                return new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#b0ff47'},
                    {offset: 0.5, color: '#00cdff'},
                    {offset: 1, color: '#1c43d8'}
                  ]
                );
              }
              if (params.data < 0) {
                return '#C33531';
              }
              return new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#00cdff'},
                  {offset: 1, color: '#1c43d8'}
                ]
              );
            },
            label: {
              show: true,		//开启显示
              position: 'top',	//在上方显示
              textStyle: {	    //数值样式
                color: '#fff',
                fontSize: 16
              }
            }
          },
          emphasis: {  //鼠标经过状态
            barBorderWidth: 1,
            shadowBlur: 6,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#C33531'
          }
        }
      },
    }
  }
</script>
<style lang="scss" scoped="">
  .myChart {
    height: calc(42vh);
    min-height: 350px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
