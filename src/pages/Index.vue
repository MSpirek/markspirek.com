<script>
  import PageHero from "@/components/PageHero";

  export default {
    metaInfo: {
      title: 'Home',
    },
    components: {
      PageHero
    },
  }
</script>

<template>
  <Layout>
    <page-hero color="bg-blue-500" heading="Web Developer. 👋" />

    <div class="container mx-auto p-10 max-w-4xl">

      <section class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">Who are you? 🙃‍</h2>
        </div>

        <p class="pb-2">I'm a software engineer with emphasis on front end web technology especially Vue.js and component libraries. I have over 10 years of industry experience and served as a key team member and engineer for startups, ecommerce companies, and digital agencies.</p>
        <p class="pb-2">I offer a strong background in UI design, user experience, and digital marketing. I endeavor to push web and mobile platforms forward by pioneering features to delight and engage users.</p>


        <div class="btn-container">
          <g-link to="/about" class="btn-outline">More About Me</g-link>
          <a href="mailto:mark@markspirek.com" class="btn-outline">Contact Me️</a>
        </div>

      </section>

      <section class="page-section">
        <div class="section-heading">
          <h2 class="text-2xl">🎨 Half Design / Half Code 💻 </h2>
        </div>

        <div class="btn-container">
          <a href="http://portfolio.markspirek.com" class="btn-outline">Portfolio</a>
          <a href="/mark-spirek-resume.pdf" class="btn-outline">Resume</a>
        </div>
      </section>

      <section class="page-section page-section-last">
        <div class="section-heading">
          <h2 class="text-2xl">Find me elsewhere 👀</h2>
        </div>
        <ul class="flex justify-center">
          <li><a class="social-link" href="https://linkedin.com/in/mspirek" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a class="social-link" href="https://github.com/mspirek" target="_blank" rel="noreferrer">Github</a></li>
          <li><a class="social-link" href="https://dribbble.com/mspirek" target="_blank" rel="noreferrer">Dribbble</a></li>
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
