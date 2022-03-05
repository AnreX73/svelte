<script>
import PollCard from "$lib/PollCard.svelte";

  export let poll; 
  $: totalVotes = poll.votesA + poll.votesB;
</script>
<PollCard>
<div class="poll"> 
    <p>Количество голосов {totalVotes}</p>      
    <h3>{poll.question}</h3>
    <div class="answer a-color"><span>{poll.answerA}  ({poll.votesA})</span></div>
    <div class="answer b-color">{poll.answerB} <span>({poll.votesB})</span></div>
</div>
</PollCard>
<style>
    .poll{
        padding-left: 15px;
        padding-right: 15px;
        text-align: left;
    }
   
    p{
        color:rgb(0,0,0,0.5)
    }
    .answer{
        margin-top: 5px;
        padding: 8px;
        cursor: pointer;
    }
    .a-color{
        background: rgba(255, 0, 0, 0.2);
    }
    .b-color{
        background: rgba(0, 128, 128, 0.2);
    }
    
</style>

