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
  const head = document.querySelector('head');

  const funComment = `<!--
    Oh hi, thanks for checking out my site. Maybe  we should
    work together,  This page is my playground so it's
    always changing and is not the best example of my skills. If you want to
    see some sweet code, just ask! (mark@markspirek.com).
    --->`;

  head.prepend(funComment)
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
