<script>
import PollDetail from "./PollDetail.svelte"
import {PollStore} from "./../stores/pollstore.js";
    
</script>

<div class="polls-container">
    {#each $PollStore as poll (poll.id)}
        <PollDetail {poll} />
    {/each}


</div>
<style>
.polls-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>

