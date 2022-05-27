import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard";
import { categories } from "../../../../utils/constant";
import { fetchData } from "../../../../utils/functions/fetchData";
import getAllProducts from "../../../../utils/functions/getAllProducts";
import { useViewport } from "../../../../utils/hook/useViewport";
import { Product } from "../../../../utils/types/Product";
import SortBy from "../SortBy";

interface CategoryProductProps {
    idsChoose: number[],
    products: Product[],
}

const CategoryProduct: React.FC<CategoryProductProps> = ({idsChoose, products}) => {

    const {isTablet, isMobile} = useViewport();

    return (
        <div className="category-product">
            <h3 className="is-size-5 has-text-weight-bold is-uppercase block">
                Danh mục
            </h3>
            <SortBy />
            {/* <div className="columns is-flex-wrap-wrap is-variable is-2"> */}
            <div className="tile is-ancestor is-flex-wrap-wrap">
                {products
                    .filter((product) => {
                        if (!idsChoose.length) return true;
                        const categoryChosen = idsChoose.map(
                            (id) => categories[id]
                        );
                        let right = true;
                        for (let e of categoryChosen) {
                            if (!product.categories.includes(e.value))
                                right = false;
                        }
                        return right;
                    })
                    .map((item, id) => (
                        <div
                            className={`tile is-parent full-width ${
                                isMobile ? "is-12" : isTablet ? "is-6" : "is-4"
                            }`}
                            key={id}
                        >
                            <div className="tile is-child">
                                <ProductCard product={item} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CategoryProduct;