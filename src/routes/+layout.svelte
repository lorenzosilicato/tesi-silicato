<script>
  import { onMount } from "svelte";

  let activeLink = null;
  let lineDash;

  onMount(() => {
    lineDash = document.querySelector(".line-dash");
  });

  const handleMouseOver = (event) => {
    activeLink = event.target;

    const rect = activeLink.getBoundingClientRect();
    const menuRect = activeLink.closest('.menu').getBoundingClientRect();
    const centerX = rect.left - menuRect.left + rect.width / 2;

    lineDash.style.transition = "all 0.3s ease";
    lineDash.style.transform = `translateX(${centerX}px)`;
    lineDash.style.width = `${rect.width}px`;
  };

  const handleMouseOut = () => {
    activeLink = null;

    lineDash.style.transition = "all 0.3s ease";
    lineDash.style.transform = "translateX(0)";
    lineDash.style.width = "0";
  };
</script>

<div class="header">
 <div class="menu">
  <svg class="line-top" width="750" height="15" viewbox="0,0 1000,20">
   <line
    class="line-dash"
    x1="0"
    y1="15"
    x2="1000"
    y2="15"
    style="stroke: orange; stroke-width:2; stroke-linecap:round; stroke-dasharray: 180,1200; stroke-dashoffset: -35;"
   />
  </svg>
  <nav class="flex gap-4">
    <a on:mouseover={handleMouseOver} on:focus on:mouseout={handleMouseOut} on:blur href="/">
      Home
    </a>
    <a on:mouseover={handleMouseOver} on:focus on:mouseout={handleMouseOut} on:blur href="/about">
      About
    </a>
    <a on:mouseover={handleMouseOver} on:focus on:mouseout={handleMouseOut} on:blur href="/esercizi">
      Company
    </a>
  </nav>
  <svg class="line-bottom" width="750" height="30" viewbox="0,0 1000,40">
   <polygon class="lb" points="35,53 115,53 125,43 135,53 215,53" />
   <polygon class="lb" points="285,53 365,53 375,43 385,53 465,53" />

   <polygon class="lb" points="535,53 615,53 625,43 635,53 715,53" />

   <polygon class="lb" points="785,53 865,53 875,43 885,53 965,53" />
  </svg>
 </div>
</div>

<style>
.header {
  width: 100%;
  height: 75px;
  background: #17141d;
  opacity: 0.95;
  overflow: hidden;
  -webkit-box-shadow: #333 1px 3px 4px;
  -moz-box-shadow: #333 1px 3px 4px;
  box-shadow: #333 1px 3px 4px;
}

svg.line-top {
  width: 100%;
  background-color: #17141d;
}

svg.line-bottom {
  width: 100%;
}

.menu {
  width: 750px;
  margin: 0 auto;
}

nav {
  padding: 0;
  margin: 0;
}

nav a {
  margin: 0;
  padding: 10px 0 10px 0;
  width: 25%;
  height: 10px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 3.5px;
  transition: all 0.5s ease-out;
}

nav a:hover {
    color: #ccc;
}

polygon {
  stroke-width: 2px;
  stroke: orange;
  fill: orange;
}

@media (max-device-width: 991px) {
  .header {
    height: 64px;
  }
}
</style> 
<slot/>
