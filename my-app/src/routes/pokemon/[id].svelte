<script context="module">
    export async function load({fetch,params}) {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
         return {props:{pokeman}};
    }


   
</script>

<script>
  export let pokeman;
  const type = pokeman.types[0].type.name
  
</script>

<h2> {pokeman.name}</h2>
<img  class="card-img" src={pokeman.sprites['front_default']} alt={pokeman.name} >
<h3>РОСТ {pokeman.height}</h3>
<h3>ВЕС {pokeman.weight}</h3>
<h3>СТИХИЯ {type}</h3>

<style>
    
</style>

