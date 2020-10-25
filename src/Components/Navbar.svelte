<script>
    import { CartItems } from "../Stores/stores";

    let itemsInCart = 0;
    let total = 0;
    $: {
        let totalSum = 0;
        let count = 0;
        for (let item of $CartItems) {
            count += item[0].quantity;
            totalSum += item[0].price * item[0].quantity;
        }
        itemsInCart = count;
        total = totalSum;
    }

    let show = false;
    const displayShoppingCart = () => {
        if (!show) {
            document.querySelector("#cartContainer").style.display = "block";
            document.querySelector("#shoppingCartBtn").style.backgroundColor =
                "#3eb9e6";
            show = true;
        } else if (show) {
            document.querySelector("#cartContainer").style.display = "none";
            document.querySelector("#shoppingCartBtn").style.backgroundColor =
                "#f4f4f4";
            show = false;
        }
    };
    const displayCategories = () => {
        document.querySelector("#categories").style.display = "block";
        document.querySelector("#products").style.display = "none";
    };
    const displayProducts = () => {
        document.querySelector("#categories").style.display = "none";
        document.querySelector("#products").style.display = "block";
    };
</script>

<style>
</style>

<div class="container">
    <nav>
        <ul class="navbar ul">
            <li>
                <button
                    class="btn btn-light"
                    on:click={displayCategories}>Categories</button>
            </li>
            <li>
                <button
                    class="btn btn-light"
                    on:click={displayProducts}>Products</button>
            </li>
            <li>
                <button
                    class="btn btn-light"
                    id="shoppingCartBtn"
                    on:click={displayShoppingCart}>Shopping Cart</button>
            </li>
        </ul>
        Items in cart
        {itemsInCart}. Your total
        {total}
    </nav>
</div>
