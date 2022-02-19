<script>
import {fade, slide,scale} from 'svelte/transition'
   export let style = 'primary'
   export let type = 'button'
   export let disabled = false
   export let title = 'Отправить'
</script>
<button transition:fade {type} {disabled} class = {style} >{title} 
<slot ></slot>

</button>
<style>
       button {
        justify-self: flex-end;
        align-self:center;
        
    }
    .primary{
        display: inline;
        background: none;
        color: teal;
        padding:7px;
        border: 1px solid teal;
        border-radius: 7px;   
        cursor: pointer; 
        box-shadow: 1px 1px 3px  teal ;
    }
   
    .primary:hover{
        background: teal;
        color: white;
        box-shadow: none;
    }
    .secondary{
        display: inline;
        background: none;
        color: grey;
        padding:7px;
        border: 1px solid grey;
        border-radius: 7px;   
        
        
    }
</style>

