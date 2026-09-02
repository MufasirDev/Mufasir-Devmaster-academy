```vue
<template>
  <section class="hero">

    <div class="hero-container">

      <!-- LEFT CONTENT -->
      <div class="hero-content">

        <div class="welcome-badge">
          <span class="dot"></span>
          Learn. Build. Launch.
        </div>

        <h1>
          Turn Your Ideas
          <span>Into Digital Skills.</span>
        </h1>

        <p class="hero-text">
          Learn modern web development through simple lessons,
          practical exercises and real-world projects.
          Start from where you are and build your way forward.
        </p>

        <div class="hero-buttons">

          <router-link
            to="/courses"
            class="primary-btn"
          >
            Explore Courses
            <span>→</span>
          </router-link>

          <router-link
            to="/register"
            class="outline-btn"
          >
            Register Now
          </router-link>

        </div>

        <div class="hero-trust">

          <div class="avatars">

            <div class="avatar">A</div>
            <div class="avatar">M</div>
            <div class="avatar">Y</div>
            <div class="avatar">+</div>

          </div>

          <div>
            <strong>Start learning today</strong>
            <p>Build skills that move you forward.</p>
          </div>

        </div>

      </div>


      <!-- RIGHT VISUAL -->
      <div class="hero-visual">

        <div class="code-card">

          <div class="code-top">

            <div class="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>your-first-project.html</p>

          </div>


          <div class="code-body">

            <div class="line">
              <span class="number">01</span>
              <span class="tag">&lt;html&gt;</span>
            </div>

            <div class="line indent">
              <span class="number">02</span>
              <span class="tag">&lt;head&gt;</span>
            </div>

            <div class="line indent-2">
              <span class="number">03</span>
              <span class="text">&lt;title&gt;</span>
              <span class="white">My Website</span>
              <span class="text">&lt;/title&gt;</span>
            </div>

            <div class="line indent">
              <span class="number">04</span>
              <span class="tag">&lt;/head&gt;</span>
            </div>

            <div class="line indent">
              <span class="number">05</span>
              <span class="tag">&lt;body&gt;</span>
            </div>

            <div class="line indent-2 highlight">
              <span class="number">06</span>
              <span class="tag">&lt;h1&gt;</span>
              <span class="white">Hello, World!</span>
              <span class="tag">&lt;/h1&gt;</span>
            </div>

            <div class="line indent">
              <span class="number">07</span>
              <span class="tag">&lt;/body&gt;</span>
            </div>

            <div class="line">
              <span class="number">08</span>
              <span class="tag">&lt;/html&gt;</span>
            </div>

          </div>

        </div>


        <!-- FLOATING CARDS -->

        <div class="floating-card project-card">

          <div class="floating-icon">
            🚀
          </div>

          <div>
            <strong>Project Ready</strong>
            <p>Keep building!</p>
          </div>

        </div>


        <div class="floating-card skill-card">

          <div class="check">
            ✓
          </div>

          <div>
            <strong>Skills Growing</strong>
            <p>HTML • CSS • JS</p>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* HERO */

.hero {
  position: relative;

  padding: 95px 7% 110px;

  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(18, 97, 214, 0.13),
      transparent 35%
    ),
    #071b2d;

  color: white;

  overflow: hidden;
}


/* subtle background */

.hero::before {
  content: "";

  position: absolute;

  width: 450px;
  height: 450px;

  border: 1px solid rgba(109, 169, 255, 0.08);

  border-radius: 50%;

  right: -170px;
  top: -180px;
}


.hero-container {
  max-width: 1150px;

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;
}


/* LEFT */

.hero-content {
  position: relative;

  z-index: 2;
}


.welcome-badge {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 8px 13px;

  border: 1px solid rgba(109, 169, 255, 0.25);

  border-radius: 30px;

  background: rgba(18, 97, 214, 0.12);

  color: #a9caff;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.7px;
}


.dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #6da9ff;
}


.hero h1 {
  max-width: 650px;

  margin: 22px 0;

  font-size: 60px;

  line-height: 1.06;

  letter-spacing: -2px;
}


.hero h1 span {
  display: block;

  color: #6da9ff;
}


.hero-text {
  max-width: 600px;

  margin-bottom: 30px;

  color: #bcccdc;

  font-size: 17px;

  line-height: 1.8;
}


/* BUTTONS */

.hero-buttons {
  display: flex;

  gap: 13px;

  margin-bottom: 35px;
}


.primary-btn,
.outline-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  padding: 14px 22px;

  border-radius: 8px;

  text-decoration: none;

  font-size: 13px;

  font-weight: 800;

  transition: 0.3s;
}


.primary-btn {
  background: #1261d6;

  color: white;
}


.primary-btn:hover {
  background: #2874e0;

  transform: translateY(-2px);
}


.outline-btn {
  border: 1px solid #46657f;

  color: white;
}


.outline-btn:hover {
  border-color: #6da9ff;

  background: rgba(109, 169, 255, 0.08);
}


/* TRUST */

.hero-trust {
  display: flex;

  align-items: center;

  gap: 12px;
}


.avatars {
  display: flex;
}


.avatar {
  width: 30px;

  height: 30px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-left: -6px;

  border: 2px solid #071b2d;

  border-radius: 50%;

  background: #dceaff;

  color: #1261d6;

  font-size: 9px;

  font-weight: 900;
}


.avatar:first-child {
  margin-left: 0;
}


.hero-trust strong {
  font-size: 11px;
}


.hero-trust p {
  margin: 3px 0 0;

  color: #829ab1;

  font-size: 10px;
}


/* RIGHT VISUAL */

.hero-visual {
  position: relative;

  min-height: 440px;

  display: flex;

  align-items: center;

  justify-content: center;
}


/* CODE CARD */

.code-card {
  width: 100%;

  max-width: 500px;

  border: 1px solid #29445c;

  border-radius: 15px;

  background: #0c253b;

  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.3);

  overflow: hidden;

  transform: rotate(1deg);

  transition: 0.4s;
}


.code-card:hover {
  transform: rotate(0deg) translateY(-5px);
}


.code-top {
  height: 48px;

  padding: 0 16px;

  display: flex;

  align-items: center;

  gap: 15px;

  border-bottom: 1px solid #29445c;
}


.window-dots {
  display: flex;

  gap: 5px;
}


.window-dots span {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #5c7891;
}


.code-top p {
  margin: 0;

  color: #829ab1;

  font-family: monospace;

  font-size: 10px;
}


.code-body {
  padding: 25px 20px;

  font-family: monospace;

  font-size: 12px;

  line-height: 2.4;
}


.line {
  display: flex;

  gap: 10px;
}


.number {
  width: 20px;

  color: #486581;

  user-select: none;
}


.tag {
  color: #6da9ff;
}


.text {
  color: #8bc6ff;
}


.white {
  color: #e6f1ff;
}


.indent {
  padding-left: 20px;
}


.indent-2 {
  padding-left: 40px;
}


.highlight {
  padding-top: 3px;
  padding-bottom: 3px;

  border-radius: 5px;

  background: rgba(18, 97, 214, 0.12);
}


/* FLOATING CARDS */

.floating-card {
  position: absolute;

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 15px;

  border: 1px solid #29445c;

  border-radius: 10px;

  background: #102a43;

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.25);
}


.project-card {
  top: 45px;

  left: -10px;
}


.skill-card {
  right: -15px;

  bottom: 55px;
}


.floating-icon,
.check {
  width: 34px;

  height: 34px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 8px;

  background: #eaf2ff;

  font-size: 15px;
}


.check {
  background: #1261d6;

  color: white;

  font-weight: 900;
}


.floating-card strong {
  display: block;

  font-size: 10px;
}


.floating-card p {
  margin: 3px 0 0;

  color: #829ab1;

  font-size: 9px;
}


/* TABLET */

@media (max-width: 950px) {

  .hero-container {
    grid-template-columns: 1fr;

    gap: 70px;
  }


  .hero-content {
    text-align: center;
  }


  .hero h1,
  .hero-text {
    margin-left: auto;
    margin-right: auto;
  }


  .hero-buttons {
    justify-content: center;
  }


  .hero-trust {
    justify-content: center;
  }


  .hero-visual {
    max-width: 600px;

    width: 100%;

    margin: auto;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .hero {
    padding: 70px 5% 80px;
  }


  .hero h1 {
    font-size: 42px;

    letter-spacing: -1px;
  }


  .hero-text {
    font-size: 15px;
  }


  .hero-buttons {
    flex-direction: column;
  }


  .primary-btn,
  .outline-btn {
    width: 100%;
  }


  .hero-visual {
    min-height: 340px;
  }


  .code-body {
    padding: 18px 12px;

    font-size: 9px;
  }


  .code-top {
    padding: 0 12px;
  }


  .floating-card {
    padding: 9px 11px;
  }


  .project-card {
    top: 15px;

    left: -5px;
  }


  .skill-card {
    right: -5px;

    bottom: 20px;
  }

}

</style>
```
