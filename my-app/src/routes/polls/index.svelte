<script>
import {fade, slide,scale} from 'svelte/transition'

import AddForm from './AddForm.svelte';
import Tabs from './Tabs.svelte';
import Polllist from './Polllist.svelte';


 let items = ['АКТИВНЫЕ ОПРОСЫ', 'ДОБАВЬТЕ НОВЫЙ ОПРОС'];
 let activeItem = 'АКТИВНЫЕ ОПРОСЫ' ;

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
{#if activeItem==='АКТИВНЫЕ ОПРОСЫ'}
    <Polllist/>
{:else}
   <AddForm  on:add-poll = {tabChange} />
{/if}

</div>




<style>
 
</style>

