```vue
<template>
  <section class="projects" id="projects">

    <div class="section-heading">

      <span>WHAT YOU CAN BUILD</span>

      <h2>
        Learn By
        <strong>Building.</strong>
      </h2>

      <p>
        Your skills become stronger when you use them.
        Here are some of the projects you can build as you learn.
      </p>

    </div>


    <div class="projects-grid">

      <!-- PROJECT 1 -->
      <div class="project-card">

        <div class="project-preview portfolio">

          <div class="browser">

            <div class="browser-top">

              <span></span>
              <span></span>
              <span></span>

              <div class="address">
                myportfolio.dev
              </div>

            </div>

            <div class="portfolio-screen">

              <div class="mini-nav">
                <strong>PORTFOLIO</strong>

                <div>
                  Home &nbsp; About &nbsp; Projects
                </div>
              </div>

              <div class="portfolio-content">

                <small>Hello, I'm a Developer</small>

                <h4>
                  I Build Digital
                  <br />
                  Experiences.
                </h4>

                <div class="mini-button">
                  View Projects
                </div>

              </div>

            </div>

          </div>

        </div>


        <div class="project-info">

          <div class="project-tag">
            HTML + CSS
          </div>

          <h3>
            Personal Portfolio
          </h3>

          <p>
            Create a professional portfolio to showcase
            your skills and projects.
          </p>

          <router-link to="/register">
            Build This Project →
          </router-link>

        </div>

      </div>


      <!-- PROJECT 2 -->
      <div class="project-card">

        <div class="project-preview dashboard">

          <div class="dashboard-screen">

            <div class="dash-sidebar">

              <strong>MY DASH</strong>

              <span>Dashboard</span>
              <span>Analytics</span>
              <span>Projects</span>
              <span>Settings</span>

            </div>

            <div class="dash-main">

              <small>OVERVIEW</small>

              <h4>
                Welcome Back 👋
              </h4>

              <div class="stats">

                <div>
                  <small>PROJECTS</small>
                  <strong>24</strong>
                </div>

                <div>
                  <small>SKILLS</small>
                  <strong>87%</strong>
                </div>

              </div>

              <div class="chart">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>

          </div>

        </div>


        <div class="project-info">

          <div class="project-tag">
            HTML + CSS + JS
          </div>

          <h3>
            Interactive Dashboard
          </h3>

          <p>
            Build an interactive dashboard with cards,
            statistics and dynamic information.
          </p>

          <router-link to="/register">
            Build This Project →
          </router-link>

        </div>

      </div>


      <!-- PROJECT 3 -->
      <div class="project-card">

        <div class="project-preview landing">

          <div class="landing-screen">

            <div class="landing-nav">
              <strong>STARTUP</strong>

              <span>About &nbsp; Features &nbsp; Contact</span>
            </div>

            <div class="landing-content">

              <div>

                <small>
                  INTRODUCING SOMETHING NEW
                </small>

                <h4>
                  Build.
                  <br />
                  Launch.
                  <br />
                  Grow.
                </h4>

                <div class="landing-button">
                  Get Started
                </div>

              </div>

              <div class="landing-shape">
                <span></span>
              </div>

            </div>

          </div>

        </div>


        <div class="project-info">

          <div class="project-tag">
            FRONTEND
          </div>

          <h3>
            Modern Landing Page
          </h3>

          <p>
            Design a responsive landing page for a product,
            business or personal brand.
          </p>

          <router-link to="/register">
            Build This Project →
          </router-link>

        </div>

      </div>

    </div>


    <div class="projects-bottom">

      <p>
        Your first project could be the beginning of something bigger.
      </p>

      <router-link to="/courses">
        Explore Learning Paths →
      </router-link>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* SECTION */

.projects {
  padding: 105px 7%;

  background: white;

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
  max-width: 620px;

  margin: auto;

  color: #627d98;

  font-size: 16px;

  line-height: 1.8;
}


/* GRID */

.projects-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 22px;
}


/* CARD */

.project-card {
  border: 1px solid #e2eaf2;

  border-radius: 17px;

  background: white;

  overflow: hidden;

  transition: 0.3s;
}


.project-card:hover {
  transform: translateY(-7px);

  box-shadow:
    0 20px 45px rgba(16, 42, 67, 0.09);

  border-color: #b9d2f5;
}


/* PREVIEW */

.project-preview {
  height: 230px;

  padding: 18px;

  overflow: hidden;
}


/* PORTFOLIO */

.portfolio {
  background: #eaf2ff;
}


.browser {
  width: 100%;

  height: 100%;

  border-radius: 9px;

  background: white;

  box-shadow:
    0 10px 25px rgba(16, 42, 67, 0.12);

  overflow: hidden;
}


.browser-top {
  height: 28px;

  display: flex;

  align-items: center;

  gap: 4px;

  padding: 0 8px;

  background: #f1f5f9;
}


.browser-top > span {
  width: 5px;

  height: 5px;

  border-radius: 50%;

  background: #9fb3c8;
}


.address {
  flex: 1;

  margin-left: 8px;

  padding: 3px 8px;

  border-radius: 5px;

  background: white;

  color: #9fb3c8;

  font-size: 6px;
}


.portfolio-screen {
  height: calc(100% - 28px);

  padding: 15px;

  background: #071b2d;

  color: white;
}


.mini-nav {
  display: flex;

  justify-content: space-between;

  font-size: 6px;
}


.mini-nav strong {
  color: #6da9ff;
}


.portfolio-content {
  margin-top: 28px;

  padding-left: 10px;
}


.portfolio-content small {
  color: #6da9ff;

  font-size: 6px;
}


.portfolio-content h4 {
  margin: 6px 0 12px;

  font-size: 17px;

  line-height: 1.1;
}


.mini-button {
  display: inline-block;

  padding: 5px 8px;

  border-radius: 4px;

  background: #1261d6;

  font-size: 6px;
}


/* DASHBOARD */

.dashboard {
  background: #edf7f3;
}


.dashboard-screen {
  width: 100%;

  height: 100%;

  display: flex;

  border-radius: 9px;

  overflow: hidden;

  background: white;

  box-shadow:
    0 10px 25px rgba(16, 42, 67, 0.12);
}


.dash-sidebar {
  width: 25%;

  padding: 12px 7px;

  display: flex;

  flex-direction: column;

  gap: 10px;

  background: #102a43;

  color: #bcccdc;

  font-size: 6px;
}


.dash-sidebar strong {
  margin-bottom: 5px;

  color: #6da9ff;

  font-size: 7px;
}


.dash-main {
  flex: 1;

  padding: 16px;
}


.dash-main > small {
  color: #829ab1;

  font-size: 6px;
}


.dash-main h4 {
  margin: 5px 0 12px;

  font-size: 12px;
}


.stats {
  display: flex;

  gap: 8px;
}


.stats div {
  flex: 1;

  padding: 8px;

  border-radius: 5px;

  background: #f4f7fa;
}


.stats small {
  display: block;

  color: #829ab1;

  font-size: 5px;
}


.stats strong {
  font-size: 13px;
}


.chart {
  height: 65px;

  margin-top: 12px;

  display: flex;

  align-items: flex-end;

  gap: 7px;

  border-bottom: 1px solid #d9e2ec;
}


.chart span {
  width: 12px;

  height: 30px;

  border-radius: 3px 3px 0 0;

  background: #1261d6;
}


.chart span:nth-child(2) {
  height: 43px;
}


.chart span:nth-child(3) {
  height: 25px;
}


.chart span:nth-child(4) {
  height: 50px;
}


.chart span:nth-child(5) {
  height: 38px;
}


.chart span:nth-child(6) {
  height: 58px;
}


/* LANDING */

.landing {
  background: #fff5e8;
}


.landing-screen {
  height: 100%;

  padding: 16px;

  border-radius: 9px;

  background: #071b2d;

  color: white;
}


.landing-nav {
  display: flex;

  justify-content: space-between;

  font-size: 6px;
}


.landing-nav strong {
  color: #6da9ff;
}


.landing-content {
  height: 85%;

  display: flex;

  align-items: center;

  justify-content: space-between;
}


.landing-content small {
  color: #6da9ff;

  font-size: 5px;
}


.landing-content h4 {
  margin: 5px 0 8px;

  font-size: 21px;

  line-height: 0.95;
}


.landing-button {
  display: inline-block;

  padding: 5px 8px;

  border-radius: 4px;

  background: #1261d6;

  font-size: 6px;
}


.landing-shape {
  width: 80px;

  height: 80px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #29445c;

  border-radius: 50%;
}


.landing-shape span {
  width: 48px;

  height: 48px;

  border-radius: 50%;

  background: #1261d6;
}


/* INFO */

.project-info {
  padding: 25px;
}


.project-tag {
  display: inline-block;

  margin-bottom: 10px;

  padding: 5px 8px;

  border-radius: 5px;

  background: #eaf2ff;

  color: #1261d6;

  font-size: 8px;

  font-weight: 900;
}


.project-info h3 {
  margin: 0 0 10px;

  font-size: 19px;
}


.project-info p {
  min-height: 60px;

  margin: 0 0 17px;

  color: #627d98;

  font-size: 12px;

  line-height: 1.7;
}


.project-info a {
  color: #1261d6;

  font-size: 11px;

  font-weight: 800;

  text-decoration: none;
}


/* BOTTOM */

.projects-bottom {
  max-width: 900px;

  margin: 50px auto 0;

  padding: 20px 25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  border-radius: 10px;

  background: #f7faff;
}


.projects-bottom p {
  margin: 0;

  color: #627d98;

  font-size: 12px;
}


.projects-bottom a {
  flex-shrink: 0;

  color: #1261d6;

  font-size: 11px;

  font-weight: 800;

  text-decoration: none;
}


/* TABLET */

@media (max-width: 900px) {

  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .projects {
    padding: 75px 5%;
  }


  .section-heading h2 {
    font-size: 35px;
  }


  .section-heading p {
    font-size: 14px;
  }


  .projects-grid {
    grid-template-columns: 1fr;
  }


  .projects-bottom {
    flex-direction: column;

    align-items: flex-start;
  }


  .projects-bottom a {
    width: 100%;

    text-align: center;
  }

}

</style>
```
