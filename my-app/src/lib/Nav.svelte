<script>
    // your script goes here
</script>
<div class="nav">
<a href="/"><button>ГЛАВНАЯ</button></a>
<a href="/todo"><button>TO DO</button></a>
<a href="/restapi"><button>REST API</button></a>
<a href="/polls"><button>ОПРОСЫ</button></a>
<a href="/posts"><button>ПОСТЫ</button></a>
</div>

<style>
    
    button{
        font-family: 'Scada', sans-serif;
        background: teal;
        border: none;
        padding: 10px;
        min-width: 100px;
        color: aliceblue;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 2px 2px 1px black;
    }

      button:active{
        background: red;
      }  
      
    
    .nav{
   
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(100px, 150px)) ;
        gap: 20px;
        
        justify-content: center;
        

    }
</style>

