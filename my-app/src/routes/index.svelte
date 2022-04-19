<script>
// import {fade, slide,scale} from 'svelte/transition'
 import {Smart} from './stores/mainstore.js';
 import MenuCard from "$lib/MenuCard.svelte";
</script>

<h1  >MAIN PAGE  1</h1>

<div class="all-smart"  >
    {#each $Smart as smart_item (smart_item.id)}
    {#if smart_item.cat==1}
    <MenuCard {smart_item}/>
      {/if}
    {/each}  
</div>
<div class="all-smart"  >
    {#each $Smart as smart_item (smart_item.id)}
    {#if smart_item.cat==2}
    <MenuCard {smart_item}/>
      {/if}
    {/each}  
</div>

     <!-- content here -->

<style>
    .all-smart{
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
    }
</style>



