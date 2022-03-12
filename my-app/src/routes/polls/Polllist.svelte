<script>
import PollDetail from "./PollDetail.svelte"
import {PollStore} from "./../stores/pollstore.js";
import {fade, slide,scale} from 'svelte/transition';
import {flip} from "svelte/animate";

    
</script>

<div class="polls-container" >
   
    {#each $PollStore as poll (poll.id)}
    <div class="polls" transition:slide|local animate:flip={{duration:600}}>
        <PollDetail {poll} />
    </div>
    {/each}
    
</div>


<style>
.polls-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>

