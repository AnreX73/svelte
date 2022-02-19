<script>
import {fade, slide,scale} from 'svelte/transition'
import MyButton from "./MyButton.svelte"
import Rating from './Rating.svelte'
let body = ''
let btnDisabled = false
let btnClass = 'secondary'
let min = 10
let massage = ''
const handleInput =() =>{
    if(body.trim().length <= min){
        massage = 'текст должен быть больше '+ min + ' символов'
        btnClass = 'secondary'
        
    }else{
        massage = ''
        btnClass = 'primary'
        btnDisabled = false

    }

}
</script>
<h2>Напишите сообщение</h2>
<form >
    <Rating />
<div class="input-group" transition:slide>
<input  type="text" on:input={handleInput} bind:value = {body} placeholder="введите пост">
<MyButton style ={btnClass} type="submit" disabled = {btnDisabled}  />

</div>
<p class = "massage">{massage}</p>

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
    input:focus{
        outline: none ;
       
    }
    .massage{
        color:red;
        font-size:bold;

    }
 
  
</style>

