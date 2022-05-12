import ProductCard from "../../../../components/ProductCard";
import SortBy from "../SortBy";

const CategoryProduct = () => {

    return (
        <div className="category-product">
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">Category</h3>
            <SortBy />
            <div className="columns is-flex-wrap-wrap is-variable is-2">
                {
                    Array(10).fill(0).map((_, id) => (
                        <div className="column is-4 pb-6">
                            <ProductCard />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryProduct;