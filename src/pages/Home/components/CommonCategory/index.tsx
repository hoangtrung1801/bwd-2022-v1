import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "../../../../components/ProductCard";
import TagCommon from "../../../../components/Tag/TagCommon";
import { useViewport } from "../../../../utils/hook/useViewport";
import { Product } from "../../../../utils/types/Product";
import {
    inViewScaleChildShow,
    inViewScaleParentShow,
} from "../../../../utils/variants";
import "./common-category.css";

interface CommonCategoryProps {
    products: Product[];
}

const CommonCategory: React.FC<CommonCategoryProps> = ({ products }) => {
    const { isMobile } = useViewport();
    const { inView, ref } = useInView({ threshold: 0.2 });

    return (
        <div className="common-category py-4" ref={ref}>
            <div
                className="has-text-centered"
                style={{ padding: isMobile ? "1rem" : "1rem 6rem" }}
            >
                <div style={{ letterSpacing: "1px" }} className="block">
                    <p className="is-size-4 has-text-weight-bold is-relative common-category-title mb-2">
                        Sản phẩm phổ biến
                    </p>
                    <div className="is-flex is-justify-content-center is-align-items-center mb-2">
                        <svg
                            fill="currentColor"
                            style={{
                                height: "0.25rem",
                                width: "8rem",
                                color: "var(--green-6)",
                            }}
                        >
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>

                    <p className="" style={{ fontSize: "0.85rem" }}>
                        Những sản phẩm bán chạy trong năm nay
                    </p>
                </div>
                <motion.div
                    className="columns is-flex-wrap-wrap is-justify-content-center my-4"
                    variants={inViewScaleParentShow}
                    initial="hidden"
                    animate={inView && "visible"}
                >
                    {products.map((item, id) => {
                        return (
                            <motion.div
                                className="column is-3-desktop is-6-tablet is-12-mobile"
                                key={id}
                                variants={inViewScaleChildShow}
                            >
                                <ProductCard
                                    product={item}
                                    tag={<TagCommon />}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default CommonCategory;
