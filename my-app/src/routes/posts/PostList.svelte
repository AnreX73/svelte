<script>
import PostItem from "./PostItem.svelte";


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
          body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?'
      },
      {
          id:3,
          title: 'third',
          rating: 9,
          body:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  at dolores! Enim rem  ut illum voluptates? Qui quo, aliquid illo totam perspiciatis consequatur enim quis doloribus eveniet vel?'
      },
  ]
</script>

<h3> Список постов </h3>
<div class="all-posts">
    {#each posts as post}
        <PostItem {post}   />
    {/each}

    
</div>

<style>
    /* your styles go here */
</style>

