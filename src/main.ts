import type { AppTypes } from "./models/types.interface";

// ici je declare les variables avec les types importés
const user1: AppTypes.User = {
    id: 1,
    name: "John Doe",
    email: "",
    isActive: true,
};

const product1: AppTypes.Product = {
    id: 101,
    title: "Laptop",
    price: 999.99,
    inStock: true,
};

const products: AppTypes.Product[] = [
    { id: 102, title: "Smartphone", price: 499.99, inStock: true },
    { id: 103, title: "Tablet", price: 299.99, inStock: false },
];

// ici j'affiche les variables dans la console
console.log("User1:", user1);
console.log("Product1:", product1);
console.log("Products List:", products);
