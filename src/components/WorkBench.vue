<template>
  <div class="workbench">
    <!--    <div class="all-list"></div>-->
    <div class="breadcrumb" :style="{'width':`${this.searchWidth-300}px`}">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="operation-area"
         :style="{'width':`${this.searchWidth-300}px`,
                  'height':`${this.searchHeight-146}px`}">
<!--      <input type="text"><button>搜索</button>
      <input type="text">
      <input type="text">-->
      <nav class="search-box" :style="{'width':`${this.searchWidth-350}px`}">
        <div class="search">
          <input class="search-input" type="text" placeholder="搜索人名">
          <button class="search-button">
            <i class="el-icon-user-solid"></i>
          </button>
        </div>
        <div class="search">
          <input class="search-input" type="text" placeholder="搜索人名">
          <button class="search-button">
            <i class="el-icon-user-solid"></i>
          </button>
        </div>
        <div class="search">
          <input class="search-input" type="text" placeholder="搜索人名">
          <button class="search-button">
            <i class="el-icon-user-solid"></i>
          </button>
        </div>


        <div class="date-select">
          <span class="pre-text">外出时间：</span>
          <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
          </el-date-picker>
        </div>


      </nav>
      <nav class="crud-box" :style="{'width':`${this.searchWidth-350}px`}">
        <div class="search">
          <button class="search-button">
            增加
            <i class="el-icon-circle-plus-outline"></i>
          </button>
        </div>
        <div class="search">
          <button class="search-button">
            删除
            <i class="el-icon-remove-outline"></i>
          </button>
        </div>
        <div class="search">
          <button class="search-button">
            修改
            <i class="el-icon-warning-outline"></i>
          </button>
        </div>

      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBench",
  components: {},
  props: ['searchWidth','searchHeight'],

  data() {
    return {
      thisSearchWidth: this.searchWidth,
      thisSearchHeight: this.searchHeight,
      listA: [
        {
          name: "BaseTable",
          title: "表格示例",
          children: [
            {
              name: "BaseTableOne",
              title: "表格示例1",
            },
            {
              name: "BaseTabletwo",
              title: "表格示例2",
            },
          ],
        },
        {
          name: "BaseForm",
          title: "表单示例",
          children: [],
        },
      ],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    };
  },
  methods: {

  },

};
</script>
<style scoped>
/*@import "/style/date-select-style.less";*/
.workbench {
  position: relative;
  left: 5px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0 25px 25px 0;
  box-shadow: 5px 5px 25px #797979;
  border-right: 4px solid #c80201;
}

.workbench .breadcrumb {
  width: 60px;
  height: 40px;
  position: absolute;
  left: 12px;
  top: 12px;
  background-color: #fff;
  box-shadow: 5px 5px 25px #797979;
  border-radius: 20px;
}
.el-breadcrumb {
  position: absolute;
  top: 14px;
  left: 30px;
}
.operation-area {
  width: 60px;
  height: 40px;
  position: absolute;
  left: 12px;
  top: 65px;
  background-color: #fff;
  box-shadow: 5px 5px 25px #797979;
  border-radius: 20px;
}

/*搜索框*/
/*搜索框外部盒子*/
* {
  margin: 0;
  padding: 0;
}
.search-box {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 600px;
  height: 40px;
  /*border: 1px solid #00b1e7;*/
  overflow: hidden;
}
.search {
  /*border: 1px solid #00b1e7;*/
  float: left;
  width: 187px;
  height: 34px;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.search:hover {
  box-shadow: 2px 4px 2px #ccc;
}
.search-input {
  width: 140px;
  height: 30px;
  border: 3px solid #9b0d14;
  border-right: none;
  border-radius: 10px 0 0 10px;
  padding-left: 8px;
  outline: none;
}
.search-button {
  width: 36px;
  height: 36px;
  border: 3px solid #9b0d14;
  border-radius: 0 10px 10px 0;
  background: #9b0d14;
}
.el-icon-user-solid {
  margin-right: 2px;
  color: #fff;
}


/*日期选择器*/
.date-select {
  float: left;
}

/deep/.el-range-editor.el-input__inner {
  padding: 0px 10px;
  width: 360px;
  height: 36px;
  border-radius: 10px;

  border: 3px solid #9b0d14;
  font-weight: 700;
  /*background-color: #9b0d14;*/
}
/*前图标*/
/deep/.el-date-editor .el-range__icon {
  font-size: 18px;
  font-weight: 700;
  margin-left: -4px;
  margin-top: 2px;
  color: #9b0d14;
  float: left;
  line-height: 32px;
}
/*后图标*/
/deep/.el-date-editor .el-range__close-icon {
  font-size: 18px;
  font-weight: 700;
  margin-top: 2px;
  margin-left: 5px;
  color: #9b0d14;
  width: 20px;
  display: inline-block;
  float: right;
  line-height: 32px;
}

/deep/.el-button--text {
  width: 50px;
  padding-left: 10vh;
  padding-right: 10vh;
  color: #9b0d14;
}
/*文本框*/
/deep/.el-date-editor .el-range-input {
  height: 90%;
  margin-top: 3px;
  padding: 0;
  width: 39%;
  text-align: center;
  font-size: var(--el-font-size-base);
  color: var(--el-text-color-regular);
}

/*时间选择器*/
/*   .input {
     padding-left: 10px;
     background-color: transparent;
     border: 1px solid #44a5fc;
     color: white;
     height: 30px;
     box-shadow: 0 0 15px #23c5ff inset;
     margin-right: 30px;
   }

/deep/.el-date-editor .el-range-input {
  background-color: transparent;
  color: white;
}
/deep/.el-range-editor.el-input__inner {
  padding: 0;
}
!*去除icon*!
  /deep/.el-icon-time:before {
    content: "";
  }
 !*时间范围背景色*!
   /deep/.el-date-table td.in-range div,
   .el-date-table td.in-range div:hover,
   .el-date-table.is-week-mode .el-date-table__row.current div,
   .el-date-table.is-week-mode .el-date-table__row:hover div {
     background-color: #d4e854;
   }*/

.crud-box {
  position: absolute;
  left: 20px;
  top: 68px;
  width: 600px;
  height: 40px;
  overflow: hidden;
  /*border: 1px solid #00b1e7;*/

}
.crud-box .search-button {
  width: 100%;
  height: 100%;
  border: 3px solid #9b0d14;
  border-radius: 10px;
  background: #9b0d14;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
}
.crud-box .search-button i {
  font-weight: 700;
  margin-left: 10px;
}
/*
!*搜索框整体*!
.search {
  float: left;
  width: 10%;
  height: 25px;
  margin: 0 50px;
  display: flex;
  justify-content: left;
  !*align-content: center;*!
  min-width: 10%;
}
!*输入框*!
.search-input {
  width: 150px;
  height: 25px;
  border-right: none;
  border-radius: 10px 0 0 10px;
  border-color: #9b0d14;
  !* 去除搜索框激活状态的黑色边框 *!
  outline: none;
}
.search:hover {
  !* 鼠标移入状态 *!
  box-shadow: 2px 2px 2px #ccc;
}
.search-input:focus {
  !* 选中状态,边框颜色变化 *!
  border-color: #cc030d;
}
.search-button {
  width: 100px;
  height: 31px;
  background-color: #9b0d14;
  border-radius: 0 10px 10px 0;
  border-color: #9b0d14;
  color: white;
  font-size: 14px;
}
*/

</style>
