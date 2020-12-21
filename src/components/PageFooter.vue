<script>
  export default {
    name: 'PageFooter',
    data () {
      return {
      }
    },
  }
</script>

<template>
  <footer class="footer text-white text-center">
    <ul class="flex justify-center">
      <li class="footer-link"><a href="mailto:mark@markspirek.com">mark@markspirek.com</a></li>
      <li class="footer-link">&mdash;</li>
      <li class="footer-link"><a href="https://focusstate.com" target="_blank" rel="noreferrer">:focus state</a></li>
      <li class="footer-link">&mdash;</li>
      <li class="footer-link">Austin, TX</li>
    </ul>
    <div class="pt-6">&copy; {{ new Date().getFullYear() }} Mark Spirek</div>
  </footer>
</template>

<style>
  .footer-link {
    @apply p-2
  }
</style>
