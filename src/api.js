// src/api.js
const products = [
    {
        id: 1,
        name: 'Awesome Product',
        description: "This product is really awesome and you'll love it.",
        price: 29.99,
        image: 'https://via.placeholder.com/150', // You can replace this with your actual product images
    },
    {
        id: 2,
        name: 'Great Item',
        description: 'Everyone loves this great item.',
        price: 39.99,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Fantastic Gadget',
        description: 'This gadget will change your life.',
        price: 49.99,
        image: 'https://via.placeholder.com/150',
    },
];

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};
