import { c as create_ssr_component, e as escape, n as null_to_empty, a as each, v as validate_component, b as add_attribute } from "../../chunks/index-310c2c62.js";
import { GraphQLClient, gql } from "graphql-request";
var LineGraph_svelte_svelte_type_style_lang = "";
var CryptoInfo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card-size.svelte-8kav7y{width:18rem;height:175px;border-radius:0;color:#343495}.head.svelte-8kav7y{display:flex;justify-content:space-between}.card-title.svelte-8kav7y{font-size:medium}.middle-text.svelte-8kav7y{font-weight:700;font-size:larger;height:0%}.volume-text.svelte-8kav7y{height:18%;font-weight:700}.percentage-green.svelte-8kav7y{color:#4cd5ab;font-size:medium}.percentage-red.svelte-8kav7y{color:#e58a94;font-size:medium}.currency.svelte-8kav7y{margin-top:2%;margin-left:2%;color:#343495;font-weight:700}.hide.svelte-8kav7y{display:none}",
  map: null
};
const CryptoInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currency } = $$props;
  let { symbol } = $$props;
  let stock = { s: "", l: "", v: "", o: 0, c: 0 };
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0)
    $$bindings.currency(currency);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  $$result.css.add(css$2);
  return `<div class="${escape(null_to_empty("hide")) + " svelte-8kav7y"}"><div class="${"card card-size bg-base-100 shadow-xl svelte-8kav7y"}"><div class="${"card-body"}"><div class="${"head svelte-8kav7y"}"><h2 class="${"card-title svelte-8kav7y"}">${escape(`${stock.s}/USDT`)}</h2>
        <h2 class="${escape(null_to_empty("percentage-red")) + " svelte-8kav7y"}">${escape("")}${escape(((Number(stock.c) - Number(stock.o)) * 100).toFixed(2))}%</h2></div>
      <p class="${"middle-text svelte-8kav7y"}">${escape(stock.l)}</p>
      <p class="${"volume-text svelte-8kav7y"}">Volume: ${escape(Number(stock.v).toFixed(5))}</p>
      </div></div>
  <p class="${"currency svelte-8kav7y"}">${escape(currency.name)}: ${escape(((Number(stock.c) + Number(stock.o)) / 2 * currency.rate).toFixed(4))}</p>
</div>`;
});
var Home_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-9elkyx{width:55%}.selection.svelte-9elkyx{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:2%;color:#b6b5bb}.select-text.svelte-9elkyx{width:35%;margin-bottom:1%}.crypto-pricing.svelte-9elkyx{display:flex;align-items:center;justify-content:space-evenly;height:220px}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const client = new GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl0azb0t02blk01z7fhkrhfg6/master");
  let countries = [];
  let currency = { name: "USD", rate: 1 };
  const get = async () => {
    try {
      const query = gql`
        query {
            authors {
              id
              name
              countryName
              currency
            }
          }
        `;
      const res = await client.request(query);
      countries = res.authors;
    } catch (error) {
      return { status: 500, body: { error } };
    }
  };
  get();
  $$result.css.add(css$1);
  return `<div class="${"card shadow-l svelte-9elkyx"}"><div class="${"selection svelte-9elkyx"}"><h2 class="${"select-text svelte-9elkyx"}">Select your country</h2>
        <select class="${"select w-full max-w-xs"}"><option selected value="${""}" id="${"0"}">Select</option>${each(countries, (country) => {
    return `<option${add_attribute("value", country.currency, 0)}${add_attribute("id", country.id, 0)}>${escape(country.countryName)}</option>`;
  })}</select></div>
    <div class="${"crypto-pricing svelte-9elkyx"}">${validate_component(CryptoInfo, "CryptoInfo").$$render($$result, { currency, symbol: "ethbtc" }, {}, {})}
        ${validate_component(CryptoInfo, "CryptoInfo").$$render($$result, { currency, symbol: "bnbbtc" }, {}, {})}
        ${validate_component(CryptoInfo, "CryptoInfo").$$render($$result, { currency, symbol: "ltcbtc" }, {}, {})}</div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-5f6daj{display:flex;align-items:center;justify-content:center;height:100vh}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-5f6daj"}">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}  
</div>`;
});
export { Routes as default };
