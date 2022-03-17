<script>
   export let pokeman; 
</script>
<a href={`/pokemon/${pokeman.id}`} class="poc-link">
<div class="poke-card">
    <img src={pokeman.image} alt={pokeman.name}>
    {pokeman.name}
</div>
</a>
<style>
  .poke-card{
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    border-radius: 12px;
    background-color: rgb(2, 121, 121, 0.1);
    font-weight: bold;
    
 }  
 .poke-card:hover{
    box-shadow:1px 1px 2px;	
 }
 a{
     text-decoration: none;
     color: black;
 }
</style>

