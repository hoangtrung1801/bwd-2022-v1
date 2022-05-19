import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard";
import { fetchData } from "../../../../utils/functions/fetchData";
import getAllProducts from "../../../../utils/functions/getAllProducts";
import SortBy from "../SortBy";

const CategoryProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getAllProducts().then(data => {
            setProducts(data);
        })
    }, []);

    return (
        <div className="category-product">
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">Danh mục</h3>
            <SortBy />
            <div className="columns is-flex-wrap-wrap is-variable is-2">
                {
                    products.map((item, id) => (
                        <div className="column is-4-desktop is-6-tablet pb-6">
                            <ProductCard product={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryProduct;