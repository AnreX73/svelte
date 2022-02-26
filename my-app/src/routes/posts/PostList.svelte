<script>
import {PostStore} from "./../stores/poststore.js";
import {fade, slide,scale} from 'svelte/transition'
import PostItem from "./PostItem.svelte";
import PostStat from "./PostStat.svelte";
import PostForm from "./PostForm.svelte";

let posts = []
let postTitle = 'СПИСОК ПОСТОВ'



const addPost =(e) =>{
    const newPost = e.detail
    posts = [newPost,...posts]
}
  
</script>


<PostForm on:add-post = {addPost} />

<h3 transition:slide> {postTitle} </h3>

<PostStat />

<div class="all-posts" transition:slide >
    {#each $PostStore as post (post.id)}
        <PostItem {post}  />
    {:else}
    <p>НЕТ НИХЕРА</p>
    {/each}  
</div>


<style>
   .all-posts{
       display: grid;
       grid-template-columns: 1fr;
       gap: 15px;
       background-color: azure;
       padding:15px;
       border-radius: 10px;   
   }
</style>

