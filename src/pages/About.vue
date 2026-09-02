```vue
<template>
  <div class="about-page">

    <Navbar />

    <!-- HERO -->
    <section class="about-hero">

      <div class="hero-content">

        <span>ABOUT MUFASIR DEVMASTER ACADEMY</span>

        <h1>
          Learn Skills.
          <strong>Build Your Future.</strong>
        </h1>

        <p>
          We help aspiring developers learn practical technology
          skills and turn their ideas into real-world projects.
        </p>

      </div>

    </section>


    <!-- WHO WE ARE -->
    <section class="about-section">

      <div class="about-container">

        <div class="about-text">

          <span>WHO WE ARE</span>

          <h2>
            More Than Just
            <strong>Courses.</strong>
          </h2>

          <p>
            Mufasir Devmaster Academy is a practical technology
            learning platform created to help beginners and
            aspiring developers build valuable digital skills.
          </p>

          <p>
            Instead of focusing only on theory, we believe in
            learning by doing. Our students learn technologies,
            practice what they learn and build projects they
            can proudly add to their portfolios.
          </p>

        </div>


        <div class="about-card">

          <div class="card-icon">
            &lt;/&gt;
          </div>

          <h3>Learn by Building</h3>

          <p>
            Every skill becomes more valuable when you can use it
            to create something real.
          </p>

        </div>

      </div>

    </section>


    <!-- MISSION -->
    <section class="mission-section">

      <div class="section-heading">

        <span>OUR MISSION</span>

        <h2>
          Making Technology
          <strong>Accessible.</strong>
        </h2>

        <p>
          Our goal is to make quality technology education
          simple, practical and accessible to anyone willing
          to learn.
        </p>

      </div>


      <div class="values-grid">

        <div class="value-card">

          <div class="value-number">
            01
          </div>

          <h3>Practical Learning</h3>

          <p>
            Learn through real examples, exercises and
            practical projects.
          </p>

        </div>


        <div class="value-card">

          <div class="value-number">
            02
          </div>

          <h3>Modern Skills</h3>

          <p>
            Learn technologies and tools used by modern
            developers.
          </p>

        </div>


        <div class="value-card">

          <div class="value-number">
            03
          </div>

          <h3>Real Projects</h3>

          <p>
            Build projects that help you develop experience
            and create a strong portfolio.
          </p>

        </div>


        <div class="value-card">

          <div class="value-number">
            04
          </div>

          <h3>Continuous Growth</h3>

          <p>
            Keep learning, improving and adapting as
            technology changes.
          </p>

        </div>

      </div>

    </section>


    <!-- TECHNOLOGIES -->
    <section class="technology-section">

      <div class="section-heading">

        <span>WHAT YOU CAN LEARN</span>

        <h2>
          Learn the Tools
          <strong>Developers Use.</strong>
        </h2>

      </div>


      <div class="technology-grid">

        <div class="technology">
          <strong>HTML</strong>
          <span>Structure</span>
        </div>

        <div class="technology">
          <strong>CSS</strong>
          <span>Design</span>
        </div>

        <div class="technology">
          <strong>JavaScript</strong>
          <span>Programming</span>
        </div>

        <div class="technology">
          <strong>React</strong>
          <span>Frontend</span>
        </div>

        <div class="technology">
          <strong>Vue.js</strong>
          <span>Frontend</span>
        </div>

        <div class="technology">
          <strong>Vite</strong>
          <span>Tooling</span>
        </div>

        <div class="technology">
          <strong>Git</strong>
          <span>Version Control</span>
        </div>

        <div class="technology">
          <strong>Node.js</strong>
          <span>Backend</span>
        </div>

      </div>

    </section>


    <!-- CTA -->
    <section class="about-cta">

      <div>

        <span>READY TO START?</span>

        <h2>
          Start Building
          <strong>Today.</strong>
        </h2>

        <p>
          Choose a course and take the next step in your
          developer journey.
        </p>

      </div>


      <router-link
        to="/courses"
        class="cta-button"
      >
        Explore Courses →
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


.about-page {
  min-height: 100vh;

  background: white;

  color: #102a43;
}


/* ================================
   HERO
================================ */

.about-hero {
  padding: 105px 7%;

  background: #071b2d;

  color: white;

  text-align: center;
}


.hero-content {
  max-width: 760px;

  margin: auto;
}


.hero-content span,
.about-text > span,
.section-heading > span,
.about-cta span {
  color: #6da9ff;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 1.7px;
}


.hero-content h1 {
  margin: 15px 0;

  font-size: 48px;

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
   WHO WE ARE
================================ */

.about-section {
  padding: 100px 7%;
}


.about-container {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  gap: 80px;

  align-items: center;
}


.about-text h2 {
  margin: 14px 0;

  font-size: 38px;

  line-height: 1.15;
}


.about-text h2 strong {
  color: #1261d6;
}


.about-text p {
  max-width: 600px;

  margin-bottom: 18px;

  color: #627d98;

  font-size: 13px;

  line-height: 1.9;
}


/* ABOUT CARD */

.about-card {
  padding: 40px;

  border: 1px solid #dfe8f1;

  border-radius: 18px;

  background: #f7faff;
}


.card-icon {
  width: 65px;

  height: 65px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 20px;

  border-radius: 14px;

  background: #eaf2ff;

  color: #1261d6;

  font-family: monospace;

  font-size: 22px;

  font-weight: 900;
}


.about-card h3 {
  margin: 0 0 10px;

  font-size: 21px;
}


.about-card p {
  margin: 0;

  color: #627d98;

  font-size: 12px;

  line-height: 1.8;
}


/* ================================
   MISSION
================================ */

.mission-section {
  padding: 100px 7%;

  background: #f7faff;
}


.section-heading {
  max-width: 700px;

  margin: 0 auto 50px;

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
  margin: 0;

  color: #627d98;

  font-size: 13px;

  line-height: 1.8;
}


/* VALUES */

.values-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;
}


.value-card {
  padding: 25px;

  border: 1px solid #e1eaf3;

  border-radius: 14px;

  background: white;
}


.value-number {
  margin-bottom: 20px;

  color: #1261d6;

  font-size: 11px;

  font-weight: 900;
}


.value-card h3 {
  margin: 0 0 10px;

  font-size: 16px;
}


.value-card p {
  margin: 0;

  color: #627d98;

  font-size: 11px;

  line-height: 1.7;
}


/* ================================
   TECHNOLOGIES
================================ */

.technology-section {
  padding: 100px 7%;
}


.technology-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 15px;
}


.technology {
  padding: 22px;

  border: 1px solid #e1eaf3;

  border-radius: 12px;

  background: white;

  transition: 0.3s;
}


.technology:hover {
  transform: translateY(-5px);

  border-color: #1261d6;

  box-shadow:
    0 12px 30px rgba(16, 42, 67, 0.07);
}


.technology strong {
  display: block;

  margin-bottom: 5px;

  color: #102a43;

  font-size: 15px;
}


.technology span {
  color: #829ab1;

  font-size: 10px;
}


/* ================================
   CTA
================================ */

.about-cta {
  max-width: 1100px;

  margin: 0 auto 90px;

  padding: 40px 45px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  border-radius: 17px;

  background: #102a43;

  color: white;
}


.about-cta h2 {
  margin: 8px 0;

  font-size: 27px;
}


.about-cta h2 strong {
  color: #6da9ff;
}


.about-cta p {
  margin: 0;

  color: #bcccdc;

  font-size: 12px;
}


.cta-button {
  padding: 13px 20px;

  flex-shrink: 0;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  text-decoration: none;

  font-size: 11px;

  font-weight: 800;
}


/* ================================
   MOBILE
================================ */

@media (max-width: 900px) {

  .about-container {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .values-grid {
    grid-template-columns: 1fr 1fr;
  }


  .technology-grid {
    grid-template-columns: 1fr 1fr;
  }

}


@media (max-width: 600px) {

  .about-hero {
    padding: 75px 5%;
  }


  .hero-content h1 {
    font-size: 36px;
  }


  .about-section,
  .mission-section,
  .technology-section {
    padding: 70px 5%;
  }


  .about-text h2,
  .section-heading h2 {
    font-size: 32px;
  }


  .values-grid,
  .technology-grid {
    grid-template-columns: 1fr;
  }


  .about-cta {
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
