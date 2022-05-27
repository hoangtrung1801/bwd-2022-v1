import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { categories as categoryList } from "../../utils/constant";
import getAllProducts from "../../utils/functions/getAllProducts";
import CategoryItem from "../../utils/types/CategoryItem";
import { Product } from "../../utils/types/Product";
import './category.css';
import CategoryProduct from "./components/CategoryProduct";
import Filter from "./components/Filter";

const Category = () => {

    const [idsChoose, setIdsChoose] = useState<number[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const setCategory = (id: number, state: boolean) => {
        if(state) {
            setIdsChoose([...idsChoose, id]);
        } else {
            setIdsChoose([...idsChoose.filter(e => e != id)]);
        }
    }

    useEffect(() => {
        console.log('reload category product');
        getAllProducts().then((data: Product[]) => {
            setProducts(data);
        })
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
