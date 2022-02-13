<template>
  <div class="login-wrap">
    <a-form-model
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <a-form-model-item>
        <a-input v-model="formInline.user" placeholder="Username">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-input
          v-model="formInline.password"
          type="password"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
          Log in
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      localStorage.setItem('islogin', true);
      this.$startQiankun();
    },
  },
};
</script>

<style lang="less">
.login-wrap {
  padding: 20px;
  width: 600px;
  text-align: center;
  margin: 100px auto;
  background-color: #ddd;
}
</style>