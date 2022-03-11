<script lang="ts">
 import LineGraph from "../LineGraph/LineGraph.svelte";
 import { onMount } from 'svelte';
 export let currency;
 export let symbol;
 let stock ={s:"",l:"",v:"",o:0,c:0};
 let graphPoints=[];
 let ws
 onMount(() => {
    ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@miniTicker`);
        ws.onmessage = (event) =>{
         stock = JSON.parse(event.data);
         graphPoints.push(stock.c);
        }
   })
</script>
<div class={stock.s?"space":"hide"}>
 <div class="card card-size bg-base-100 shadow-xl">
    <div class="card-body">
       <div class="head">
        <h2 class="card-title">{`${stock.s}/USDT`}</h2>
        <h2 class={stock.c>stock.o?"percentage-green":"percentage-red"}> 
           {stock.c>stock.o?"+":""}{((Number(stock.c)-Number(stock.o))*100).toFixed(2)}%</h2>
       </div>
      <p class="middle-text">{stock.l}</p>
      <p class="volume-text">Volume: {Number(stock.v).toFixed(5)}</p>
      <!-- <div class="card-actions justify-end">
          <LineGraph {graphPoints}/>
      </div> -->
    </div>
  </div>
  <p class="currency">{currency.name}: {(((Number(stock.c)+Number(stock.o))/2)*currency.rate).toFixed(4)}</p>
</div>

<style>
    .card-size{
        width: 18rem;
        height: 175px;
        border-radius: 0;
        color: #343495;
        margin: 1%;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .card-title{
        font-size: medium;
    }
    .middle-text{
        font-weight: 700;
        font-size: larger;
        height: 0%;
    }
    .volume-text{
        height: 18%;
        font-weight: 700;
    }
    .percentage-green{
        color: #4cd5ab;
        font-size: medium;
    }
    .percentage-red{
        color: #e58a94;
        font-size: medium;
    }
    .currency{
        margin-top: 2%;
        margin-left: 2%;
        color: #343495;
        font-weight: 700;
    }
    .hide{
        display: none;
    }
    .space{
        margin: 1%;
    }
</style>
