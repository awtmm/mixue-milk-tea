<template>
  <div class="login-bg-mx">
    <div class="login-container-mx">
      <button class="back-btn-mx" @click="goBack" aria-label="返回">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 23L10 15L18 7" stroke="#e60012" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <img src="/src/assets/images/logo.jpeg" alt="蜜雪冰城LOGO" class="mx-logo" />
      <div class="login-title-mx">蜜雪冰城登录</div>
      <form @submit.prevent="handleLogin">
        <div class="input-group-mx">
          <input v-model="username" type="text" placeholder="手机号/用户名" required />
        </div>
        <div class="input-group-mx">
          <input v-model="password" type="password" placeholder="密码" required />
        </div>
        <button class="login-btn-mx" type="submit">登录</button>
      </form>
      <button class="register-btn-mx" @click="goRegister">注册账号</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

function handleLogin() {
  alert(`欢迎来到蜜雪冰城，${username.value}！`);
}
function goBack() {
  router.back();
}
function goRegister() {
  router.push('/register');
}
</script>

<style scoped>
.login-bg-mx {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff5f5;
}
.login-container-mx {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(220, 53, 69, 0.08);
  padding: 40px 32px 32px 32px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid #ff4d4f22;
  position: relative;
}
.back-btn-mx {
  position: absolute;
  top: 18px;
  left: 18px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;
  outline: none;
  transition: background 0.2s;
}
.back-btn-mx:hover svg path {
  stroke: #ff4d4f;
}
.mx-logo {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ff4d4f;
  object-fit: cover;
}
.login-title-mx {
  font-size: 1.6rem;
  color: #e60012;
  font-weight: bold;
  margin-bottom: 28px;
  letter-spacing: 1px;
}
.input-group-mx {
  width: 100%;
  margin-bottom: 20px;
}
.input-group-mx input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1.5px solid #ffd6d6;
  background: #fff;
  color: #e60012;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}
.input-group-mx input:focus {
  border: 1.5px solid #ff4d4f;
}
.login-btn-mx {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff4d4f 0%, #e60012 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}
.login-btn-mx:hover {
  background: linear-gradient(90deg, #e60012 0%, #ff4d4f 100%);
}
.register-btn-mx {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  background: #fff;
  color: #e60012;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 14px;
  border: 1.5px solid #ffd6d6;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.register-btn-mx:hover {
  background: #fff0f0;
  color: #ff4d4f;
  border: 1.5px solid #ff4d4f;
}
</style>