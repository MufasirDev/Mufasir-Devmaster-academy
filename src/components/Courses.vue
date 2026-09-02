```vue
<template>
  <section class="courses" id="courses">

    <div class="section-heading">

      <span>POPULAR COURSES</span>

      <h2>
        Learn Skills.
        <strong>Build Projects.</strong>
      </h2>

      <p>
        Start with the fundamentals and gradually build the
        skills you need to create modern websites.
      </p>

    </div>


    <div class="courses-grid">

      <!-- HTML -->
      <div class="course-card">

        <div class="course-top html">

          <div class="course-icon">
            HTML
          </div>

          <span class="level">
            BEGINNER
          </span>

        </div>

        <div class="course-content">

          <h3>
            HTML for Beginners
          </h3>

          <p>
            Learn how websites are structured and create
            your first webpages from scratch.
          </p>

          <div class="course-details">

            <span>📚 12 Lessons</span>

            <span>⏱ 4 Weeks</span>

          </div>

          <router-link
            to="/register"
            class="course-btn"
          >
            Start Course →
          </router-link>

        </div>

      </div>


      <!-- CSS -->
      <div class="course-card popular">

        <div class="popular-label">
          MOST POPULAR
        </div>

        <div class="course-top css">

          <div class="course-icon">
            CSS
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

        </div>

        <div class="course-content">

          <h3>
            CSS Mastery
          </h3>

          <p>
            Learn how to transform simple webpages into
            beautiful, responsive designs.
          </p>

          <div class="course-details">

            <span>📚 16 Lessons</span>

            <span>⏱ 5 Weeks</span>

          </div>

          <router-link
            to="/register"
            class="course-btn"
          >
            Start Course →
          </router-link>

        </div>

      </div>


      <!-- JAVASCRIPT -->
      <div class="course-card">

        <div class="course-top javascript">

          <div class="course-icon">
            JS
          </div>

          <span class="level">
            INTERMEDIATE
          </span>

        </div>

        <div class="course-content">

          <h3>
            JavaScript Basics
          </h3>

          <p>
            Understand JavaScript fundamentals and learn how
            to make websites interactive.
          </p>

          <div class="course-details">

            <span>📚 18 Lessons</span>

            <span>⏱ 6 Weeks</span>

          </div>

          <router-link
            to="/register"
            class="course-btn"
          >
            Start Course →
          </router-link>

        </div>

      </div>

    </div>


    <div class="view-all">

      <router-link to="/courses">
        View All Courses →
      </router-link>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* SECTION */

.courses {
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
  max-width: 600px;

  margin: auto;

  color: #627d98;

  font-size: 16px;

  line-height: 1.8;
}


/* GRID */

.courses-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 22px;
}


/* CARD */

.course-card {
  position: relative;

  border: 1px solid #e2eaf2;

  border-radius: 17px;

  background: white;

  overflow: hidden;

  transition: 0.3s;
}


.course-card:hover {
  transform: translateY(-7px);

  border-color: #b9d2f5;

  box-shadow:
    0 20px 45px rgba(16, 42, 67, 0.09);
}


/* TOP */

.course-top {
  height: 170px;

  padding: 25px;

  display: flex;

  align-items: flex-start;

  justify-content: space-between;
}


.course-top.html {
  background: #fff1ed;
}


.course-top.css {
  background: #eaf2ff;
}


.course-top.javascript {
  background: #fff9df;
}


/* ICON */

.course-icon {
  width: 65px;

  height: 65px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 14px;

  background: white;

  color: #1261d6;

  font-family: monospace;

  font-size: 17px;

  font-weight: 900;

  box-shadow:
    0 8px 20px rgba(16, 42, 67, 0.08);
}


/* LEVEL */

.level {
  padding: 7px 9px;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.8);

  color: #486581;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 0.5px;
}


/* CONTENT */

.course-content {
  padding: 28px;
}


.course-content h3 {
  margin: 0 0 10px;

  font-size: 20px;
}


.course-content > p {
  min-height: 75px;

  margin: 0;

  color: #627d98;

  font-size: 13px;

  line-height: 1.7;
}


/* DETAILS */

.course-details {
  display: flex;

  gap: 18px;

  padding: 17px 0;

  margin-top: 15px;

  border-top: 1px solid #edf2f7;

  border-bottom: 1px solid #edf2f7;

  color: #829ab1;

  font-size: 10px;
}


/* BUTTON */

.course-btn {
  display: block;

  margin-top: 18px;

  padding: 13px;

  border-radius: 8px;

  background: #102a43;

  color: white;

  text-align: center;

  text-decoration: none;

  font-size: 12px;

  font-weight: 800;

  transition: 0.3s;
}


.course-btn:hover {
  background: #1261d6;
}


/* POPULAR */

.course-card.popular {
  border-color: #1261d6;

  box-shadow:
    0 15px 35px rgba(18, 97, 214, 0.08);
}


.popular-label {
  position: absolute;

  top: 12px;

  left: 50%;

  transform: translateX(-50%);

  z-index: 2;

  padding: 6px 11px;

  border-radius: 20px;

  background: #1261d6;

  color: white;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 0.7px;
}


/* VIEW ALL */

.view-all {
  margin-top: 45px;

  text-align: center;
}


.view-all a {
  color: #1261d6;

  font-size: 13px;

  font-weight: 800;

  text-decoration: none;
}


/* TABLET */

@media (max-width: 900px) {

  .courses-grid {
    grid-template-columns: 1fr 1fr;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .courses {
    padding: 75px 5%;
  }


  .section-heading h2 {
    font-size: 35px;
  }


  .section-heading p {
    font-size: 14px;
  }


  .courses-grid {
    grid-template-columns: 1fr;
  }


  .course-content > p {
    min-height: auto;
  }

}

</style>
```
