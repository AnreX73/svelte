<script>
import {PostStore} from "./../stores/poststore.js";
import {fade, slide,scale} from 'svelte/transition'
 
$:count = $PostStore .length;
$:average = ($PostStore .reduce((a,{rating}) =>a+rating,0)/$PostStore .length).toFixed(2)
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

