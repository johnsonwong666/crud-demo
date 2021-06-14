<template>
  <div id="login-register">
      <login></login>
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
export default class Detail extends Vue {

}
</script>

<style>
  
</style>
