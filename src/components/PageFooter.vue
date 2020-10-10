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
  <footer class="footer">
    <ul class="flex text-white justify-center">
      <li class="footer-link"><a href="mailto:mark@markspirek.com">mark@markspirek.com</a></li>
      <li class="footer-link">&mdash;</li>
      <li class="footer-link">Austin, TX</li>
    </ul>
  </footer>
</template>

<style>
  .footer-link {
    @apply p-2
  }
</style>
