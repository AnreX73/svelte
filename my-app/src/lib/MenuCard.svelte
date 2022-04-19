<script>
   export let smart_item 
</script>
<div class="smart-item">
    <img class="nav_image serv-image"
    src={smart_item.image_url}
    alt={smart_item.name}/>
    <p class="item-title">{smart_item.name}</p> 
</div>
<style>
   img{
       width:120px;
       height:110px;
   }
</style>

