```vue
<template>
  <div class="courses-page">

    <Navbar />

    <!-- HERO -->
    <section class="courses-hero">

      <div class="hero-content">

        <span>MUfasir DEVMASTER ACADEMY</span>

        <h1>
          Learn.
          <strong>Build. Grow.</strong>
        </h1>

        <p>
          Practical courses designed to help you build real
          frontend development skills and real-world projects.
        </p>

      </div>

    </section>


    <!-- COURSES -->
    <section class="courses-section">

      <div class="section-heading">

        <span>OUR COURSES</span>

        <h2>
          Choose Your
          <strong>Learning Path.</strong>
        </h2>

        <p>
          Start from the basics or improve your existing
          development skills with practical lessons.
        </p>

      </div>


      <div class="course-grid">

        <!-- HTML -->
        <div class="course-card">

          <div class="icon html">
            HTML
          </div>

          <span class="level">
            BEGINNER
          </span>

          <h3>HTML for Beginners</h3>

          <p>
            Learn how websites are structured and create
            your first webpages from scratch.
          </p>

          <div class="price">
            ₦15,000
          </div>

          <router-link
            to="/register?course=HTML%20for%20Beginners&price=15000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>


        <!-- CSS -->
        <div class="course-card">

          <div class="icon css">
            CSS
          </div>

          <span class="level">
            BEGINNER
          </span>

          <h3>CSS Mastery</h3>

          <p>
            Create beautiful, responsive and modern website
            interfaces using CSS.
          </p>

          <div class="price">
            ₦20,000
          </div>

          <router-link
            to="/register?course=CSS%20Mastery&price=20000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>


        <!-- JAVASCRIPT -->
        <div class="course-card featured">

          <div class="popular">
            POPULAR
          </div>

          <div class="icon javascript">
            JS
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

          <h3>JavaScript</h3>

          <p>
            Learn programming fundamentals and build
            interactive websites.
          </p>

          <div class="price">
            ₦30,000
          </div>

          <router-link
            to="/register?course=JavaScript&price=30000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>


        <!-- REACT -->
        <div class="course-card">

          <div class="icon react">
            ⚛
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

          <h3>React Development</h3>

          <p>
            Build modern interfaces using components,
            state, props and hooks.
          </p>

          <div class="price">
            ₦35,000
          </div>

          <router-link
            to="/register?course=React%20Development&price=35000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>


        <!-- VUE -->
        <div class="course-card">

          <div class="icon vue">
            V
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

          <h3>Vue.js Development</h3>

          <p>
            Build complete applications using Vue,
            components and routing.
          </p>

          <div class="price">
            ₦35,000
          </div>

          <router-link
            to="/register?course=Vue.js%20Development&price=35000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>


        <!-- VITE -->
        <div class="course-card">

          <div class="icon vite">
            V
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

          <h3>Vite & Frontend Tools</h3>

          <p>
            Learn modern frontend tooling and create
            fast development projects.
          </p>

          <div class="price">
            ₦25,000
          </div>

          <router-link
            to="/register?course=Vite%20%26%20Frontend%20Tools&price=25000"
            class="course-button"
          >
            Register Now →
          </router-link>

        </div>

      </div>

    </section>


    <!-- LEARNING PATH -->
    <section class="learning-section">

      <div class="learning-content">

        <span>YOUR JOURNEY</span>

        <h2>
          From Beginner
          <strong>to Developer.</strong>
        </h2>

        <p>
          Build your skills step by step. Start with HTML and
          CSS, learn JavaScript, then move into modern
          frameworks and development tools.
        </p>

      </div>


      <div class="steps">

        <div class="step">
          <strong>01</strong>
          <span>HTML & CSS</span>
        </div>

        <div class="step">
          <strong>02</strong>
          <span>JavaScript</span>
        </div>

        <div class="step">
          <strong>03</strong>
          <span>React / Vue</span>
        </div>

        <div class="step">
          <strong>04</strong>
          <span>Real Projects</span>
        </div>

      </div>

    </section>


    <!-- CTA -->
    <section class="courses-cta">

      <div>

        <span>READY TO START?</span>

        <h2>
          Start Learning
          <strong>Today.</strong>
        </h2>

        <p>
          Choose a course and take the first step toward
          becoming a developer.
        </p>

      </div>

      <router-link
        to="/register"
        class="cta-button"
      >
        Register Now →
      </router-link>

    </section>


    <Footer />

  </div>
</template>


<script setup>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>


<style scoped>

* {
  box-sizing: border-box;
}


.courses-page {
  min-height: 100vh;

  background: white;

  color: #102a43;
}


/* ================================
   HERO
================================ */

.courses-hero {
  padding: 100px 7%;

  background: #071b2d;

  color: white;

  text-align: center;
}


.hero-content {
  max-width: 750px;

  margin: auto;
}


.hero-content span,
.section-heading > span,
.learning-content > span,
.courses-cta span {
  color: #6da9ff;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 1.7px;
}


.hero-content h1 {
  margin: 15px 0;

  font-size: 50px;

  line-height: 1.1;
}


.hero-content h1 strong {
  color: #6da9ff;
}


.hero-content p {
  max-width: 620px;

  margin: auto;

  color: #bcccdc;

  font-size: 14px;

  line-height: 1.8;
}


/* ================================
   COURSES
================================ */

.courses-section {
  padding: 100px 7%;
}


.section-heading {
  max-width: 700px;

  margin: 0 auto 55px;

  text-align: center;
}


.section-heading h2 {
  margin: 14px 0 10px;

  font-size: 38px;

  line-height: 1.15;
}


.section-heading h2 strong {
  color: #1261d6;
}


.section-heading p {
  color: #627d98;

  font-size: 13px;

  line-height: 1.8;
}


/* GRID */

.course-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}


/* CARD */

.course-card {
  position: relative;

  padding: 27px;

  border: 1px solid #e1eaf3;

  border-radius: 16px;

  background: white;

  transition: 0.3s;
}


.course-card:hover {
  transform: translateY(-6px);

  box-shadow:
    0 15px 35px rgba(16, 42, 67, 0.09);
}


.course-card.featured {
  border-color: #1261d6;
}


/* POPULAR */

.popular {
  position: absolute;

  top: 15px;

  right: 15px;

  padding: 5px 9px;

  border-radius: 20px;

  background: #1261d6;

  color: white;

  font-size: 7px;

  font-weight: 900;
}


/* ICON */

.icon {
  width: 58px;

  height: 58px;

  margin-bottom: 18px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 12px;

  font-family: monospace;

  font-size: 14px;

  font-weight: 900;
}


.icon.html {
  background: #fff1ed;

  color: #e34c26;
}


.icon.css {
  background: #eaf2ff;

  color: #1261d6;
}


.icon.javascript {
  background: #fff9df;

  color: #b79500;
}


.icon.react {
  background: #e9f9ff;

  color: #149eca;

  font-size: 25px;
}


.icon.vue {
  background: #eafaf2;

  color: #42b883;

  font-size: 24px;
}


.icon.vite {
  background: #f3efff;

  color: #7c4dff;

  font-size: 24px;
}


/* LEVEL */

.level {
  display: inline-block;

  margin-bottom: 10px;

  padding: 5px 8px;

  border-radius: 4px;

  background: #f0f5fa;

  color: #627d98;

  font-size: 7px;

  font-weight: 900;
}


.course-card h3 {
  margin: 0 0 10px;

  font-size: 18px;
}


.course-card p {
  min-height: 60px;

  margin: 0 0 18px;

  color: #627d98;

  font-size: 11px;

  line-height: 1.7;
}


/* PRICE */

.price {
  margin-bottom: 18px;

  color: #102a43;

  font-size: 20px;

  font-weight: 900;
}


/* BUTTON */

.course-button {
  display: block;

  padding: 12px;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  text-align: center;

  text-decoration: none;

  font-size: 10px;

  font-weight: 900;

  transition: 0.3s;
}


.course-button:hover {
  background: #0d4fae;
}


/* ================================
   LEARNING PATH
================================ */

.learning-section {
  padding: 80px 7%;

  background: #f7faff;
}


.learning-content {
  max-width: 650px;

  margin: auto;

  text-align: center;
}


.learning-content h2 {
  margin: 14px 0;

  font-size: 36px;
}


.learning-content h2 strong {
  color: #1261d6;
}


.learning-content p {
  color: #627d98;

  font-size: 13px;

  line-height: 1.8;
}


.steps {
  max-width: 900px;

  margin: 45px auto 0;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 15px;
}


.step {
  padding: 22px;

  border: 1px solid #e1eaf3;

  border-radius: 12px;

  background: white;

  text-align: center;
}


.step strong {
  display: block;

  margin-bottom: 10px;

  color: #1261d6;

  font-size: 11px;
}


.step span {
  font-size: 12px;

  font-weight: 800;
}


/* ================================
   CTA
================================ */

.courses-cta {
  max-width: 1100px;

  margin: 90px auto;

  padding: 40px 45px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  border-radius: 17px;

  background: #102a43;

  color: white;
}


.courses-cta h2 {
  margin: 8px 0;

  font-size: 28px;
}


.courses-cta h2 strong {
  color: #6da9ff;
}


.courses-cta p {
  margin: 0;

  color: #bcccdc;

  font-size: 12px;
}


.cta-button {
  padding: 13px 22px;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  text-decoration: none;

  font-size: 11px;

  font-weight: 900;

  white-space: nowrap;
}


/* ================================
   TABLET
================================ */

@media (max-width: 900px) {

  .course-grid {
    grid-template-columns: 1fr 1fr;
  }


  .steps {
    grid-template-columns: 1fr 1fr;
  }

}


/* ================================
   MOBILE
================================ */

@media (max-width: 600px) {

  .courses-hero {
    padding: 75px 5%;
  }


  .hero-content h1 {
    font-size: 38px;
  }


  .courses-section,
  .learning-section {
    padding: 70px 5%;
  }


  .section-heading h2,
  .learning-content h2 {
    font-size: 32px;
  }


  .course-grid {
    grid-template-columns: 1fr;
  }


  .steps {
    grid-template-columns: 1fr;
  }


  .courses-cta {
    margin: 70px 5%;

    padding: 30px;

    flex-direction: column;

    align-items: flex-start;
  }


  .cta-button {
    width: 100%;

    text-align: center;
  }

}

</style>
```
