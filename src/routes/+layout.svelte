<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { t, lang, toggleLang } from '$lib/utils';

  const links = [
    { href: '/resume', key: 'nav.resume' },
    { href: '/projects', key: 'nav.projects' }
  ];

  let { children } = $props();
</script>


<header>
  <div class="header-container">
    <div class="header-lef"> <!-- Left: Name + sections -->

      <a href="/" class="logo">Firstname Surname</a>

        <nav class="nav-links">
          {#each links as link}
            <a 
              href="{link.href}"
              class:text-slate-400={$page.url.pathname === link.href}>
              {$t(link.key)}
            </a>
          {/each}
        </nav>

      </div> 

      <!-- Right: language toggle -->
      <button onclick={toggleLang} class="lang-toggle">
        <span class="flag" class:inactive={$lang === 'en'}>🇫🇷</span>
        <span class="flag" class:inactive={$lang === 'fr'}>🇬🇧</span>
      </button>
  </div>
</header>


<main class="">
  {@render children()} <!-- Renders the current page -->
</main>

<footer></footer>

