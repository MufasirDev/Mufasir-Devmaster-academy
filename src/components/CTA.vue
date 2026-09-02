```vue
<template>
  <section class="cta">

    <div class="cta-container">

      <div class="cta-content">

        <span class="cta-label">
          READY TO START?
        </span>

        <h2>
          Your Next Skill
          <span>Starts Today.</span>
        </h2>

        <p>
          Stop waiting to start. Choose a course, learn the
          fundamentals and build something you're proud of.
        </p>

        <div class="cta-buttons">

          <router-link
            to="/register"
            class="primary-btn"
          >
            Register Now
            <span>→</span>
          </router-link>

          <router-link
            to="/courses"
            class="secondary-btn"
          >
            View Courses
          </router-link>

        </div>

      </div>


      <!-- RIGHT SIDE -->
      <div class="cta-visual">

        <div class="circle circle-one"></div>

        <div class="circle circle-two"></div>

        <div class="rocket">
          🚀
        </div>

        <div class="floating floating-one">
          <span>HTML</span>
          ✓
        </div>

        <div class="floating floating-two">
          <span>CSS</span>
          ✓
        </div>

        <div class="floating floating-three">
          <span>JS</span>
          ✓
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

.cta {
  padding: 90px 7%;

  background: #071b2d;

  color: white;

  overflow: hidden;
}


.cta-container {
  max-width: 1100px;

  min-height: 360px;

  margin: auto;

  padding: 55px 65px;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  align-items: center;

  gap: 40px;

  border: 1px solid #29445c;

  border-radius: 22px;

  background:
    radial-gradient(
      circle at 90% 50%,
      rgba(18, 97, 214, 0.22),
      transparent 45%
    ),
    #102a43;
}


/* CONTENT */

.cta-label {
  color: #6da9ff;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 1.7px;
}


.cta-content h2 {
  max-width: 600px;

  margin: 15px 0;

  font-size: 45px;

  line-height: 1.08;

  letter-spacing: -1px;
}


.cta-content h2 span {
  color: #6da9ff;
}


.cta-content p {
  max-width: 560px;

  margin: 0 0 27px;

  color: #bcccdc;

  font-size: 14px;

  line-height: 1.8;
}


/* BUTTONS */

.cta-buttons {
  display: flex;

  gap: 12px;
}


.primary-btn,
.secondary-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  padding: 13px 20px;

  border-radius: 8px;

  text-decoration: none;

  font-size: 12px;

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


.secondary-btn {
  border: 1px solid #46657f;

  color: white;
}


.secondary-btn:hover {
  border-color: #6da9ff;

  background: rgba(109, 169, 255, 0.08);
}


/* VISUAL */

.cta-visual {
  position: relative;

  min-height: 280px;

  display: flex;

  align-items: center;

  justify-content: center;
}


.circle {
  position: absolute;

  border-radius: 50%;

  border: 1px solid rgba(109, 169, 255, 0.15);
}


.circle-one {
  width: 240px;

  height: 240px;
}


.circle-two {
  width: 170px;

  height: 170px;
}


.rocket {
  width: 100px;

  height: 100px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #35556f;

  border-radius: 50%;

  background: #071b2d;

  font-size: 42px;

  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.25);
}


/* FLOATING */

.floating {
  position: absolute;

  padding: 8px 11px;

  display: flex;

  align-items: center;

  gap: 7px;

  border: 1px solid #35556f;

  border-radius: 7px;

  background: #071b2d;

  color: #6da9ff;

  font-size: 9px;

  font-weight: 900;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.2);
}


.floating span {
  color: white;
}


.floating-one {
  top: 25px;

  left: 15px;
}


.floating-two {
  top: 65px;

  right: 0;
}


.floating-three {
  bottom: 30px;

  left: 30px;
}


/* TABLET */

@media (max-width: 850px) {

  .cta-container {
    grid-template-columns: 1fr;

    padding: 50px;

    text-align: center;
  }


  .cta-content p {
    margin-left: auto;

    margin-right: auto;
  }


  .cta-buttons {
    justify-content: center;
  }


  .cta-visual {
    min-height: 250px;
  }

}


/* MOBILE */

@media (max-width: 600px) {

  .cta {
    padding: 65px 5%;
  }


  .cta-container {
    padding: 40px 25px;

    border-radius: 17px;
  }


  .cta-content h2 {
    font-size: 35px;
  }


  .cta-content p {
    font-size: 13px;
  }


  .cta-buttons {
    flex-direction: column;
  }


  .primary-btn,
  .secondary-btn {
    width: 100%;
  }


  .cta-visual {
    min-height: 230px;
  }


  .circle-one {
    width: 190px;

    height: 190px;
  }


  .circle-two {
    width: 135px;

    height: 135px;
  }


  .rocket {
    width: 80px;

    height: 80px;

    font-size: 32px;
  }

}

</style>
```
