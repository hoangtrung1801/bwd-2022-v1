import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { categories } from "../../utils/constant";
import useProducts from "../../utils/hook/useProducts";
import CategoryItem from "../../utils/types/CategoryItem";
import { Product } from "../../utils/types/Product";
import "./category.css";
import CategoryProduct from "./components/CategoryProduct";
import Filter from "./components/Filter";

const Category = () => {
    const { products, error, isLoading } = useProducts();

    const [searchParams, setSearchParams] = useSearchParams();
    const [idsChoose, setIdsChoose] = useState<number[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const setCategory = (id: number, state: boolean) => {
        const temp = products;
        setFilteredProducts([]);
        if (state) {
            setIdsChoose([...idsChoose, id]);
        } else {
            setIdsChoose([...idsChoose.filter((e) => e != id)]);
        }
        setTimeout(() => setFilteredProducts(temp), 0);
    };

    useEffect(() => {
        if (isLoading) return;
        setFilteredProducts(products);
    }, [products]);

    useEffect(() => {
        if (searchParams.get("type")) {
            setIdsChoose([
                ...idsChoose,
                categories.findIndex(
                    (e: CategoryItem) => e.value === searchParams.get("type")
                ),
            ]);
        }
    }, []);

    return (
        <Layout>
            <div className="container py-6 px-4">
                <div className="columns">
                    <div className="column is-3">
                        <Filter
                            setCategory={setCategory}
                            idsChoose={idsChoose}
                        />
                    </div>

                    <div className="column is-9">
                        <CategoryProduct
                            products={filteredProducts}
                            idsChoose={idsChoose}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;
