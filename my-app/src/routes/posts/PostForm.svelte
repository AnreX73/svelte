<script>
import {fade, slide,scale} from 'svelte/transition'
import MyButton from "./MyButton.svelte";

</script>

<form >
<div class="input-group" transition:slide>
<input type="text"  placeholder="введите пост">
<MyButton />

</div>

</form>
<style>
    form {
        margin-top: 20px;
    }
    .input-group{
        padding:15px;
        background-color: #fff;
        display:grid;
        grid-template-columns: 5fr 1fr;
        border: 1px solid teal;
        border-radius: 10px; 
    }
    input{
        border: none;

    }
  
</style>

