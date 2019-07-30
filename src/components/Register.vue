<template>
  <div>
    <h1>在线考试系统</h1>
    <div class="container" id="container">
      <div class="form-group">
        <label for="username">用户名</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="请输入用户名"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="usertype">用户类型</label>
        <select class="form-control" id="usertype" v-model="usertype">
          <option value="student">学生</option>
          <option value="teacher">老师</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="请输入密码"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="repassword">确认密码</label>
        <input
          type="password"
          class="form-control"
          id="repassword"
          placeholder="请再次输入密码"
          v-model="repassword"
        />
      </div>
      <router-link to="/login" class="btn btn-primary">返回登录</router-link>
      <button class="btn btn-primary" @click="submit">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "",
      usertype: "student",
      password: "",
      repassword: ""
    };
  },
  mounted() {},
  methods: {
    submit() {
      if (this.username == "") {
        alert("用户名不能为空！");
        return;
      }
      if (this.password == "") {
        alert("密码不能为空！");
        return;
      }
      if (this.repassword == "") {
        alert("请再次输入密码！");
        return;
      }
      if (this.password !== this.repassword) {
        alert("两次密码不一致");
        return;
      }
      fetch("/register", {
        body: JSON.stringify({
          username: this.username,
          usertype: this.usertype,
          password: this.password
        }),
        method: "POST"
      })
        .then(data => data.json())
        .then(data => {
          if (data.message == "success") {
            this.$store.commit("setLogin", true);
            this.$store.commit("setUsername", this.username);
            this.$store.commit("setUsertype", this.usertype);
            document.cookie = `username=${this.username}`;
            document.cookie = `token=${data.token}`;
            this.$router.push(`/${this.usertype}`);
          } else {
            alert("用户名已存在！");
          }
        });
    }
  }
});
</script>

<style lang="scss" scoped>
h1 {
  padding-top: 90px;
  text-align: center;
}

#container {
  margin-top: 40px;
  max-width: 310px;
}
</style>