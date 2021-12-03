<template>
  <div class="d-flex justify-content-around align-items-center h-100vh">
    <div class="login">
      <div class="login__logo">
        <img :src="require('@/assets/images/login_logo.svg')" alt="">
      </div>
      <b-form>
      <label class="sr-only" for="login">Login</label>
      <b-form-input
        id="login"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Login"
      ></b-form-input>

      <label for="pass">Password</label>
      <b-form-input type="password" id="pass" name="password" aria-describedby="password-help-block"></b-form-input>

    <b-button variant="primary" class="login__submit">Login</b-button>
    </b-form>
    </div>
  </div>


</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>