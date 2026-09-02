```vue
<template>
  <div class="contact-page">

    <Navbar />

    <!-- HERO -->
    <section class="contact-hero">

      <div class="hero-content">

        <span>GET IN TOUCH</span>

        <h1>
          Let's Build
          <strong>Together.</strong>
        </h1>

        <p>
          Have a question about our courses, registration or
          learning journey? We'd love to hear from you.
        </p>

      </div>

    </section>


    <!-- CONTACT CONTENT -->
    <section class="contact-section">

      <div class="contact-container">

        <!-- LEFT -->
        <div class="contact-info">

          <span class="section-label">CONTACT US</span>

          <h2>
            We're here to
            <strong>help.</strong>
          </h2>

          <p>
            Reach out to Mufasir Devmaster Academy through
            any of the channels below.
          </p>


          <!-- EMAIL -->
          <a
            href="mailto:Mufasirdevmaster@gmail.com"
            class="contact-item"
          >

            <div class="contact-icon">
              ✉
            </div>

            <div>
              <small>EMAIL</small>
              <strong>Mufasirdevmaster@gmail.com</strong>
            </div>

          </a>


          <!-- PHONE -->
          <a
            href="tel:09010872023"
            class="contact-item"
          >

            <div class="contact-icon">
              ☎
            </div>

            <div>
              <small>PHONE</small>
              <strong>09010872023</strong>
            </div>

          </a>


          <!-- WHATSAPP -->
          <a
            href="https://wa.me/2348093963715"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item"
          >

            <div class="contact-icon whatsapp">
              W
            </div>

            <div>
              <small>WHATSAPP</small>
              <strong>08093963715</strong>
            </div>

          </a>

        </div>


        <!-- FORM -->
        <div class="contact-card">

          <h2>Send us a message</h2>

          <p>
            Fill in the form and we'll get back to you.
          </p>


          <form @submit.prevent="sendMessage">

            <div class="form-group">

              <label>Your Name</label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                required
              />

            </div>


            <div class="form-group">

              <label>Email Address</label>

              <input
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                required
              />

            </div>


            <div class="form-group">

              <label>Message</label>

              <textarea
                v-model="form.message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>

            </div>


            <button type="submit">
              Send Message →
            </button>

          </form>


          <div
            v-if="sent"
            class="success-message"
          >
            Message ready! We'll get back to you shortly.
          </div>

        </div>

      </div>

    </section>


    <!-- WHATSAPP CTA -->
    <section class="whatsapp-section">

      <div>

        <span>QUICK RESPONSE</span>

        <h2>
          Need a faster
          <strong>response?</strong>
        </h2>

        <p>
          Chat with us directly on WhatsApp.
        </p>

      </div>

      <a
        href="https://wa.me/2348093963715"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-btn"
      >
        Chat on WhatsApp →
      </a>

    </section>


    <Footer />

  </div>
</template>


<script setup>

import { reactive, ref } from 'vue'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


const sent = ref(false)


const form = reactive({

  name: '',

  email: '',

  message: ''

})


function sendMessage() {

  const subject =
    encodeURIComponent(
      `Message from ${form.name} - Mufasir Devmaster Academy`
    )

  const body =
    encodeURIComponent(
      `Name: ${form.name}\n\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )


  window.location.href =
    `mailto:Mufasirdevmaster@gmail.com?subject=${subject}&body=${body}`


  sent.value = true

}

</script>


<style scoped>

* {
  box-sizing: border-box;
}


.contact-page {
  min-height: 100vh;

  background: white;

  color: #102a43;
}


/* HERO */

.contact-hero {
  padding: 100px 7%;

  background: #071b2d;

  color: white;

  text-align: center;
}


.hero-content {
  max-width: 700px;

  margin: auto;
}


.hero-content span,
.section-label,
.whatsapp-section span {
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
  max-width: 600px;

  margin: auto;

  color: #bcccdc;

  font-size: 14px;

  line-height: 1.8;
}


/* CONTACT SECTION */

.contact-section {
  padding: 90px 7%;
}


.contact-container {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: start;
}


/* INFO */

.contact-info h2 {
  margin: 15px 0 10px;

  font-size: 38px;
}


.contact-info h2 strong {
  color: #1261d6;
}


.contact-info > p {
  max-width: 450px;

  margin-bottom: 35px;

  color: #627d98;

  font-size: 13px;

  line-height: 1.8;
}


/* CONTACT ITEMS */

.contact-item {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 18px;

  padding: 15px;

  border: 1px solid #e1eaf3;

  border-radius: 12px;

  color: #102a43;

  text-decoration: none;

  transition: 0.3s;
}


.contact-item:hover {
  transform: translateX(5px);

  border-color: #1261d6;
}


.contact-icon {
  width: 45px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 10px;

  background: #eaf2ff;

  color: #1261d6;

  font-size: 18px;

  font-weight: 900;
}


.contact-icon.whatsapp {
  background: #eafaf2;

  color: #247a4d;
}


.contact-item small {
  display: block;

  margin-bottom: 5px;

  color: #829ab1;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 1px;
}


.contact-item strong {
  font-size: 12px;

  word-break: break-word;
}


/* FORM CARD */

.contact-card {
  padding: 35px;

  border: 1px solid #e1eaf3;

  border-radius: 17px;

  background: white;

  box-shadow:
    0 20px 50px rgba(16, 42, 67, 0.07);
}


.contact-card h2 {
  margin: 0;

  font-size: 25px;
}


.contact-card > p {
  margin: 7px 0 25px;

  color: #829ab1;

  font-size: 12px;
}


/* FORM */

.form-group {
  margin-bottom: 17px;
}


.form-group label {
  display: block;

  margin-bottom: 7px;

  color: #334e68;

  font-size: 11px;

  font-weight: 800;
}


.form-group input,
.form-group textarea {
  width: 100%;

  padding: 13px 14px;

  border: 1px solid #d9e2ec;

  border-radius: 8px;

  outline: none;

  color: #102a43;

  background: white;

  font-family: inherit;

  font-size: 12px;

  resize: vertical;

  transition: 0.2s;
}


.form-group input:focus,
.form-group textarea:focus {
  border-color: #1261d6;

  box-shadow:
    0 0 0 3px rgba(18, 97, 214, 0.08);
}


.contact-card button {
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  cursor: pointer;

  font-size: 12px;

  font-weight: 800;

  transition: 0.3s;
}


.contact-card button:hover {
  background: #0d4fae;
}


/* SUCCESS */

.success-message {
  margin-top: 15px;

  padding: 12px;

  border-radius: 7px;

  background: #eafaf2;

  color: #247a4d;

  font-size: 11px;

  text-align: center;
}


/* WHATSAPP */

.whatsapp-section {
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


.whatsapp-section h2 {
  margin: 8px 0;

  font-size: 27px;
}


.whatsapp-section h2 strong {
  color: #6da9ff;
}


.whatsapp-section p {
  margin: 0;

  color: #bcccdc;

  font-size: 12px;
}


.whatsapp-btn {
  padding: 13px 20px;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  text-decoration: none;

  font-size: 11px;

  font-weight: 800;

  white-space: nowrap;
}


/* MOBILE */

@media (max-width: 800px) {

  .contact-hero {
    padding: 75px 5%;
  }


  .hero-content h1 {
    font-size: 38px;
  }


  .contact-section {
    padding: 70px 5%;
  }


  .contact-container {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .contact-info h2 {
    font-size: 32px;
  }


  .contact-card {
    padding: 28px;
  }


  .whatsapp-section {
    margin: 70px 5%;

    padding: 30px;

    flex-direction: column;

    align-items: flex-start;
  }


  .whatsapp-btn {
    width: 100%;

    text-align: center;
  }

}

</style>
```
