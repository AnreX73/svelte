<script>
import {fade, slide,scale} from 'svelte/transition'
import AddForm from './AddForm.svelte';
import Tabs from './Tabs.svelte';


 let items = ['Активные Опросы', 'Добавить Hовый Oпрос'];
 let activeItem = 'Активные Опросы';

 const changeTab = (e)=>{
    activeItem = e.detail
 }

</script>

<h2 transition:scale>ГОЛОСУЕМ ЗА...</h2>
<div  transition:scale class="container">
<Tabs {activeItem} {items}  on:tabChange={changeTab}/>
{#if activeItem==='Активные Опросы'}
    <p>Активные Опросы</p>
{:else}
   <AddForm/>
{/if}

</div>




<style>
 
</style>

