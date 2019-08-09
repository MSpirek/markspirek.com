<script>
  export default {
    name: 'PageHero',
    props: {
      heading: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
    data () {
      return {
        message: 'Try change me!'
      }
    },
  }
</script>

<template>
  <div class="hero text-white pt-48 pb-32 text-center text-3xl" :class="color">
    <h1 class="text-5xl">{{ heading }}</h1>
  </div>
</template>
