import { nanoid } from "@reduxjs/toolkit";
import { createServer, Model } from "miragejs";
import { Product } from "./utils/types/Product";

export default function () {
    createServer({
        models: {
            products: Model
        },
        routes() {
            this.post("/api/login", (schema, request) => {
                console.log(schema, request);

                return {
                    token: "tokentest",
                    username: "User",
                };
            });

            this.get("/api/products", (schema, reqeust): {products: Product[]} => {
                return {
                    products: [
                        {
                            id: nanoid(),
                            name: "Product 1",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                        {
                            id: nanoid(),
                            name: "Product 2",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                        {
                            id: nanoid(),
                            name: "Product 3",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                        {
                            id: nanoid(),
                            name: "Product 4",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                    ],
                };
            });

            this.get('/api/featured-products', (schema, request) => {
                return {
                    products: [
                        {
                            id: nanoid(),
                            name: "Product 1",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                                `https://picsum.photos/id/${Math.ceil(
                                    Math.random() * 100 + 10
                                )}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                        {
                            id: nanoid(),
                            name: "Product 2",
                            price: 99,
                            images: [
                                `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1200`,
                                `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1200`,
                            ],
                            categories: [],
                            description: "this is product",
                        },
                    ]
                }
            });
        },
    });
}
