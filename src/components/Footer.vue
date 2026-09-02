```vue
<template>
  <footer class="footer">

    <div class="footer-container">

      <!-- BRAND -->
      <div class="footer-brand">

        <router-link to="/" class="logo">
          Mufasir<span>DevMaster</span>
        </router-link>

        <p>
          Learn technology, build real projects and grow
          your digital skills with Mufasir Devmaster Academy.
        </p>

        <div class="socials">

          <a href="#" aria-label="Facebook">f</a>

          <a href="#" aria-label="Instagram">ig</a>

          <a href="#" aria-label="Twitter">𝕏</a>

          <a href="#" aria-label="LinkedIn">in</a>

        </div>

      </div>


      <!-- QUICK LINKS -->
      <div class="footer-column">

        <h3>Quick Links</h3>

        <router-link to="/">
          Home
        </router-link>

        <router-link to="/courses">
          Courses
        </router-link>

        <router-link to="/about">
          About Us
        </router-link>

        <router-link to="/contact">
          Contact
        </router-link>

      </div>


      <!-- LEARNING -->
      <div class="footer-column">

        <h3>Learning</h3>

        <router-link to="/courses">
          HTML for Beginners
        </router-link>

        <router-link to="/courses">
          CSS Mastery
        </router-link>

        <router-link to="/courses">
          JavaScript Basics
        </router-link>

        <router-link to="/register">
          Register Now
        </router-link>

      </div>


      <!-- CONTACT -->
      <div class="footer-column contact-column">

        <h3>Contact Us</h3>

        <a href="mailto:mufasirdevmaster@gmail.com">
          ✉
          mufasirdevmaster@gmail.com
        </a>

        <a href="tel:09010872023">
          ☎
          09010872023
        </a>

        <a
          href="https://wa.me/2348093963715"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☘
          WhatsApp: 08093963715
        </a>

        <p>
          📍 Nigeria
        </p>

      </div>

    </div>


    <!-- BOTTOM -->
    <div class="footer-bottom">

      <p>
        © {{ currentYear }} Mufasir Devmaster Academy.
        All rights reserved.
      </p>

      <div>

        <router-link to="/contact">
          Privacy
        </router-link>

        <router-link to="/contact">
          Terms
        </router-link>

      </div>

    </div>

  </footer>
</template>


<script setup>

const currentYear = new Date().getFullYear()

</script>


<style scoped>

* {
  box-sizing: border-box;
}


/* FOOTER */

.footer {
  padding: 75px 7% 25px;

  background: #071b2d;

  color: white;
}


/* CONTAINER */

.footer-container {
  max-width: 1150px;

  margin: auto;

  display: grid;

  grid-template-columns: 1.5fr 0.8fr 0.9fr 1.3fr;

  gap: 60px;

  padding-bottom: 55px;

  border-bottom: 1px solid #29445c;
}


/* BRAND */

.logo {
  display: inline-block;

  margin-bottom: 15px;

  color: white;

  font-size: 21px;

  font-weight: 900;

  text-decoration: none;

  letter-spacing: -0.5px;
}


.logo span {
  color: #6da9ff;
}


.footer-brand > p {
  max-width: 300px;

  margin: 0;

  color: #829ab1;

  font-size: 12px;

  line-height: 1.8;
}


/* SOCIALS */

.socials {
  display: flex;

  gap: 8px;

  margin-top: 22px;
}


.socials a {
  width: 32px;

  height: 32px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #35556f;

  border-radius: 7px;

  color: #bcccdc;

  font-size: 10px;

  font-weight: 800;

  text-decoration: none;

  transition: 0.3s;
}


.socials a:hover {
  background: #1261d6;

  border-color: #1261d6;

  color: white;
}


/* COLUMNS */

.footer-column {
  display: flex;

  flex-direction: column;

  gap: 11px;
}


.footer-column h3 {
  margin: 0 0 10px;

  color: white;

  font-size: 13px;
}


.footer-column a,
.footer-column p {
  margin: 0;

  color: #829ab1;

  font-size: 11px;

  line-height: 1.6;

  text-decoration: none;

  transition: 0.3s;
}


.footer-column a:hover {
  color: #6da9ff;

  transform: translateX(2px);
}


/* CONTACT */

.contact-column a {
  display: flex;

  align-items: flex-start;

  gap: 8px;
}


.contact-column p {
  margin-top: 2px;
}


/* BOTTOM */

.footer-bottom {
  max-width: 1150px;

  margin: 22px auto 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;
}


.footer-bottom p {
  margin: 0;

  color: #627d98;

  font-size: 10px;
}


.footer-bottom div {
  display: flex;

  gap: 20px;
}


.footer-bottom a {
  color: #627d98;

  font-size: 10px;

  text-decoration: none;
}


.footer-bottom a:hover {
  color: #6da9ff;
}


/* TABLET */

@media (max-width: 900px) {

  .footer-container {
    grid-template-columns: 1fr 1fr;

    gap: 45px;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .footer {
    padding: 60px 5% 25px;
  }


  .footer-container {
    grid-template-columns: 1fr;

    gap: 35px;

    padding-bottom: 40px;
  }


  .footer-brand > p {
    max-width: 100%;
  }


  .footer-bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 12px;
  }

}

</style>
```
