<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from '@/components/Login.vue'
@Component({
  components: {
    Login
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
