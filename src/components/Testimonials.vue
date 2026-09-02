```vue
<template>
  <section class="testimonials">

    <div class="section-heading">

      <span>STUDENT EXPERIENCES</span>

      <h2>
        Learn From Us.
        <strong>Grow With Us.</strong>
      </h2>

      <p>
        See what learners are saying about their experience
        with Mufasir Devmaster Academy.
      </p>

    </div>


    <div class="testimonial-grid">

      <!-- TESTIMONIAL 1 -->
      <div class="testimonial-card">

        <div class="stars">
          ★★★★★
        </div>

        <p class="quote">
          "The way the lessons are explained makes learning
          web development much easier. I started with almost
          no experience and can now build simple websites."
        </p>

        <div class="student">

          <div class="student-avatar">
            A
          </div>

          <div>
            <h3>Abdullahi</h3>
            <p>Web Development Student</p>
          </div>

        </div>

      </div>


      <!-- TESTIMONIAL 2 -->
      <div class="testimonial-card featured">

        <div class="stars">
          ★★★★★
        </div>

        <p class="quote">
          "What I like most is the practical approach. You're
          not just watching someone code — you're encouraged
          to actually build things yourself."
        </p>

        <div class="student">

          <div class="student-avatar">
            M
          </div>

          <div>
            <h3>Mariam</h3>
            <p>Frontend Student</p>
          </div>

        </div>

      </div>


      <!-- TESTIMONIAL 3 -->
      <div class="testimonial-card">

        <div class="stars">
          ★★★★★
        </div>

        <p class="quote">
          "I used to think coding was too difficult for me.
          The step-by-step approach helped me understand the
          basics and gave me the confidence to keep learning."
        </p>

        <div class="student">

          <div class="student-avatar">
            Y
          </div>

          <div>
            <h3>Yusuf</h3>
            <p>Beginner Developer</p>
          </div>

        </div>

      </div>

    </div>


    <!-- BOTTOM STAT -->
    <div class="student-stat">

      <div class="stat-number">
        100%
      </div>

      <div>
        <strong>Focused on your growth</strong>

        <p>
          Learn at your pace and keep improving one project at a time.
        </p>
      </div>

    </div>

  </section>
</template>


<style scoped>

* {
  box-sizing: border-box;
}


/* SECTION */

.testimonials {
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

.testimonial-grid {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}


/* CARD */

.testimonial-card {
  padding: 30px;

  border: 1px solid #e1eaf3;

  border-radius: 16px;

  background: white;

  transition: 0.3s;
}


.testimonial-card:hover {
  transform: translateY(-6px);

  box-shadow:
    0 18px 40px rgba(16, 42, 67, 0.08);
}


/* FEATURED */

.testimonial-card.featured {
  background: #102a43;

  border-color: #102a43;

  color: white;

  transform: translateY(-8px);
}


.testimonial-card.featured:hover {
  transform: translateY(-14px);
}


/* STARS */

.stars {
  margin-bottom: 20px;

  color: #1261d6;

  font-size: 14px;

  letter-spacing: 2px;
}


.featured .stars {
  color: #6da9ff;
}


/* QUOTE */

.quote {
  min-height: 145px;

  margin: 0;

  color: #486581;

  font-size: 13px;

  line-height: 1.8;
}


.featured .quote {
  color: #d9e7f7;
}


/* STUDENT */

.student {
  display: flex;

  align-items: center;

  gap: 12px;

  padding-top: 20px;

  border-top: 1px solid #edf2f7;
}


.featured .student {
  border-color: #29445c;
}


.student-avatar {
  width: 40px;

  height: 40px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #eaf2ff;

  color: #1261d6;

  font-size: 13px;

  font-weight: 900;
}


.featured .student-avatar {
  background: #1261d6;

  color: white;
}


.student h3 {
  margin: 0 0 3px;

  font-size: 13px;
}


.student p {
  margin: 0;

  color: #829ab1;

  font-size: 10px;
}


/* STAT */

.student-stat {
  max-width: 700px;

  margin: 55px auto 0;

  padding: 22px 28px;

  display: flex;

  align-items: center;

  gap: 18px;

  border-radius: 12px;

  background: white;

  box-shadow:
    0 8px 25px rgba(16, 42, 67, 0.05);
}


.stat-number {
  color: #1261d6;

  font-size: 30px;

  font-weight: 900;
}


.student-stat strong {
  font-size: 13px;
}


.student-stat p {
  margin: 4px 0 0;

  color: #829ab1;

  font-size: 10px;
}


/* TABLET */

@media (max-width: 900px) {

  .testimonial-grid {
    grid-template-columns: 1fr 1fr;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .testimonials {
    padding: 75px 5%;
  }


  .section-heading h2 {
    font-size: 35px;
  }


  .section-heading p {
    font-size: 14px;
  }


  .testimonial-grid {
    grid-template-columns: 1fr;
  }


  .testimonial-card.featured {
    transform: none;
  }


  .testimonial-card.featured:hover {
    transform: translateY(-6px);
  }


  .quote {
    min-height: auto;

    margin-bottom: 25px;
  }


  .student-stat {
    padding: 20px;
  }

}

</style>
```
