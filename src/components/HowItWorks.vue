```vue
<template>
  <section class="how-it-works">

    <div class="section-heading">

      <span>HOW IT WORKS</span>

      <h2>
        From Beginner
        <strong>To Builder.</strong>
      </h2>

      <p>
        Follow a simple learning process designed to help you
        understand concepts, practice your skills and build real projects.
      </p>

    </div>


    <div class="steps-container">

      <!-- STEP 1 -->
      <div class="step">

        <div class="step-number">
          01
        </div>

        <div class="step-icon">
          🔎
        </div>

        <h3>Choose Your Path</h3>

        <p>
          Explore our courses and choose the skill you want
          to learn based on your current level.
        </p>

      </div>


      <div class="step-line"></div>


      <!-- STEP 2 -->
      <div class="step">

        <div class="step-number">
          02
        </div>

        <div class="step-icon">
          📖
        </div>

        <h3>Learn The Basics</h3>

        <p>
          Follow simple lessons that break down important
          concepts into easy-to-understand steps.
        </p>

      </div>


      <div class="step-line"></div>


      <!-- STEP 3 -->
      <div class="step">

        <div class="step-number">
          03
        </div>

        <div class="step-icon">
          🛠️
        </div>

        <h3>Build & Practice</h3>

        <p>
          Apply what you've learned by creating projects
          and solving practical challenges.
        </p>

      </div>


      <div class="step-line"></div>


      <!-- STEP 4 -->
      <div class="step">

        <div class="step-number">
          04
        </div>

        <div class="step-icon">
          🚀
        </div>

        <h3>Launch & Grow</h3>

        <p>
          Keep improving your skills, build your portfolio
          and move towards bigger opportunities.
        </p>

      </div>

    </div>


    <!-- BOTTOM CARD -->
    <div class="journey-card">

      <div class="journey-text">

        <span>YOUR JOURNEY</span>

        <h3>
          Don't just learn.
          <strong>Build something.</strong>
        </h3>

      </div>

      <router-link
        to="/register"
        class="journey-btn"
      >
        Start Learning →
      </router-link>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* SECTION */

.how-it-works {
  padding: 105px 7%;

  background: #f7faff;

  color: #102a43;
}


/* HEADING */

.section-heading {
  max-width: 700px;

  margin: 0 auto 65px;

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
  max-width: 620px;

  margin: auto;

  color: #627d98;

  font-size: 16px;

  line-height: 1.8;
}


/* STEPS */

.steps-container {
  max-width: 1120px;

  margin: auto;

  display: flex;

  align-items: flex-start;

  justify-content: center;
}


/* STEP */

.step {
  width: 220px;

  text-align: center;
}


.step-number {
  margin-bottom: 10px;

  color: #b9cce0;

  font-size: 11px;

  font-weight: 900;

  letter-spacing: 1px;
}


.step-icon {
  width: 65px;

  height: 65px;

  margin: auto;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 5px solid #f7faff;

  border-radius: 50%;

  background: white;

  box-shadow:
    0 8px 25px rgba(16, 42, 67, 0.08);

  font-size: 25px;

  position: relative;

  z-index: 2;
}


.step h3 {
  margin: 20px 0 10px;

  font-size: 16px;
}


.step p {
  margin: 0;

  color: #627d98;

  font-size: 12px;

  line-height: 1.7;
}


/* LINE */

.step-line {
  width: 55px;

  height: 2px;

  margin-top: 98px;

  background: #d9e7f7;
}


/* JOURNEY CARD */

.journey-card {
  max-width: 900px;

  margin: 70px auto 0;

  padding: 25px 30px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  border-radius: 14px;

  background: #102a43;

  color: white;
}


.journey-text > span {
  color: #6da9ff;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1.4px;
}


.journey-text h3 {
  margin: 6px 0 0;

  font-size: 19px;
}


.journey-text h3 strong {
  color: #6da9ff;
}


.journey-btn {
  flex-shrink: 0;

  padding: 12px 18px;

  border-radius: 7px;

  background: #1261d6;

  color: white;

  text-decoration: none;

  font-size: 11px;

  font-weight: 800;

  transition: 0.3s;
}


.journey-btn:hover {
  background: #2874e0;

  transform: translateY(-2px);
}


/* TABLET */

@media (max-width: 1000px) {

  .steps-container {
    flex-wrap: wrap;

    gap: 40px;
  }


  .step-line {
    display: none;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .how-it-works {
    padding: 75px 5%;
  }


  .section-heading h2 {
    font-size: 35px;
  }


  .section-heading p {
    font-size: 14px;
  }


  .steps-container {
    flex-direction: column;

    align-items: center;

    gap: 35px;
  }


  .step {
    width: 100%;

    max-width: 330px;
  }


  .journey-card {
    flex-direction: column;

    align-items: flex-start;

    padding: 25px;
  }


  .journey-btn {
    width: 100%;

    text-align: center;
  }

}

</style>
```
