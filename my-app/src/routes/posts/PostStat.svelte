<script>
import {fade, slide,scale} from 'svelte/transition'
    export let count ;
    export let average; 
</script>
<div class="stat" transition:scale>
<h4>кол-во постов : {count}</h4>
<h4>средний рейтинг : {average}</h4>
</div>
<style>
   .stat{
       display: flex;
       justify-content:space-around;
       align-items: center;
   }
</style>

