<script>
import {v4 as uuidv4} from 'uuid'
import{createEventDispatcher} from 'svelte'
import {PollStore} from "./../stores/pollstore.js";
import {fade, slide,scale} from 'svelte/transition';
export let activeItem = ''

let fields = {
    question : '',
    answerA: '',
    answerB: '',
    votesA: 0,
    votesB: 0,
};

let errors = {
    question : '',
    answerA: '',
    answerB: '',
};

let valid = false;
const dispatch = createEventDispatcher()

const submitHandler = () =>{
    valid = true;

    if(fields.question.trim().length < 5 ){
        valid = false;
        errors.question = 'Вопрос должен быть больше 5 символов'
    }else{
        errors.question = ''
    }
    if(fields.answerA.trim().length < 1 ){
        valid = false;
        errors.answerA = 'поле не может быть пустым'
    }else{
        errors.answerA = ''
    }
    if(fields.answerB.trim().length < 1 ){
        valid = false;
        errors.answerB = 'поле не может быть пустым'
    }else{
        errors.answerB = ''
    }
    if (valid){
        const newPoll = {
            id: uuidv4(),
            question:fields.question,
            answerA:fields.answerA,
            answerB:fields.answerB,
            votesA:0,
            votesB:0,
            
        }
        PollStore.update((currentPoll) =>{
            return [newPoll,...currentPoll]  
        })
       
        fields.question='';
        fields.answerA='';
        fields.answerB='';
        activeItem = 'Активные Опросы'
       dispatch('add-poll', activeItem)
       
        
    }
           
};

</script>

<form on:submit|preventDefault= {submitHandler} transition:slide>
<div class="form-field">
    <label for="question" > вопрос</label>
    <input type="text" name="question" id="question" bind:value={fields.question}>
    <div class="error">{errors.question}</div>
</div>
<div class="form-field ">
    <label for="answer-a" > ответ А</label>
    <input  class ='a-color' type="text" name="answer-a " id="answer-a" bind:value={fields.answerA}>
    <div class="error">{errors.answerA}</div>
</div>
<div class="form-field ">
    <label for="answer-b " > ответ Б</label>
    <input  class ='b-color' type="text" name="answer-b" id="answer-b" bind:value={fields.answerB}>
    <div class="error">{errors.answerB}</div>
</div>
<!-- <MyButton title = 'Добавить опрос'/> -->
<button>Добавить опрос</button>
</form>

<style>
   form { 
       display: grid;
       grid-template-columns: 1fr;
       gap: 20px;
       margin: 0 auto; 
       max-width:360px;
       background:rgb(0,0,0,0.03);
       padding: 15px;
       box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
       border-radius: 6px;
   }
  
   .form-field{
    display: grid;
       grid-template-columns: 1fr;
   }
   input {
       padding: 10px;
       box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
       border-radius: 6px;
       border: none;
   }
   label{
       justify-self: flex-start;
       color: #555;
   }
   button{
       justify-self: center;
       padding: 10px;
       box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
       border-radius: 6px;;
       cursor: pointer;
       border: none;
   }
   .a-color{
        background: rgba(255, 0, 0, 0.2);
    }
    .b-color{
        background: rgba(0, 128, 128, 0.2);
    }
   .error{
       font-weight: bold;
       font-size: 12px;
       color: red;
       margin-top: 5px;
   }
</style>

