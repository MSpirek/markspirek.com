<script>
  import MainNav from "@/components/MainNav";

  export default {
    name: 'PageHeader',
    components: {
      MainNav
    }
  }
</script>

<template>
  <header class="header -mb-12 z-10 flex">
    <div class="container flex justify-end mx-auto text-white pt-6 pl-10 pr-10 relative">
      <g-link class="nav-img absolute flex sm:flex" to="/">
        <g-image class="w-32 rounded-full border-8 border-gray-200 m-4 shadow-2xl" src="/img/me1.jpg" alt="" />
        <div class="m-4 ml-0 text-2xl flex flex-col content-center justify-center font-extrabold"><h1>Mark Spirek</h1></div>
      </g-link>
      <main-nav />
    </div>
  </header>
</template>

<style>
  .nav-img {
    top: 0;
    left: 0;
    height: 160px;
  }

  @media (max-width: 640px) {
    .nav-img {
      top: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

</style>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

