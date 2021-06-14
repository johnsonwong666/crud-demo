<template>
  <el-container>
    <el-header>express+mongodb CRUD演示</el-header>
    <el-main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="200" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" width="200" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="200" align="center"></el-table-column>
        <el-table-column label="操作" width="783" align="center">
          <template slot-scope="scope">
            <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-button type="primary" @click="handleAdd" v-if="!isShowForm">新增</el-button>
      <span v-else>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
        <el-button type="primary" @click="handleClose">关闭</el-button>
      </span>
    </el-footer>
    <div style="margin-top: 30px"></div>

    <el-form label-position="left" label-width="70px" :model="formLabelAlign" v-if="isShowForm">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formLabelAlign.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="formLabelAlign.sex"></el-input>
      </el-form-item>
      <el-form-item label="爱好">
        <el-input v-model="formLabelAlign.hobby"></el-input>
      </el-form-item>
      <el-form-item label="家乡">
        <el-input v-model="formLabelAlign.hometown"></el-input>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script lang="ts">
interface Data {
  name: String;
  age: Number;
  sex: String;
  hobby: String;
  hometown: String;
  id: String;
}

import { Component, Vue } from "vue-property-decorator";
import instance from "@/api/index";
@Component({})
export default class List extends Vue {
  tableData: Data[] = [];
  activated() {
    this.getPerson();
  }
  // labelPosition: String = "right";
  isShowForm: boolean = false;
  submitType: number = 0;
  formLabelAlign: Data = {
    name: "",
    age: 0,
    sex: "",
    hobby: "",
    hometown: "",
    id: "",
  };

  getPerson(): void {
    instance
      .get("/api/getPerson")
      .then((res: any) => {
        this.tableData = res.data.map((item: any) => {
          return {
            name: item.name,
            age: item.age,
            sex: item.sex,
            hobby: item.hobby,
            hometown: item.hometown,
            id: item._id,
          };
        });
      })
      .catch((err) => {
        this.$router.replace("/login");
        this.$message({
          type: "error",
          message: "请先登录",
        });
      });
  }

  handleCheck(row: any) {
    this.$router.push(`/detail/${row.id}`);
  }

  handleDelete(row: any) {
    instance
      .post("/api/deletePerson", {
        id: row.id,
      })
      .then((res) => {
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.getPerson();
      });
  }

  handleAdd(): void {
    this.isShowForm = true;
    this.submitType = 0;
    this.formLabelAlign = {
      name: "",
      age: 0,
      sex: "",
      hobby: "",
      hometown: "",
      id: "",
    };
  }

  handleEdit(row: any): void {
    this.submitType = 1;
    this.formLabelAlign = {
      name: row.name,
      age: row.age,
      sex: row.sex,
      hobby: row.hobby,
      hometown: row.hometown,
      id: row.id,
    };
    this.isShowForm = true;
  }

  handleClose(): void {
    this.isShowForm = false;
  }

  handleSubmit(): void {
    switch (this.submitType) {
      case 0:
        instance.post("/api/addPerson", this.formLabelAlign).then((res) => {
          this.$message({
            type: "success",
            message: "添加成功",
          });
        });
        this.isShowForm = false;
        this.getPerson();
        break;
      case 1:
        instance.post("/api/updatePerson", this.formLabelAlign).then((res) => {
          this.$message({
            type: "success",
            message: "修改成功",
          });
        });
        this.isShowForm = false;
        this.getPerson();
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

/* .el-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border: 2px solid #ccc;
  border-radius: 10px;
}
 */

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
