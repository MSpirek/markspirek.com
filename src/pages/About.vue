<script>
  import PageHero from "@/components/PageHero";
  export default {
    components: {
      PageHero
    },
    metaInfo: {
      title: 'About'
    }
  }
</script>

<template>
  <Layout>
    <page-hero color="bg-yellow-500" heading="About." />

    <div class="container mx-auto p-10 max-w-4xl">
      <div class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">I live in Austin, TX</h2>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220449.3639554548!2d-97.89348293641483!3d30.30768629459229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1599954586555!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0"></iframe>

        <div class="section-heading">
          <h3 class="text-2xl pt-6">☀️ The heat is better than the cold ❄️</h3>
        </div>

        <iframe type="text/html" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=30.2223&lon=-97.8365&name=Austin"> </iframe>
      </div>

      <div class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">I have 2 Corgis</h2>
          <h3>Named Cheddar & Colby 🧀 🧀</h3>
        </div>
        <div class="flex justify-center content-center flex-col md:flex-row">
          <g-image class="img-round" src="/img/cheddar.jpg" alt="" />
          <g-image class="img-round" src="/img/colby.jpg" alt="" />
        </div>
      </div>

      <div class="page-section page-section-last">
        <div class="section-heading">
          <h2 class="text-2xl">📷 #selfiesection 📷</h2>
        </div>
        <div class="flex justify-center content-center flex-col md:flex-row">
          <g-image class="img-round" src="/img/me1.jpg" alt="" />
          <g-image class="img-round" src="/img/me2.jpg" alt="" />
          <g-image class="img-round" src="/img/me3.jpg" alt="" />
        </div>
        <div class="btn-container">
          <a href="https://portfolio.markspirek.com" target="_blank" class="btn-outline" rel="noreferrer">See my portfolio</a>
        </div>
    </div>
    </div>
  </Layout>
</template>

<style>
  .img-round {
    @apply
    w-64
    rounded-full
    border-8
    border-gray-200
    m-4
    self-center
  }
</style>
