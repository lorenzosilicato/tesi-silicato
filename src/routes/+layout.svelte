<script>
  import "../app.pcss";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    DarkMode,
  } from "flowbite-svelte";
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite-Svelte Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      Visual Snow
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/esercizi" active={true}>Esercizi</NavLi>
    <NavLi href="/about" active={true}>About</NavLi>
    <DarkMode/>
  </NavUl>
</Navbar>
<main class="p-8 h-auto">
  <slot />
</main>
