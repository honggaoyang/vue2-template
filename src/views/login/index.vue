<template>
  <div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    async handleLogin() {
      let params = {
        AccountName: 'XXWX0001',
        AccountPassword: '111111',
      };
      let res = await login(params);

      console.log("res", res);
    }
  }
};
</script>

<style>
</style>