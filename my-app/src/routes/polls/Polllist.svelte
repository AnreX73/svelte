<script>
 
    import {PollStore} from "./../stores/pollstore.js";
    
</script>

<div class="polls-container">
    {#each $PollStore as poll (poll.id)}
    <div class="poll">
        
        <div class="question">{poll.question}</div>
        <div class="answer-a">{poll.answerA}</div>
        <div class="answer-b">{poll.answerB}</div>
        <div class="votes-a">{poll.votesA}</div>
        <div class="votes-b">{poll.votesB}</div>
    </div>
    {/each}


</div>
<style>
.polls-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>

