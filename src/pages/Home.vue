
<template>
  <div class="home">

    <Navbar />

    <Hero />

    <Features />

    <Courses />

    <HowItWorks />

    <Project />

    <Testimonials />

    <CTA />

    <Footer />

  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Courses from '../components/Courses.vue'
import HowItWorks from '../components/HowItWorks.vue'
import Project from '../components/Project.vue'
import Testimonials from '../components/Testimonials.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f7faff;
}
</style>



