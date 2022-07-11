import { motion } from "framer-motion";
import { CaretDown, Minus } from "phosphor-react";
import { useState } from "react";
import { categories } from "../../../../utils/constant";
import { useViewport } from "../../../../utils/hook/useViewport";
import { filterTypeVariants } from "../../../../utils/variants";
import "./filter.css";

interface FilterProps {
    setCategory: (id: number, state: boolean) => void;
    idsChoose: number[];
}

const Filter: React.FC<FilterProps> = ({ setCategory, idsChoose }) => {
    const { isMobile } = useViewport();
    const [show, setShow] = useState(true);

    const chooseCategory = (id: number) => {
        setCategory(id, true);
    };

    const removeCategory = (id: number) => {
        setCategory(id, false);
    };

    return (
        <div className="filter" style={isMobile ? { border: "none" } : {}}>
            <h3 className="is-size-4 has-text-weight-semibold block">
                Phân loại
            </h3>
            <div className="mb-3" style={{ borderBottom: "1px solid #eee" }}>
                <p
                    className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center is-clickable"
                    style={{ lineHeight: "2rem" }}
                    onClick={() => setShow(!show)}
                >
                    <span className="">Loại</span>
                    {show ? <Minus /> : <CaretDown />}
                </p>
                <motion.div
                    variants={filterTypeVariants}
                    initial={false}
                    animate={show ? "visible" : "hidden"}
                    style={{ overflow: "hidden" }}
                >
                    <ul className="is-flex is-flex-wrap-wrap">
                        {categories.map((category, id) => (
                            <li
                                className="filter-item is-flex is-align-items-center my-2 has-text-grey"
                                key={id}
                            >
                                <input
                                    type="checkbox"
                                    name={`cb-${id}`}
                                    id={`cb-${id}`}
                                    className="mr-3 is-clickable"
                                    style={{ borderColor: "#7a7a7a" }}
                                    onClick={(e: any) =>
                                        e.target.checked
                                            ? chooseCategory(id)
                                            : removeCategory(id)
                                    }
                                    checked={idsChoose.includes(id)}
                                />
                                <label
                                    htmlFor={`cb-${id}`}
                                    className="has-cursor-pointer"
                                >
                                    {category.label}
                                </label>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <div className="mb-3" style={{ borderBottom: "1px solid #eee" }}>
                <p
                    className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center"
                    style={{ lineHeight: "2rem" }}
                >
                    <span className="">Giá</span>
                    <CaretDown />
                </p>
            </div>

            <div className="mb-3" style={{ borderBottom: "1px solid #eee" }}>
                <p
                    className="has-text-weight-semibold mb-2 is-flex is-justify-content-space-between is-align-items-center"
                    style={{ lineHeight: "2rem" }}
                >
                    <span className="">Nhãn hàng</span>
                    <CaretDown />
                </p>
            </div>
        </div>
    );
};

export default Filter;
