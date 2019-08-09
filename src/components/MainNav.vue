<script>
  export default {
    name: 'MainNav',
    data () {
      return {
      }
    },
  }
</script>

<template>
  <nav class="nav">
    <ul class="flex sm:justify-center">
      <li><g-link class="nav-link" to="/">Home</g-link></li>
      <li><g-link class="nav-link" to="/about">About</g-link></li>
      <li><a class="nav-link" href="http://portfolio.markspirek.com">Portfolio</a></li>
      <li><a class="nav-link" href="/mark-spirek-resume.pdf">Resume</a></li>
      <li><a class="nav-link" href="mailto:hello@markspirek.com">Contact</a></li>
    </ul>
  </nav>
</template>

<style>
  .nav-link {
    @apply p-3
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
