<script>
    import { createEventDispatcher } from 'svelte';
    import {fade, slide,scale} from 'svelte/transition'
    
    const dispatch = createEventDispatcher()
    let selected = 10
    const onChange= (e)=>{
        selected = e.currentTarget.value
        dispatch ('rating-select', selected)
    }
</script>


<ul class="rating" transition:scale> 
   <li>
       <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected===1} />
       <label for="num1">1</label>
   </li>
   <li>
       <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2} />
       <label for="num2">2</label>
   </li>
   <li>
       <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected===3} />
       <label for="num3">3</label>
   </li>
   <li>
       <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected===4} />
       <label for="num4">4</label>
   </li>
   <li>
       <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected===5} />
       <label for="num5">5</label>
   </li>
   <li>
       <input type="radio" id="num6" name="rating" value="6" on:change={onChange} checked={selected===6} />
       <label for="num6">6</label>
   </li>
   <li>
       <input type="radio" id="num7" name="rating" value="7" on:change={onChange} checked={selected===7} />
       <label for="num7">7</label>
   </li>
   <li>
       <input type="radio" id="num8" name="rating" value="8" on:change={onChange} checked={selected===8} />
       <label for="num8">8</label>
   </li>
   <li>
       <input type="radio" id="num9" name="rating" value="9" on:change={onChange} checked={selected===9} />
       <label for="num9">9</label>
   </li>
   <li>
       <input type="radio" id="num10" name="rating" value="10" on:change={onChange} checked={selected===10} />
       <label for="num10">10</label>
   </li>
    
</ul>


<style>
     li {
    list-style-type: none; /* Убираем маркеры */
   }
   .rating{
       display: flex;
       align-items: center;
       justify-content: space-evenly;
       margin: 30px 0;
   }
   .rating li{
       position: relative;
       width: 25px;
       height: 25px;
       padding: 10px;
       background: rgb(236, 234, 234);
       text-align: center;
       border-radius:50%;
       font-size: 19px;
       border: 1px solid rgb(168, 164, 164);
       transition: 0.3s;
   }
   .rating li label{
       position: absolute;
       top: 50%;
       left: 50%;
       width: 25px;
       height: 25px;
       padding: 10px;
       border-radius:50%;
       cursor: pointer;
       transform:translate(-50%, -50%);
   }
   .rating li:hover{
       background: red;
       color:white;
   }
   [type='radio']{
       opacity: 0;
   }
   [type='radio']:checked ~label{
    background: red;
       color:white;
   }

</style>

