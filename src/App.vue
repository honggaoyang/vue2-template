<template>
  <div>
    <router-link to="/404">404页面</router-link>
    <router-link to="/login">登录</router-link>
    <p>读取vuex中的值:{{$store.state.user.sum}}</p>
    <el-button @click="updataVuex">修改vuex中的值</el-button>
    <el-button @click="$i18n.locale='en'" >切换语言en</el-button>
    <el-button @click="$i18n.locale='zh'" >切换语言zh</el-button>
    {{$t("login.userName")}},{{$i18n.locale}}
    <i class="iconfont icon-weixin"></i>
    <i class="iconfont icon-weibiaoti1"></i>
    <i class="iconfont icon-kefu"></i>
    <router-view />
  </div>
</template>

<script>
// require('@/assets/fonts/iconfont.css')

export default {
  methods: {
    updataVuex() {
      this.$store.commit("user/INCRE", 5); // 直接的读取
    }
  },
  
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if(sessionStorage.getItem('storeState')){
      //replaceState，替换store的根状态
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('storeState'))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("storeState", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style>
/* 引入全局样式 */
@import url("./assets/css/Global.css");
/* 引入字体图标 */
@import url("./assets/fonts/iconfont.css");

</style>