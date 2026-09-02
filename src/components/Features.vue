```vue
<template>
  <section class="features" id="features">

    <div class="section-heading">

      <span>WHY MUFASIR DEVMASTER?</span>

      <h2>
        Everything You Need To
        <strong>Start Building.</strong>
      </h2>

      <p>
        We make technology learning simple, practical and
        focused on helping you create real things.
      </p>

    </div>


    <div class="features-grid">

      <!-- FEATURE 1 -->
      <div class="feature-card">

        <div class="feature-number">
          01
        </div>

        <div class="feature-icon">
          💡
        </div>

        <h3>
          Simple Learning
        </h3>

        <p>
          Understand difficult technology concepts through
          clear explanations designed for beginners.
        </p>

        <div class="feature-link">
          Learn with clarity →
        </div>

      </div>


      <!-- FEATURE 2 -->
      <div class="feature-card active">

        <div class="feature-number">
          02
        </div>

        <div class="feature-icon">
          🛠️
        </div>

        <h3>
          Practical Projects
        </h3>

        <p>
          Don't just watch tutorials. Build real projects
          that help you develop your skills through practice.
        </p>

        <div class="feature-link">
          Learn by building →
        </div>

      </div>


      <!-- FEATURE 3 -->
      <div class="feature-card">

        <div class="feature-number">
          03
        </div>

        <div class="feature-icon">
          🚀
        </div>

        <h3>
          Grow With Confidence
        </h3>

        <p>
          Build the confidence to continue learning,
          solve problems and take on bigger projects.
        </p>

        <div class="feature-link">
          Keep growing →
        </div>

      </div>


      <!-- FEATURE 4 -->
      <div class="feature-card">

        <div class="feature-number">
          04
        </div>

        <div class="feature-icon">
          🎯
        </div>

        <h3>
          Career Focused
        </h3>

        <p>
          Develop useful skills that can prepare you for
          freelance work, internships and future opportunities.
        </p>

        <div class="feature-link">
          Build your future →
        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* SECTION */

.features {
  padding: 105px 7%;

  background: #f7faff;

  color: #102a43;
}


/* HEADING */

.section-heading {
  max-width: 700px;

  margin: 0 auto 60px;

  text-align: center;
}


.section-heading > span {
  color: #1261d6;

  font-size: 11px;

  font-weight: 900;

  letter-spacing: 1.7px;
}


.section-heading h2 {
  margin: 14px 0;

  font-size: 43px;

  line-height: 1.15;

  letter-spacing: -1px;
}


.section-heading h2 strong {
  color: #1261d6;
}


.section-heading p {
  max-width: 600px;

  margin: auto;

  color: #627d98;

  font-size: 16px;

  line-height: 1.8;
}


/* GRID */

.features-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;
}


/* CARD */

.feature-card {
  position: relative;

  min-height: 330px;

  padding: 28px;

  border: 1px solid #e2eaf2;

  border-radius: 17px;

  background: white;

  overflow: hidden;

  transition: 0.3s;
}


.feature-card:hover {
  transform: translateY(-7px);

  border-color: #b9d2f5;

  box-shadow:
    0 18px 40px rgba(16, 42, 67, 0.08);
}


/* NUMBER */

.feature-number {
  position: absolute;

  top: 18px;

  right: 20px;

  color: #d9e7f7;

  font-size: 25px;

  font-weight: 900;
}


/* ICON */

.feature-icon {
  width: 55px;

  height: 55px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 25px;

  border-radius: 13px;

  background: #eaf2ff;

  font-size: 24px;
}


/* TEXT */

.feature-card h3 {
  margin: 0 0 12px;

  font-size: 18px;
}


.feature-card p {
  margin: 0;

  color: #627d98;

  font-size: 13px;

  line-height: 1.8;
}


/* LINK */

.feature-link {
  position: absolute;

  left: 28px;

  bottom: 25px;

  color: #1261d6;

  font-size: 11px;

  font-weight: 800;
}


/* ACTIVE CARD */

.feature-card.active {
  background: #102a43;

  border-color: #102a43;

  color: white;

  transform: translateY(-8px);
}


.feature-card.active:hover {
  transform: translateY(-13px);
}


.feature-card.active .feature-number {
  color: #29445c;
}


.feature-card.active .feature-icon {
  background: #1261d6;
}


.feature-card.active p {
  color: #bcccdc;
}


.feature-card.active .feature-link {
  color: #6da9ff;
}


/* TABLET */

@media (max-width: 1000px) {

  .features-grid {
    grid-template-columns: 1fr 1fr;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .features {
    padding: 75px 5%;
  }


  .section-heading h2 {
    font-size: 35px;
  }


  .section-heading p {
    font-size: 14px;
  }


  .features-grid {
    grid-template-columns: 1fr;
  }


  .feature-card {
    min-height: 290px;
  }


  .feature-card.active {
    transform: none;
  }


  .feature-card.active:hover {
    transform: translateY(-7px);
  }

}

</style>
```

