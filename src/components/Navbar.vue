```vue
<template>
  <header class="navbar">

    <div class="nav-container">

      <!-- LOGO -->
      <router-link to="/" class="logo">
        Mufasir<span>DevMaster</span>
      </router-link>


      <!-- DESKTOP NAVIGATION -->
      <nav class="nav-links">

        <router-link to="/">
          Home
        </router-link>

        <router-link to="/courses">
          Courses
        </router-link>

        <router-link to="/about">
          About
        </router-link>

        <router-link to="/contact">
          Contact
        </router-link>

      </nav>


      <!-- REGISTER -->
      <router-link
        to="/register"
        class="register-btn"
      >
        Register Now
        <span>→</span>
      </router-link>


      <!-- MOBILE MENU BUTTON -->
      <button
        class="menu-btn"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

    </div>


    <!-- MOBILE MENU -->
    <div
      v-if="menuOpen"
      class="mobile-menu"
    >

      <router-link
        to="/"
        @click="menuOpen = false"
      >
        Home
      </router-link>

      <router-link
        to="/courses"
        @click="menuOpen = false"
      >
        Courses
      </router-link>

      <router-link
        to="/about"
        @click="menuOpen = false"
      >
        About
      </router-link>

      <router-link
        to="/contact"
        @click="menuOpen = false"
      >
        Contact
      </router-link>

      <router-link
        to="/register"
        class="mobile-register"
        @click="menuOpen = false"
      >
        Register Now →
      </router-link>

    </div>

  </header>
</template>


<script setup>

import { ref } from 'vue'

const menuOpen = ref(false)

</script>


<style scoped>

* {
  box-sizing: border-box;
}


/* NAVBAR */

.navbar {
  width: 100%;

  position: sticky;

  top: 0;

  z-index: 1000;

  background: rgba(255, 255, 255, 0.96);

  border-bottom: 1px solid #e8eef5;

  backdrop-filter: blur(10px);
}


/* CONTAINER */

.nav-container {
  max-width: 1200px;

  height: 72px;

  margin: auto;

  padding: 0 7%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}


/* LOGO */

.logo {
  color: #102a43;

  font-size: 20px;

  font-weight: 900;

  letter-spacing: -0.6px;

  text-decoration: none;

  white-space: nowrap;
}


.logo span {
  color: #1261d6;
}


/* NAV LINKS */

.nav-links {
  display: flex;

  align-items: center;

  gap: 32px;

  margin-left: auto;
}


.nav-links a {
  position: relative;

  color: #486581;

  font-size: 12px;

  font-weight: 700;

  text-decoration: none;

  transition: 0.3s;
}


.nav-links a:hover {
  color: #1261d6;
}


.nav-links a.router-link-active {
  color: #1261d6;
}


.nav-links a.router-link-active::after {
  content: '';

  position: absolute;

  left: 0;

  right: 0;

  bottom: -9px;

  height: 2px;

  border-radius: 10px;

  background: #1261d6;
}


/* REGISTER */

.register-btn {
  padding: 11px 16px;

  display: flex;

  align-items: center;

  gap: 7px;

  border-radius: 7px;

  background: #1261d6;

  color: white;

  font-size: 11px;

  font-weight: 800;

  text-decoration: none;

  transition: 0.3s;

  white-space: nowrap;
}


.register-btn:hover {
  background: #0d4fae;

  transform: translateY(-1px);
}


.register-btn span {
  font-size: 14px;
}


/* MOBILE BUTTON */

.menu-btn {
  display: none;

  border: none;

  background: transparent;

  color: #102a43;

  font-size: 25px;

  cursor: pointer;
}


/* MOBILE MENU */

.mobile-menu {
  display: none;
}


/* TABLET */

@media (max-width: 800px) {

  .nav-links {
    gap: 18px;
  }


  .register-btn {
    padding: 10px 13px;
  }

}


/* MOBILE */

@media (max-width: 650px) {

  .nav-container {
    height: 65px;

    padding: 0 5%;
  }


  .nav-links,
  .register-btn {
    display: none;
  }


  .menu-btn {
    display: block;
  }


  .mobile-menu {
    padding: 12px 5% 20px;

    display: flex;

    flex-direction: column;

    gap: 3px;

    border-top: 1px solid #edf2f7;

    background: white;

    box-shadow:
      0 10px 25px rgba(16, 42, 67, 0.08);
  }


  .mobile-menu a {
    padding: 13px 10px;

    border-radius: 7px;

    color: #486581;

    font-size: 13px;

    font-weight: 700;

    text-decoration: none;
  }


  .mobile-menu a:hover {
    background: #f4f8fc;

    color: #1261d6;
  }


  .mobile-menu .router-link-active {
    color: #1261d6;
  }


  .mobile-register {
    margin-top: 8px;

    background: #1261d6 !important;

    color: white !important;

    text-align: center;
  }

}

</style>
```

