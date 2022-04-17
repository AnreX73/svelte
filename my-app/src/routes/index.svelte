<script>
// import {fade, slide,scale} from 'svelte/transition'
 import {Smart} from './stores/mainstore.js';
</script>

<h1  >MAIN PAGE  1</h1>
<div class="all-smart"  >
    {#each $Smart as smart_item (smart_item.id)}
        {smart_item.id}
        {smart_item.name}
        <img class="nav_image serv-image"
        src={smart_item.image_url}
        alt={smart_item.name}
      />
    
    {/each}  
</div>

<style>
    /* your styles go here */
</style>



