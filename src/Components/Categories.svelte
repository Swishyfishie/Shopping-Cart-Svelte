<script>
    import { Products } from "../Stores/stores";
    import Product from "./Product.svelte";

    let filteredProducts = [];
    const filterCategory = (e) => {
        debugger;
        filteredProducts = [];
        $Products.map((prod) => {
            if (prod.category === e.target.innerText) {
                filteredProducts.push(prod);
            }
        });
    };

    // reduce the categories so they won't be rendered as duplicates
    let res = $Products.map((e) => e.category);
    let categoryArray = [...new Set(res)];
</script>

<style>
    #categories {
        display: none;
    }
</style>

<div class="container inline-block" id="categories">
    <div>
        {#each categoryArray as product}
            <button class="btn" on:click={filterCategory}>{product}</button>
        {/each}
    </div>

    {#if filteredProducts.length === 0}
        <p>No products available</p>
    {:else}
        {#each filteredProducts as prod}
            <div class="card">
                <Product
                    productName={prod.productName}
                    price={prod.price}
                    category={prod.category}
                    image={prod.image_url} />
            </div>
        {/each}
    {/if}
</div>
