<script>
   export let style = 'primary'
   export let type = 'button'
   export let disabled = false
   export let title = 'Отправить'
</script>
<button {type} {disabled} class = {style}>{title} 
<slot ></slot>

</button>
<style>
       button {
        justify-self: flex-end;
        align-self:center;
        background: none;
        color: teal;
        padding:7px;
        border: 1px solid teal;
        border-radius: 7px;   
        cursor: pointer; 
        box-shadow: 1px 1px 3px  teal ;
    }
    .primary{
        display: inline;
    }
   
    .primary:hover{
        background: teal;
        color: white;
        box-shadow: none;
    }
</style>

