<script>
    // your script goes here
</script>
<div class="nav">
<a href="/"><button>MAIN PAGE</button></a>
<a href="/about"><button>ABOUT</button></a>
<a href="/contacts"><button>CONTACTS</button></a>
<a href="/"><button>PRODUCTS</button></a>
<a href="/posts"><button>POSTS</button></a>
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
    }
    .nav{
   
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(100px, 150px)) ;
        gap: 20px;
        
        justify-content: center;
      

    }
</style>

