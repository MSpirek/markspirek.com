<script>
  import PageHeader from '@/components/PageHeader';
  import PageFooter from '@/components/PageFooter';
  import PageHero from "@/components/PageHero";

  export default {
    components: {
      PageHero,
      PageHeader,
      PageFooter
    }
  }

  console.warn('WARNING: Hello! Thanks for looking at my site. Maybe we should work together. Shoot me an email mark@markspirek.com.');
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <page-header />
      <main class="flex-grow">
        <slot/>
      </main>
    <page-footer />
  </div>
</template>
