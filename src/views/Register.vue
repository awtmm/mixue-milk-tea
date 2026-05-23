<template>
  <div class="register-bg-mx">
    <div class="register-container-mx">
      <button class="back-btn-mx" @click="goBack" aria-label="返回">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 23L10 15L18 7" stroke="#e60012" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <img src="/src/assets/images/logo.jpeg" alt="蜜雪冰城LOGO" class="mx-logo" />
      <div class="register-title-mx">蜜雪冰城注册</div>
      <form @submit.prevent="handleRegister">
        <div class="input-group-mx">
          <input v-model="phone" type="text" placeholder="手机号" required />
        </div>
        <div class="input-group-mx">
          <input v-model="username" type="text" placeholder="用户名" required />
        </div>
        <div class="input-group-mx">
          <input v-model="password" type="password" placeholder="密码" required />
        </div>
        <div class="input-group-mx">
          <input v-model="confirmPassword" type="password" placeholder="确认密码" required />
        </div>
        <button class="register-btn-mx" type="submit">注册</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const phone = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

function handleRegister() {
  if (password.value !== confirmPassword.value) {
    alert('两次输入的密码不一致！');
    return;
  }
  
  alert(`注册成功，欢迎您，${username.value}！`);
  router.push('/login');
}
function goBack() {
  router.back();
}
</script>

<style scoped>
.register-bg-mx {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff5f5;
}
.register-container-mx {
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
.register-title-mx {
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
.register-btn-mx {
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
.register-btn-mx:hover {
  background: linear-gradient(90deg, #e60012 0%, #ff4d4f 100%);
}
</style> 