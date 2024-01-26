<script>
  import "../app.pcss";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode,} from "flowbite-svelte";
  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/50/Snow_flake.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Logo"
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
    <NavLi href="/esercizi" active={true}>Exercises</NavLi>
    <NavLi href="/about" active={true}>About</NavLi>
    <DarkMode {btnClass}/>
  </NavUl>
</Navbar>
<main class="p-8 h-auto">
  <slot />
</main>
