import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../../components/Layout';
import { useViewport } from '../../utils/hook/useViewport';
import { donateRankingParentVariants, inViewDropupShow, inViewParentShow } from '../../utils/variants';
import './donate-ranking.css';

interface DonateRankingProps {

}

const DonateRanking: React.FC<DonateRankingProps> = () => {
    const {isMobile} = useViewport();

    return (
        <Layout>
            <motion.div
                className="donate-ranking"
                variants={donateRankingParentVariants}
                initial="hidden"
                animate={"visible"}
            >
                <section
                    className=""
                    style={{
                        padding: `${isMobile ? "3rem 1rem" : "2rem 6rem"}`,
                    }}
                >
                    <motion.div className="donate-ranking-title is-flex is-flex-direction-column is-justify-content-center is-align-items-center block is-relative"
                        variants={inViewDropupShow}
                    >
                        <img src="/assets/crown-icon.png" alt="" width={128} />
                        <p
                            className=" is-size-2 is-capitalized has-text-weight-bold font-heading"
                            style={{ color: "var(--text)" }}
                        >
                            Bảng quyên góp
                        </p>
                    </motion.div>

                    <motion.div className="container" variants={inViewDropupShow}>
                        <div className="">
                            <table className="table is-fullwidth">
                                {/* <thead style={{background: 'var(--green-6)'}}> */}
                                <thead
                                    style={{
                                        backgroundColor: "var(--dark)",
                                        color: "var(--text)",
                                    }}
                                >
                                    <tr>
                                        <th>
                                            <a
                                                className="is-flex is-align-items-center is-justify-content-start is-uppercase has-text-weight-medium"
                                                style={{
                                                    background: "inherit",
                                                    color: "#fff",
                                                    padding: "0.35rem 0.75rem",
                                                }}
                                                href="#"
                                            >
                                                <span className="mr-1">
                                                    STT
                                                </span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="is-flex is-align-items-center is-justify-content-start is-uppercase has-text-weight-medium"
                                                style={{
                                                    background: "inherit",
                                                    color: "#fff",
                                                    padding: "0.35rem 0.75rem",
                                                }}
                                                href="#"
                                            >
                                                <span className="mr-1">
                                                    Tên
                                                </span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="is-flex is-align-items-center is-justify-content-start is-uppercase has-text-weight-medium"
                                                style={{
                                                    background: "inherit",
                                                    color: "#fff",
                                                    padding: "0.35rem 0.75rem",
                                                }}
                                                href="#"
                                            >
                                                <span className="mr-1">
                                                    Số tiền
                                                </span>
                                            </a>
                                        </th>
                                        <th>
                                            <a
                                                className="is-flex is-align-items-center is-justify-content-start is-uppercase has-text-weight-medium"
                                                style={{
                                                    background: "inherit",
                                                    color: "#fff",
                                                    padding: "0.35rem 0.75rem",
                                                }}
                                                href="#"
                                            >
                                                <span className="mr-1">
                                                    Ngày quyên góp
                                                </span>
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array(10)
                                        .fill(0)
                                        .map((_, id) => (
                                            <tr key={id}>
                                                <td className="py-4 pl-5">
                                                    {id + 1}
                                                </td>
                                                <td className="py-4 pl-5">
                                                    Lê Kim Hoàng Trung
                                                </td>
                                                <td className="py-4 pl-5">
                                                    50K
                                                </td>
                                                <td className="py-4 pl-5">
                                                    6/6/2022
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </Layout>
    );
}

export default DonateRanking;