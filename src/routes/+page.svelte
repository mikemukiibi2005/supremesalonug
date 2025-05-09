<script lang="ts">
  import Navbar from './Navbar.svelte';
  import Hero from './Hero.svelte';
  import AboutSalon from './AboutSalon.svelte';
  import Services from './Services.svelte';
  import Location from './Location.svelte';
  import Footer from './Footer.svelte';
</script>

<Navbar />

<main class="flex flex-col antialiased">
  <Hero />
  <AboutSalon />
  <Services />
  <Location />
</main>

<Footer />