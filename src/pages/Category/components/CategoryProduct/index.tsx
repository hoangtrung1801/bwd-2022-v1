import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard";
import SortBy from "../SortBy";

const CategoryProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const {data} = await axios.get('/api/products');
            // console.log(data);
            setProducts(data);
        }

        fetchData().catch(e => console.log(e));
    }, [])


    return (
        <div className="category-product">
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">Category</h3>
            <SortBy />
            <div className="columns is-flex-wrap-wrap is-variable is-2">
                {
                    products.map((item, id) => (
                        <div className="column is-4 pb-6">
                            <ProductCard product={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryProduct;