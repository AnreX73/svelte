<script>
 import {fade, slide,scale} from 'svelte/transition'
import AddForm from './AddForm.svelte';

 let item = ['Опросы', 'Добавить новый опрос'];
 let activeItem = 'Опросы';

</script>

<h2 transition:scale>ГОЛОСУЕМ ЗА...</h2>
<div class="tabs">
<ul>
   {#each item as item}
       <li>{item}</li>
   {/each}
           
</ul>

</div>


<style>
    .tabs{
        max-width: 960px;
    }
    ul{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        padding:10px;
       
    }
   li{
    list-style-type: none;   
   }
</style>

