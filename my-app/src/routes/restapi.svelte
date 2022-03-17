
<script>
    
 import {fade, slide,scale} from 'svelte/transition'
 import { pokemon } from './stores/pokestore';
 import {flip} from "svelte/animate";
import PockemanCard from '$lib/PockemanCard.svelte';

 let searchPokemon = '';
 let pokemonList = [];

$: {
    if (searchPokemon) {
        pokemonList = $pokemon.filter(pokeman=>
            pokeman.name.toLowerCase().includes(searchPokemon.toLowerCase()));
        
        
    }else {
        pokemonList = [...$pokemon]
    }

} 


</script>

<h2 in:scale out:slide >REST API</h2>
<input type="text"  bind:value ={searchPokemon} placeholder="поиск персонажа" >
<div class="guides-container" >
    {#each pokemonList as pokeman (pokeman.id)}
        <div class="pokemon"  out:scale in:slide animate:flip={{duration:600}}>
            <PockemanCard {pokeman}
/>        </div>   
    {/each}
</div>

<style>
 .guides-container{
     display: grid;
     grid-template-columns: repeat(4,1fr);
     gap:10px;
     margin-top: 20px;
 }
 
 input{ 
     padding: 10px;
     min-width: 360px;
     border-radius: 8px;
     border-color: rgb(2, 121, 121, 0.1);
 }
</style>

