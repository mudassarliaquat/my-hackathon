'use client';

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
    projectId: "l0aq49hy",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true,
});

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    productImage: {
        asset: {
            _ref: string;
        };
    };
    tags: string[];
}

interface CartItem extends Product {
    quantity: number;
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `
                *[_type == "product"] {
                    _id,
                    title,
                    price,
                    description,
                    discountPercentage,
                    "imageUrl": productImage.asset->url,
                    tags
                }
            `;

            const data = await sanity.fetch(query);
            setProducts(data);
        } catch (error) {
            console.error("Error Fetching Products:", error);
        }
    };

    const addToCart = (product: Product) => {
        const existingItem = cart.find((item) => item._id === product._id);

        if (existingItem) {
            // If the product is already in the cart, increase its quantity
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }

        alert(`${product.title} has been added to your cart!`);
    };

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };

    const increaseQuantity = (productId: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const truncateDescription = (description: string) => {
        return description.length > 100
            ? description.substring(0, 100) + "..."
            : description;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-center text-slate-800 mt-4 mb-4">
                Products from API's Data
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={product.imageUrl || "/fallback-image.jpg"}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">
                                {product.title}
                            </h2>
                            <p className="text-slate-800 mt-2 text-sm">
                                {truncateDescription(product.description)}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600 font-bold">
                                        ${product.price}
                                    </p>
                                    {product.discountPercentage > 0 && (
                                        <p className="text-sm text-green-600">
                                            {product.discountPercentage}% OFF
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-slate-400 text-black px-2 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li
                                key={item._id}
                                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                            >
                                <div>
                                    <p className="font-medium text-slate-900">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-blue-600">
                                        ${item.price.toFixed(2)} x {item.quantity}
                                    </p>
                                    <p className="text-sm text-green-600">
                                        Total: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        className="px-2 py-1 bg-red-500 text-white rounded-md"
                                        onClick={() => decreaseQuantity(item._id)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 bg-green-500 text-white rounded-md"
                                        onClick={() => increaseQuantity(item._id)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-600 text-white rounded-md"
                                        onClick={() => removeFromCart(item._id)}
                                    >
                                        Remove
                                    </button>
                                </div>

                                <Image
                                    src={item.imageUrl || "/fallback-image.jpg"}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-black text-center">
                        Your Cart is Empty. Please Add Products.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;