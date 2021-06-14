<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div class="btnDiv">
      <el-button type="primary" size="middle" @click="handleLogin">登录</el-button>
      <el-button type="primary" size="middle">注册</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import instance from "@/api/index";
@Component({})
export default class List extends Vue {
  form = {
    name: "",
    password: "",
  };

  activated() {
    localStorage.removeItem("cToken");
  }

  handleLogin() {
    instance.post("/api/login", this.form).then((res) => {
      if (res.data.success) {
        localStorage.setItem("cToken", res.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
        });
        this.$router.push("/list");
      } else {
        this.$message({
          type: "error",
          message: "登录失败",
        });
      }
    });
  }
}
</script>

<style>
.btnDiv {
  text-align: center;
}

.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
