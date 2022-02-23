<script>
import {fade, slide,scale} from 'svelte/transition'
import {PostStore} from "./../stores/poststore.js";
export let post = [];

const delPost = (postId) => {
    PostStore.update((currentPost) =>{
        return currentPost.filter((post)=> post.id != postId)

    }) 
}


</script>
<div class="post-item" in:fade='{{duration: 500}}' out:slide >

 
    <div class="post-rating" >{post.rating}</div>
   
  
   <div class="title-body">
    <div class="title">ID: {post.id}</div>

    <div class="post-body">{post.body}</div>
  </div>

  <button class="del-button" on:click = {delPost(post.id)}>удалить</button>
    
</div>

<style>
    .post-item{
        padding:15px;
        background-color: #fff;
        display:grid;
        grid-template-columns: 0.2fr  7fr 1fr;
        border: 1px solid teal;
        border-radius: 10px;
       
    }
   
  
   .post-rating{
       justify-self: flex-start;
       align-self:flex-start; 
       color:white;
       
       background-color: red;
       border-radius: 50%;   
       padding:7px;
       margin-top: -20px;
       margin-left: -20px;    
   }
    .title{
        color: teal;
        font-weight:bold;
    }
    .del-button{
        justify-self: flex-end;
        align-self:center;
        background: none;
        color: teal;
        padding:7px;
        border: 1px solid teal;
        border-radius: 7px;   
        cursor: pointer; 
    }
    .del-button:hover{
        background: teal;
        color: white;

    }
</style>

