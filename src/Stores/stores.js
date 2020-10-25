import { writable } from 'svelte/store';

export const Products = writable([
    {
        productName: "Chicken Tikka",
        price: 14,
        category: "Chicken",
        image_url: 'https://image.shutterstock.com/image-photo/chicken-tikka-masala-spicy-curry-600w-1139536520.jpg'
    },
    {
        productName: "Soup",
        price: 10,
        category: "Vegetarian",
        image_url: 'https://image.shutterstock.com/image-photo/pumpkin-carrot-soup-tadka-cream-600w-409170664.jpg'
    },
    {
        productName: "Burger",
        price: 20,
        category: "Beef",
        image_url: 'https://image.shutterstock.com/image-photo/view-fresh-tasty-burger-on-600w-1717771099.jpg'
    },
    {
        productName: "Cake",
        price: 12,
        category: "Dessert",
        image_url: 'https://image.shutterstock.com/image-photo/plate-slice-tasty-homemade-chocolate-600w-1295709469.jpg'
    },
    {
        productName: "Ice Cream",
        price: 8,
        category: "Dessert",
        image_url: 'https://image.shutterstock.com/image-photo/fresh-fruit-scoops-creamy-speciality-600w-1049230460.jpg'
    },
    {
        productName: "Haloumi Sandwich",
        price: 12,
        category: "Vegetarian",
        image_url: 'https://image.shutterstock.com/image-photo/sandwiches-pesto-tomatoes-grilled-haloumi-600w-241493740.jpg'
    },
    {
        productName: "Steak",
        price: 30,
        category: "Beef",
        image_url: 'https://image.shutterstock.com/image-photo/juicy-medium-beef-rib-eye-600w-732177829.jpg'
    }
])

export const CartItems = writable([])