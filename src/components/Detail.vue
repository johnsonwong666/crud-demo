<template>
  <div id="detail">
    <ul>
      <li>姓名：{{ personDetail.name }}</li>
      <li>年龄：{{ personDetail.age }}</li>
      <li>性别：{{ personDetail.sex }}</li>
      <li>爱好：{{ personDetail.hobby }}</li>
      <li>家乡：{{ personDetail.hometown }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
interface IDetail {
  name: String;
  age: Number;
  sex: String;
  hobby: String;
  hometown: String;
}
import { Component, Vue } from "vue-property-decorator";
import instance from '@/api/index'
@Component({
  components: {},
})
export default class Detail extends Vue {
  personDetail: IDetail = {
    name: "",
    age: 0,
    sex: "",
    hobby: "",
    hometown: "",
  };
  activated() {
    instance.get(`/api/person/${this.$route.params.name}`).then((res) => {
      this.personDetail = res.data;
      console.log(this.personDetail)
    });
  }
}
</script>

<style>
</style>
