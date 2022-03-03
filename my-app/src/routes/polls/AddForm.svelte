<script>
import MyButton from "../posts/MyButton.svelte";
import {fade, slide,scale} from 'svelte/transition';

let fields = {
    question : '',
    answerA: '',
    answerB: '',
};

let errors = {
    question : '',
    answerA: '',
    answerB: '',
};

let valid = false;

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

        console.log(fields);
 
    
};

</script>

<form on:submit|preventDefault= {submitHandler} transition:scale>
<div class="form-field">
    <label for="question" > вопрос</label>
    <input type="text" name="question" id="question" bind:value={fields.question}>
    <div class="error">{errors.question}</div>
</div>
<div class="form-field">
    <label for="answer-a" > ответ А</label>
    <input type="text" name="answer-a" id="answer-a" bind:value={fields.answerA}>
    <div class="error">{errors.answerA}</div>
</div>
<div class="form-field">
    <label for="answer-b" > ответ Б</label>
    <input type="text" name="answer-b" id="answer-b" bind:value={fields.answerB}>
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
       padding:20px;
       border:1px solid teal;
       border-radius:10px;
       box-shadow: 1px 1px 3px  teal ;
   }
  
   .form-field{
    display: grid;
       grid-template-columns: 1fr;
   }
   input {
       padding: 10px;
       border:1px solid teal;
       border-radius:5px;
       box-shadow: 1px 1px 3px  teal ;
   }
   label{
       justify-self: flex-start;
       color: #555;
   }
</style>

