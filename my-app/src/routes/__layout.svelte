<script>
import {fade, slide,scale} from 'svelte/transition'

import Nav from "$lib/Nav.svelte";
import '../css/global.css'

</script>
<header transition:slide>

<h1>SMART STUDIO</h1>
</header>
<main>
  <Nav />

    <slot></slot>
</main>

<footer transition:slide>
<h4>Сделано в SMARTSTUDIO</h4>

</footer>

<style>
    h1{
      color:teal; 
      text-shadow: 2px 2px 1px black;
    }
    header{

        text-align: center;
    }

    main{
         text-align: center;
         max-width: 968px;
         margin: 0 auto;
      
     }
     
    footer{
        text-align: center;
        margin-top: 50px;
    }
    
</style>
