


<script>
 import {fade, slide,scale} from 'svelte/transition'
 import { pokemon } from './stores/pokestore';


</script>

<h2 in:scale out:slide >REST API</h2>
<div class="guides-container" >
    {#each $pokemon as pokeman (pokeman.id)}

        <div class="pokemon">{pokeman.name}</div>
        <img src={pokeman.image} alt="poco">
    {/each}

</div>

<style>
 
</style>

