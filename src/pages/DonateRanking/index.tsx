import { motion } from "framer-motion";
import React from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import useDonaters from "../../utils/hook/useDonaters";
import { useViewport } from "../../utils/hook/useViewport";
import {
    donateRankingParentVariants,
    inViewDropupShow,
} from "../../utils/variants";
import "./donate-ranking.css";

const DonateRanking = () => {
    const { donaters, isLoading, error } = useDonaters();
    const { isMobile } = useViewport();

    if (isLoading) return <Loading></Loading>;

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
                        height: "100%",
                    }}
                >
                    <motion.div
                        className="donate-ranking-title is-flex is-flex-direction-column is-justify-content-center is-align-items-center block is-relative"
                        variants={inViewDropupShow}
                    >
                        <img src="/assets/crown-icon.png" alt="" width={128} />
                        <p
                            className=" is-size-2 is-capitalized has-text-weight-bold font-heading"
                            style={{ color: "var(--text)" }}
                        >
                            Bảng quyên góp
                        </p>
                        <p
                            className="has-text-centered"
                            style={{ maxWidth: "800px" }}
                        >
                            Cảm ơn bạn đã quyên góp cho chúng tôi. Chúng tôi
                            không thể thực hiện hành động gây quỹ này nếu không
                            có sự ủng hộ của các bạn. Toàn bộ số tiền gây quỹ
                            đến từ các bạn sẽ được dùng cho hoạt động bảo vệ môi
                            trường.
                        </p>
                    </motion.div>

                    <motion.div
                        className="container"
                        variants={inViewDropupShow}
                    >
                        <div className="" style={{ overflowY: "auto" }}>
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
                                                    Họ tên
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
                                                    email
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
                                                    Trường
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {donaters.map((donater, id) => (
                                        <tr key={id}>
                                            <td className="py-4 pl-5">
                                                {id + 1}
                                            </td>
                                            <td className="py-4 pl-5">
                                                {`${donater.firstName} ${donater.lastName}`}
                                            </td>
                                            <td className="py-4 pl-5">
                                                {`${donater.email}`}
                                            </td>
                                            <td className="py-4 pl-5">
                                                {donater.school}
                                            </td>
                                            <td className="py-4 pl-5 has-text-weight-semibold">
                                                {`${donater.amount}K`}
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
};

export default DonateRanking;
