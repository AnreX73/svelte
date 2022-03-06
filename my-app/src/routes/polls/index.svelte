<script>
import {fade, slide,scale} from 'svelte/transition'

import AddForm from './AddForm.svelte';
import Tabs from './Tabs.svelte';
import Polllist from './Polllist.svelte';


 let items = ['Активные Опросы', 'Добавить Hовый Oпрос'];
 let activeItem = 'Активные Опросы' ;

 const changeTab = (e)=>{
    activeItem = e.detail
 }

const tabChange = (e) =>{
   activeItem = e.detail
}

</script>

<h2 transition:slide >ГОЛОСУЕМ ЗА...</h2>
<div  transition:scale class="container">
<Tabs {activeItem} {items}  on:tabChange={changeTab}/>
{#if activeItem==='Активные Опросы'}
    <Polllist/>
{:else}
   <AddForm  on:add-poll = {tabChange} />
{/if}

</div>




<style>
 
</style>

