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

    <div class="container mx-auto p-10">
      <div class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">I live in Chicago, IL</h2>
          <h3 class="text-center">🏙️ More specifically, Logan Square 🏙️</h3>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23748.835022735377!2d-87.72694028544659!3d41.922862763452265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd657cef0eb1%3A0x869220375a9604d3!2sLogan+Square%2C+Chicago%2C+IL!5e0!3m2!1sen!2sus!4v1565150972509!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0"></iframe>

        <div class="section-heading">
          <h3 class="text-2xl pt-6">❄️ But I hate the cold. ❄️</h3>
        </div>

        <iframe type="text/html" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=41.9032&lon=-87.6869&name=Chicago"> </iframe>
      </div>

      <div class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">I host 2 Podcasts</h2>
          <h3>🎙️ But doesn't everyone? 🎙️</h3>
        </div>

        <iframe src="https://anchor.fm/thingsigotwrong/embed" class="mb-8" width="100%" title="Things I Got Wrong iframe" frameborder="0" scrolling="no"></iframe>
        <iframe src="https://anchor.fm/focusstate/embed" width="100%" title="focus state iframe" frameborder="0" scrolling="no"></iframe>

        <div class="btn-container">
          <a href="https://anchor.fm/thingsigotwrong/" target="_blank" class="btn-outline">Listen on Anchor</a>
        </div>
      </div>

      <div class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">I have 2 Corgis</h2>
          <h3>🧀 named Cheddar & Colby 🧀 </h3>
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
          <a href="https://portfolio.markspirek.com" target="_blank" class="btn-outline">See my portfolio</a>
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
