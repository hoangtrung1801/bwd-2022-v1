import { motion } from "framer-motion";
import ProductCard from "../../../../components/ProductCard";
import { categories } from "../../../../utils/constant";
import { useViewport } from "../../../../utils/hook/useViewport";
import CategoryItem from "../../../../utils/types/CategoryItem";
import { Product } from "../../../../utils/types/Product";
import { categoryItemShow } from "../../../../utils/variants";
import SortBy from "../SortBy";

interface CategoryProductProps {
    idsChoose: number[],
    products: Product[],
}

const CategoryProduct: React.FC<CategoryProductProps> = ({idsChoose, products}) => {

    const {isTablet, isMobile} = useViewport();

    return (
        <div className="category-product">
            <h3 className="is-size-4 has-text-weight-semibold block">
                {/* Danh mục */}
                Danh sách sản phẩm
            </h3>
            {/* <SortBy /> */}
            {/* <div className="columns is-flex-wrap-wrap is-variable is-2"> */}
            <motion.div className="tile is-ancestor is-flex-wrap-wrap"
            >
                {products
                    .filter((product) => {
                        if (!idsChoose.length) return true;
                        const categoryChosen: CategoryItem[] = idsChoose.map(
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
                        <motion.div
                            className={`tile is-parent full-width ${
                                isMobile ? "is-12" : isTablet ? "is-6" : "is-4"
                            }`}
                            key={id}
                            variants={categoryItemShow}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}
                        >
                            <div className="tile is-child">
                                <ProductCard product={item} />
                            </div>
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    );
}

export default CategoryProduct;