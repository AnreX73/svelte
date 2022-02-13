<script>
    // your script goes here

import Nav from "$lib/Nav.svelte";
import '../css/global.css'

</script>
<header>

<h1>Это шапка</h1>
</header>
<main>
  <Nav />

    <slot></slot>
</main>

<footer>
<h4>Сделано в SMARTSTUDIO</h4>

</footer>

<style>
    header{

        text-align: center;
    }
    footer{
        text-align: center;
        margin-top: 50px;
    }
     main{
         text-align: center;
         max-width: 1280px;
      
     }
</style>
