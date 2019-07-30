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
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="请输入密码"
          v-model="password"
        />
      </div>
      <router-link to="/register" class="btn btn-primary">前往注册</router-link>
      <button class="btn btn-primary" @click="submit">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    submit() {
      if (this.username == "") {
        alert("请输入用户名!");
        return;
      }
      if (this.password == "") {
        alert("请输入密码!");
        return;
      }
      fetch("/login", {
        body: JSON.stringify({
          username: this.username,
          password: this.password
        }),
        method: "POST"
      })
        .then(data => data.json())
        .then(data => {
          if (data.message == "success") {
            this.$store.commit("setLogin", true);
            this.$store.commit("setUsername", this.username);
            this.$store.commit("setUsertype", data.usertype);
            this.$store.commit("setName", data.info.name);
            this.$store.commit("setId", data.info.id);
            this.$store.commit("setSex", data.info.sex);
            this.$store.commit("setPhone", data.info.phone);
            this.$store.commit("setQQ", data.info.QQ);
            this.$store.commit("setEmail", data.info.email);
            this.$store.commit("setAvatar", data.info.avatar);
            document.cookie = `username=${this.username}`;
            document.cookie = `token=${data.token}`;
            this.$router.push(`/${data.usertype}`);
          } else {
            alert("用户名或密码错误！");
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
