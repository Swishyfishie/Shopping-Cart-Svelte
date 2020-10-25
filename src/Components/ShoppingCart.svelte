<script defer>
    // export let itemsInCart = {};
    import { CartItems } from "../Stores/stores";
    import CartProduct from "../Components/CartProduct.svelte";
</script>

<style>
    #cartContainer {
        display: none;
        background: aliceblue;
    }
</style>

<div class="container " id="cartContainer">
    This is the shopping cart. Items here:
    {#each $CartItems as item}
        <CartProduct cartItem={item} />
    {/each}
</div>
