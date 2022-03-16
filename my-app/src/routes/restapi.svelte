


<script>
 import {fade, slide,scale} from 'svelte/transition'
 import { pokemon } from './stores/pokestore';


</script>

<h2 in:scale out:slide >REST API</h2>
<div class="guides-container" >
    {#each $pokemon as pokeman (pokeman.id)}

        <div class="pokemon">{pokeman.name}
            <img src={pokeman.image} alt="poco">
        </div>
        
    {/each}

</div>

<style>
 .guides-container{
     display: grid;
     grid-template-columns: repeat(5,1fr);
     gap:10px;
 }
 .pokemon{
     padding: 10px;
     display: grid;
     grid-template-columns: 1fr;
     justify-items: center;
     border-radius: 12px;
     
    background-color: rgb(2, 121, 121, 0.1);
 }
</style>

