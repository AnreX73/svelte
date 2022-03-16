<script>
import PollCard from "$lib/PollCard.svelte";
import {PollStore} from "./../stores/pollstore.js";
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';




let percentVotesA;
let percentVotesB;

  export let poll; 
  $: totalVotes = poll.votesA + poll.votesB;
  $:if(poll.votesA!=0) {
      percentVotesA = Math.round(100/totalVotes * poll.votesA);
  }else{
    percentVotesA = 0
  }
  $:if(poll.votesB!=0) {
      percentVotesB = Math.round(100/totalVotes * poll.votesB);
  }else{
    percentVotesB = 0
  }

  const tweenedA = tweened(0,{
		duration: 1000,
		easing: cubicOut
	});
  const tweenedB = tweened(0,{
		duration: 1000,
		easing: cubicOut
	});
 

  $: tweenedA.set(percentVotesA);
  $: tweenedB.set(percentVotesB);
 

  


  const upVotes = (option,id)=>{
    PollStore.update(currentPoll =>{
    let copiedPool = [...currentPoll];
    let upvotedPoll = copiedPool.find((poll)=>poll.id===id)

    if(option === 'a'){
        upvotedPoll.votesA++;
    }
    if(option === 'b'){
        upvotedPoll.votesB++;
    }

    return copiedPool


  })
}   
const delPoll = (pollId) => {
    PollStore.update((currentPoll) =>{
        return currentPoll.filter((poll)=> poll.id != pollId)

    }) 
}
</script>

<PollCard>
<div class="poll"  > 
    <p>Количество голосов {totalVotes}</p>      
    <h3>{poll.question}</h3>
    <div class="answer " on:click={upVotes('a', poll.id)}>
        <div class="percent a-color" style="width:{$tweenedA}%"></div>
        <span>{poll.answerA}  ({poll.votesA}) -  {percentVotesA} % </span>
    </div>
    <div class="answer " on:click={upVotes('b', poll.id)}> 
        <div class="percent b-color" style="width:{$tweenedB}%"></div>
        <span>{poll.answerB} ({poll.votesB}) -  {percentVotesB} %</span>
    </div>
    <button class="delete" on:click={delPoll(poll.id)}>Удалить опрос</button>
</div>

</PollCard>

<style>
    .poll{
        padding-left: 15px;
        padding-right: 15px;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr;
    }
   
    p{
        color:rgb(0,0,0,0.5)
    }
    .answer{
        margin-top: 5px;
        cursor: pointer;
        position: relative;
        background: rgb(235, 235, 235);
    }
    span{
        display: inline-block;
        padding: 5px 20px;
    }
    .percent{
        
        position: absolute;
        box-sizing: border-box;
        height: 100%;
    }
    .a-color{
        box-sizing: border-box;
        border-left: 4px solid red;
        background: rgba(255, 0, 0, 0.2);
    }
    .b-color{
        box-sizing: border-box;
        border-left: 4px solid teal;
        background: rgba(0, 128, 128, 0.2);
    }
    button{
        margin-top: 15px;
       justify-self: center;
       padding: 10px;
       box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
       border-radius: 6px;;
       cursor: pointer;
       border: none;
       background: rgba(255, 0, 0, 0.4);
       font-weight: bold;
    }
    
</style>

