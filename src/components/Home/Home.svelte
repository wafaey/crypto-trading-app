<script lang="ts" >
  import CryptoInfo from "../CryptoInfo/CryptoInfo.svelte";
  import {  gql } from "graphql-request";
   import {GraphQLClient} from 'graphql-request';
   import type {CountryType} from "../../types";
   const client = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl0azb0t02blk01z7fhkrhfg6/master');
   let countries: CountryType[] =[];
   let currency = {name:"USD",rate:1};
   const get =async()=>{
    try{
        const query = gql`
        query {
            authors {
              id
              name
              countryName
              currency
            }
          }
        `
     const res =await client.request(query);
      countries = res.authors;
      }catch(error){
        return {
            status:500,
            body:{error}
        }
     }
    }
    get();
    const handleChange =  (event) => {
             const { value } = event.target
            currency.name = value;
            countries.forEach(item=>{
                if(item.currency===value){
                    currency.rate = Number(item.name);
                }
            })
          
        };
</script>

    <div class="shadow-l">
      <div class="selection">
        <h2 class="select-text">Select your country</h2>
        <select class="select w-full max-w-xs"   on:change={handleChange}>
            <option selected value="" id="0">Select</option>
              {#each countries as country}
              <option value={country.currency} id={country.id}>{country.countryName}</option>
              {/each}
        </select>
    </div>
    <div class="crypto-pricing">
        <CryptoInfo  {currency} symbol="ethbtc"/>
        <CryptoInfo  {currency} symbol="bnbbtc"/>
        <CryptoInfo  {currency} symbol="ltcbtc"/>
    </div>
</div>

<style>
    .selection{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        color:  #b6b5bb;
    }
    .select-text{
        width:35%;
        margin-bottom:1%;    
    }
    .crypto-pricing{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 220px;
    }
</style>