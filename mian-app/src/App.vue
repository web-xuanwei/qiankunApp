<template>
  <div id="main-root">
    <!-- loading -->
    <div v-if="loading">loading</div>
    
    <div style="text-align:center;padding:20px;font-size:40px;">
      <span><router-link to="/">父页面</router-link></span>
      <span style="padding:0 10px;">|</span>
      <span><router-link to="/app-vue">子页面</router-link></span>
    </div>
    

    <router-view></router-view>
    <!-- 子应用盒子 -->
    <div id="container" class="app-view-box" v-html="content"></div>
  </div>
</template>

<script>
import actions from './micro/actions';

export default {
  name: "App",
  props: {
    loading: Boolean,
    content: String,
  },
  data(){
    return {
      name: '',
      
    }
  },
  methods:{
    nameChange(){
      actions.setGlobalState({
        name: '娃子'
      })
    }
  }
};
</script>

<style lang="less">
</style>
