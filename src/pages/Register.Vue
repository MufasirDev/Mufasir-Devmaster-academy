`
<template>
  <div class="register-page">

    <Navbar />

    <!-- SUCCESS -->
    <section v-if="submitted" class="success-section">

      <div class="success-card">

        <div class="success-icon">
          ✓
        </div>

        <span>REGISTRATION SUCCESSFUL</span>

        <h1>
          Welcome to
          <strong>Mufasir Devmaster Academy!</strong>
        </h1>

        <p>
          Your registration has been received successfully.
          We will contact you shortly with the next steps.
        </p>

        <div class="registration-summary">

          <div>
            <small>STUDENT</small>
            <strong>{{ form.name }}</strong>
          </div>

          <div>
            <small>COURSE</small>
            <strong>{{ courseName }}</strong>
          </div>

          <div>
            <small>COURSE FEE</small>
            <strong>₦{{ formattedPrice }}</strong>
          </div>

        </div>

        <router-link to="/" class="home-btn">
          Back to Home →
        </router-link>

      </div>

    </section>


    <!-- REGISTER -->
    <section v-else class="register-section">

      <div class="register-container">

        <!-- LEFT -->
        <div class="register-info">

          <span>JOIN MUFASIR DEVMASTER ACADEMY</span>

          <h1>
            Start Your
            <strong>Developer Journey.</strong>
          </h1>

          <p>
            Register for your selected course and begin
            learning practical technology skills.
          </p>


          <div class="selected-course">

            <small>SELECTED COURSE</small>

            <h2>{{ courseName }}</h2>

            <div class="selected-price">
              ₦{{ formattedPrice }}
            </div>

          </div>

        </div>


        <!-- FORM -->
        <div class="register-card">

          <h2>Create Your Account</h2>

          <p class="form-subtitle">
            Fill in your details to register.
          </p>


          <form @submit.prevent="submitForm">

            <div class="form-group">

              <label>Full Name</label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your full name"
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

              <label>Phone Number</label>

              <input
                v-model="form.phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />

            </div>


            <div class="form-group">

              <label>Selected Course</label>

              <input
                :value="courseName"
                type="text"
                readonly
              />

            </div>


            <div class="form-group">

              <label>Course Fee</label>

              <input
                :value="'₦' + formattedPrice"
                type="text"
                readonly
              />

            </div>


            <p v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </p>


            <button
              type="submit"
              :disabled="loading"
            >
              {{ loading ? 'Submitting...' : 'Complete Registration →' }}
            </button>

          </form>

        </div>

      </div>

    </section>


    <Footer />

  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Paystack from '@paystack/inline-js'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { supabase } from '../lib/supabase.js'

const route = useRoute()

const submitted = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: ''
})

const courseName = computed(() => {
  return route.query.course || 'General Registration'
})

const coursePrice = computed(() => {
  const prices = {
    'HTML for Beginners': 15000,
    'CSS Mastery': 20000,
    'JavaScript Basics': 30000,
    'React Development': 35000,
    'Vue.js Development': 35000,
    'Vite & Frontend Tools': 50000,
  }

  return prices[courseName.value] || 0
})

const formattedPrice = computed(() => {
  if (!coursePrice.value) {
    return '—'
  }

  return coursePrice.value.toLocaleString('en-NG')
})

async function submitForm() {
  loading.value = true
  errorMessage.value = ''

  try {
    // Create registration securely through Supabase
    const { data: registrationId, error } = await supabase.rpc(
      'create_registration',
      {
        p_name: form.name,
        p_email: form.email,
        p_phone: form.phone,
        p_course: courseName.value
      }
    )

    if (error) {
      console.error('REGISTRATION ERROR:', error)

      errorMessage.value =
        error.message || 'Registration could not be completed. Please try again.'

      return
    }

    // Open Paystack
    const paystack = new Paystack()

    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,

      email: form.email,

      amount: coursePrice.value * 100,

      currency: 'NGN',

      reference: `MDA-${registrationId}-${Date.now()}`,

      onSuccess: async (transaction) => {
        try {
          loading.value = true
          errorMessage.value = ''

          const { data, error } = await supabase.functions.invoke(
            'verify-payment',
            {
              body: {
                reference: transaction.reference,
                registrationId: registrationId
              }
            }
          )

          if (error) {
            console.error('PAYMENT VERIFICATION ERROR:', error)

            errorMessage.value =
              'Payment verification failed. Please contact us.'

            return
          }

          if (!data?.success) {
            errorMessage.value =
              'Payment could not be verified. Please contact us.'

            return
          }

          submitted.value = true

        } catch (error) {
          console.error(error)

          errorMessage.value =
            'Something went wrong while verifying your payment.'

        } finally {
          loading.value = false
        }
      },

      onCancel: () => {
        loading.value = false

        errorMessage.value =
          'Payment was cancelled. Your registration is still pending.'
      }
    })

  } catch (error) {
    console.error(error)

    errorMessage.value =
      'Something went wrong. Please try again.'

  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}


.register-page {
  min-height: 100vh;

  background: #f7faff;

  color: #102a43;
}


/* REGISTER */

.register-section {
  min-height: 750px;

  padding: 90px 7%;

  display: flex;

  align-items: center;
}


.register-container {
  width: 100%;

  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;
}


/* LEFT */

.register-info > span {
  color: #1261d6;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 1.5px;
}


.register-info h1 {
  margin: 15px 0;

  font-size: 48px;

  line-height: 1.1;
}


.register-info h1 strong {
  display: block;

  color: #1261d6;
}


.register-info > p {
  max-width: 480px;

  color: #627d98;

  font-size: 14px;

  line-height: 1.8;
}


/* SELECTED COURSE */

.selected-course {
  max-width: 430px;

  margin-top: 35px;

  padding: 25px;

  border: 1px solid #d9e5f2;

  border-radius: 14px;

  background: white;
}


.selected-course small {
  color: #829ab1;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 1px;
}


.selected-course h2 {
  margin: 8px 0;

  font-size: 21px;
}


.selected-price {
  color: #1261d6;

  font-size: 24px;

  font-weight: 900;
}


/* FORM */

.register-card {
  padding: 35px;

  border: 1px solid #e1eaf3;

  border-radius: 17px;

  background: white;

  box-shadow:
    0 20px 50px rgba(16, 42, 67, 0.07);
}


.register-card h2 {
  margin: 0;

  font-size: 25px;
}


.form-subtitle {
  margin: 7px 0 25px;

  color: #829ab1;

  font-size: 12px;
}


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


.form-group input {
  width: 100%;

  padding: 13px 14px;

  border: 1px solid #d9e2ec;

  border-radius: 8px;

  outline: none;

  color: #102a43;

  background: white;

  font-size: 12px;
}


.form-group input:focus {
  border-color: #1261d6;

  box-shadow:
    0 0 0 3px rgba(18, 97, 214, 0.08);
}


.form-group input[readonly] {
  background: #f7faff;

  color: #627d98;
}


/* BUTTON */

.register-card button {
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  cursor: pointer;

  font-size: 12px;

  font-weight: 900;
}


.register-card button:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}


/* ERROR */

.error-message {
  margin: 0 0 15px;

  padding: 10px;

  border-radius: 7px;

  background: #fff1f0;

  color: #c0392b;

  font-size: 11px;

  font-weight: 700;
}


/* SUCCESS */

.success-section {
  min-height: 750px;

  padding: 90px 7%;

  display: flex;

  align-items: center;

  justify-content: center;
}


.success-card {
  width: 100%;

  max-width: 650px;

  padding: 50px;

  border: 1px solid #dce8f3;

  border-radius: 20px;

  background: white;

  text-align: center;

  box-shadow:
    0 20px 50px rgba(16, 42, 67, 0.08);
}


.success-icon {
  width: 70px;

  height: 70px;

  margin: 0 auto 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #eafaf2;

  color: #247a4d;

  font-size: 30px;

  font-weight: 900;
}


.success-card > span {
  color: #247a4d;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1.5px;
}


.success-card h1 {
  margin: 15px 0;

  font-size: 34px;

  line-height: 1.2;
}


.success-card h1 strong {
  color: #1261d6;
}


.success-card > p {
  max-width: 500px;

  margin: auto;

  color: #627d98;

  font-size: 13px;

  line-height: 1.7;
}


/* SUMMARY */

.registration-summary {
  margin: 30px 0;

  padding: 20px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 15px;

  border-radius: 12px;

  background: #f7faff;
}


.registration-summary div {
  display: flex;

  flex-direction: column;

  gap: 5px;
}


.registration-summary small {
  color: #829ab1;

  font-size: 8px;

  font-weight: 900;
}


.registration-summary strong {
  font-size: 11px;
}


.home-btn {
  display: inline-block;

  padding: 13px 22px;

  border-radius: 8px;

  background: #1261d6;

  color: white;

  font-size: 11px;

  font-weight: 900;

  text-decoration: none;
}


/* MOBILE */

@media (max-width: 800px) {

  .register-section {
    padding: 70px 5%;
  }


  .register-container {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .register-info h1 {
    font-size: 38px;
  }


  .register-card {
    padding: 28px;
  }


  .success-section {
    padding: 70px 5%;
  }


  .success-card {
    padding: 30px 20px;
  }


  .success-card h1 {
    font-size: 28px;
  }


  .registration-summary {
    grid-template-columns: 1fr;
  }

}

</style>
'

