import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { categories, categories as categoryList } from "../../utils/constant";
import getAllProducts from "../../utils/functions/getAllProducts";
import CategoryItem from "../../utils/types/CategoryItem";
import { Product } from "../../utils/types/Product";
import './category.css';
import CategoryProduct from "./components/CategoryProduct";
import Filter from "./components/Filter";

const Category = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [idsChoose, setIdsChoose] = useState<number[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const setCategory = (id: number, state: boolean) => {
        const temp = products;
        setProducts([]);
        if(state) {
            setIdsChoose([...idsChoose, id]);
        } else {
            setIdsChoose([...idsChoose.filter(e => e != id)]);
        }

        setTimeout(() => setProducts(temp), 0);
    }

    useEffect(() => {
        getAllProducts().then((data: Product[]) => {
            setProducts(data);
        })
        if(searchParams.get('type')) {
            setIdsChoose([...idsChoose, categories.findIndex((e: CategoryItem) => e.value === searchParams.get('type'))])
        }
    }, []);

    return (
        <Layout>
            <div className="container py-6 px-4">
                <div className="columns">
                    <div className="column is-3">
                        <Filter setCategory={setCategory}/>
                    </div>

                    <div className="column is-9">
                        <CategoryProduct products={products} idsChoose={idsChoose}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;
