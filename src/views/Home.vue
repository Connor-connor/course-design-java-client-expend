<template>
  <div>
    <div class="home-top">
      <NaviTop/>
    </div>
    <div class="home-main" :style="{'height':`${searchHeight-67}px`}">
      <div class="home-main-navi">
        <NaviLeft/>
      </div>
      <div class="home-main-workbench" :style="{'width':`${searchWidth-274}px`}">
        <WorkBench :searchWidth="searchWidth" :searchHeight="searchHeight"></WorkBench>
      </div>
    </div>
  </div>
</template>

<script>
import NaviTop from "@/components/NaviTop";
import NaviLeft from "@/components/NaviLeft";
import WorkBench from "@/components/WorkBench";
import router from "@/router/index.js";
import {downloadPost} from "@/service/genServ.js";

export default {
  name: "Home",
  components: {
    NaviTop,
    NaviLeft,
    WorkBench,
  },
  data() {
    return {
      searchHeight: 500,
      searchWidth: 500,
    }
  },
  mounted(){
    this.searchFormHeight(); // 组件初始化的时候不会触发onresize事件，这里强制执行一次
    this.searchFormWidth(); // 组件初始化的时候不会触发onresize事件，这里强制执行一次
    window.onresize = () => {
      // if(!this.timer){ // 使用节流机制，降低函数被触发的频率
        this.timer = true;
        let that = this; // 匿名函数的执行环境具有全局性，为防止this丢失这里用that变量保存一下
        setTimeout(function(){
          that.searchFormHeight();
          that.searchFormWidth();
          that.timer = false;
        },50)
      // }
    }
  },
  unmounted() {
    // 组件销毁后解绑事件
    window.onresize = null;
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      router.push("/login");
    },
    downPDF() {
      downloadPost(
          "http://localhost:9090/api/teach/printStudentIntroduce",
          "个人简历"
      );
    },
    searchFormHeight() {
      this.searchHeight = window.innerHeight;
      return window.innerHeight;
    },
    searchFormWidth() {
      this.searchWidth = window.innerWidth;
      // this.$refs.Workbench.findWidth(this.searchWidth);
      return window.innerWidth;
    },
  },
  /*mounted () {
    // const _this = this;
    // // 画echars
    // // 监听浏览器窗口变化
    // window.onresize = function() {
    //   // console.log("agag")
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth;
    //     _this.screenWidth = window.screenWidth;
    //   })();
    // };

    window.addEventListener("resize", () => {
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
    });

  },

  watch: {
    screenWidth: {
      immediate: true,
      handler: function(newVal) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          this.screenWidth = newVal;
          this.timer = true;
          let _this = this;
          setTimeout(() => {
            //在这里做有关浏览器变化时需要做的操作
            _this.timer = false;
          }, 400);
        }
        // if(newVal)
      }
    }
  },*/
};
</script>

<style scoped>
body {
  background-color: #f6f6f6;
}
.home-top {
  width: 100%;
  height: 50px;
  /*border: 2px solid #00b1e7;*/
}
.home-main {
  position: relative;
  top: 8px;
  width: 100%;
  /*border: 2px solid #00b1e7;*/
}
.home-main-navi {
  float: left;
  width: 250px;
  height: 100%;
  /*border: 2px solid #625e33;*/
}
.home-main-workbench {
  float: left;
  width: 500px;
  height: 100%;
  /*border: 2px solid #625e33;*/
}



</style>