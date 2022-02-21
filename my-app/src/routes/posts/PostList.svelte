<script>
import {fade, slide,scale} from 'svelte/transition'
import PostItem from "./PostItem.svelte";
import PostStat from "./PostStat.svelte";
import PostForm from "./PostForm.svelte";

const  postDelete = (e) =>{
    const postId = e.detail
 posts = posts.filter((post)=> post.id != postId)
} 
$:count = posts.length;
$:average = (posts.reduce((a,{rating}) =>a+rating,0)/posts.length).toFixed(2)

const addPost =(e) =>{
    const newPost = e.detail
    posts = [newPost,...posts]
}
  let posts = [
      {
          id:1,
          title: 'first',
          rating: 7,
          body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at dolores! Enim rem impedit corporis ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?'
      },
      {
          id:2,
          title: 'second',
          rating: 4,
          body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, '
      },
      {
          id:3,
          title: 'third',
          rating: 9,
          body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?consectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciaticonsectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciati'
      },
  ]
</script>
<PostForm on:add-post = {addPost} />
<h3 transition:slide> Список постов </h3>
<PostStat {count} {average}/>
<div class="all-posts" transition:slide >
    {#each posts as post (post.id)}
        <PostItem {post} on:deletePost = {postDelete}  />
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

