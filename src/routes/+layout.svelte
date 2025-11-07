<script>
  import "../app.css";
  import { page } from '$app/stores';

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' }
  ];

  let { children } = $props();
</script>


<header class=""> 
  <div class="flex justify-between items-start">
    <a href="/" class="text-2xl font-bold">Firstname Surname</a>

    <nav class="flex space-x-4">
      {#each links as link} 
        <a 
          href="{link.href}"
          class:text-slate-400={$page.url.pathname === link.href}>
          {link.name}
        </a>
      {/each}
    </nav>
  </div>
</header>

<main class="">
  {@render children()} <!-- Renders the current page -->
</main>

<footer></footer>

