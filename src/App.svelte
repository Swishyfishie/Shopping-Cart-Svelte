<script>
	import Product from "./Components/Product.svelte";
	import { Products } from "./Stores/stores";
	import Navbar from "./Components/Navbar.svelte";

	import ShoppingCart from "./Components/ShoppingCart.svelte";
	import Categories from "./Components/Categories.svelte";
	let cartItems = [];
	let availableProducts = [];
	Products.subscribe((data) => {
		availableProducts = data;
	});
</script>

<style>
</style>

<Navbar />
<ShoppingCart {cartItems} />
<Categories />
<div class="container grid-2" id="products">
	{#if availableProducts.length === 0}
		<p>No products available</p>
	{:else}
		{#each availableProducts as item}
			<div class="card">
				<Product
					productName={item.productName}
					price={item.price}
					category={item.category}
					image={item.image_url} />
			</div>
		{/each}
	{/if}
</div>
