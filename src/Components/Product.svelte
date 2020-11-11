<script>
    import { CartItems } from "../Stores/stores";
    // import { Foods } from "../Stores/stores";
    export let productName;
    export let price;
    export let category;
    export let image;
    const addToCart = () => {
        for (let item of $CartItems) {
            if (item[0].productName === productName) {
                console.log("Already in");
                item[0].quantity += 1;
                $CartItems = $CartItems;
                return;
            }
        }
        $CartItems = [
            ...$CartItems,
            [
                {
                    productName: productName,
                    price: price,
                    category: category,
                    quantity: 1,
                },
            ],
        ];
    };
</script>

<style>
</style>

<h1>{productName}</h1>
<p>Price: {price}</p>
<p>Category: {category}</p>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img src={image} alt="food image" class="img" />
<button class="btn btn-primary" on:click={addToCart}>Add to cart</button>
