<script>
    export let cartItem;
    import { CartItems } from "../Stores/stores";

    const removeFromCart = (e) => {
        for (let item of $CartItems) {
            if (
                item[0].productName ===
                    e.target.parentElement.querySelector("H1").innerText &&
                item[0].quantity > 0
            ) {
                console.log("Deleting");
                item[0].quantity -= 1;
                $CartItems = $CartItems;
                return;
            }
        }
    };
</script>

<div class="container">
    <h1>{cartItem[0].productName}</h1>
    <p>Price: {cartItem[0].price}</p>
    <p>Quantity: {cartItem[0].quantity}</p>
    <button class="btn btn-danger" on:click={removeFromCart}>Remove</button>
</div>
