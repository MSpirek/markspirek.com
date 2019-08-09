<script>
  import PageHero from "@/components/PageHero";

  export default {
    components: {
      PageHero
    },
    metaInfo: {
      title: 'Mark Spirek – Front-end Web Developer'
    }
  }
</script>

<template>
  <Layout>
    <page-hero color="bg-blue-500" heading="Web Developer. 👋" />

    <div class="container mx-auto p-10">

      <section class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">Who are you? 🙃‍</h2>
        </div>

        <p>I'm a web developer with an emphasis on front-end technology. I also offer a strong background in marketing and user experience. I endeavor to push web and mobile platforms forward by utilizing and pioneering features to delight and engage users. I have served as a key member, designer, and developer for several Chicago-area startups and digital agencies.</p>

        <div class="btn-container">
          <g-link to="/about" class="btn-outline">More About Me</g-link>
          <a href="mailto:hello@markspirek.com" class="btn-outline">Contact Me️</a>
        </div>

      </section>

      <section class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">🎨 Half Design / Half Code 💻 </h2>
        </div>

        <div class="btn-container">
          <a href="http://portfolio.markspirek.com" class="btn-outline">Portfolio</a>
          <a href="/resume" class="btn-outline">Resume</a>
        </div>
      </section>

      <section class="page-section page-section-last">
        <div class="section-heading">
          <h2 class="text-2xl">Find me elsewhere 👀</h2>
        </div>
        <ul class="flex justify-center">
          <li><a class="social-link" href="https://linkedin.com/in/mspirek" target="_blank">Linkedin</a></li>
          <li><a class="social-link" href="https://github.com/mspirek" target="_blank">Github</a></li>
          <li><a class="social-link" href="https://gitlab.com/mspirek" target="_blank">Gitlab</a></li>
          <li><a class="social-link" href="https://behance.net/mspirek" target="_blank">Behance</a></li>
          <li><a class="social-link" href="https://dribbble.com/mspirek" target="_blank">Dribbble</a></li>
        </ul>
      </section>
    </div>

  </Layout>
</template>

<style>

  .social-link {
    @apply p-2
  }
</style>
