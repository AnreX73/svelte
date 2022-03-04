<script>
import{createEventDispatcher} from 'svelte'
export let items;
export let activeItem ;

const dispatch = createEventDispatcher()
</script>



<div class="tabs">
<ul>
{#each items as item}
    <li on:click={ ()=> dispatch ('tabChange', item) }>
        <div class:active={item===activeItem}>{item}</div>
    </li>
{/each}

</ul>

</div>


<style>
    .active{
        color:red;
        border-bottom: 2px solid red;
        padding:5px;
    }
    .tabs{
        max-width: 960px;
    }
    ul{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        padding:10px;
        list-style-type: none;  
       
    }
   li{
     color: #555;
     cursor: pointer;
     padding:10px;
   }
</style>

