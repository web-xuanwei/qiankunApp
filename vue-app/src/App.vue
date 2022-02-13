<template>
  <div id="root">
    <!-- <div id="nav">
      <button @click="change1">改变父组件传过来的值</button>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    change1(){
      this._LOGIN('123')
    }
  }
}
</script>

<style lang="less">
</style>
