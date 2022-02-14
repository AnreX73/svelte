<script>
// import {createEventDispatcher} from 'svelte'
export let post = []
// dispatch = createEventDispatcher()
const delPost = (postId) => {
    // dispatch('deletePost',postId)
    console.log(postId)
    
}


</script>
<div class="post-item">

<div class="post-rating">{post.rating}</div>
<div class="post-id">{post.id}</div>
<div class="title">{post.title}</div>
<div class="post-body">{post.body}</div>
<button class="del-button" on:click = {delPost(post.id)}>X</button>
    
</div>

<style>
    /* your styles go here */
</style>

