import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Button3 from "../../components/Button/Button3";
import Layout from "../../components/Layout";
import { auth } from "../../firebase";
import useToken from "../../utils/hook/useToken";
import "./checkout.css";
import CheckoutCart from "./components/CheckoutCart";
import CheckoutForm from "./components/CheckoutForm";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
    const navigate = useNavigate();
    const products = useAppSelector((state) => state.cart.items);

    const { token, setToken } = useToken();
    const [donateAmount, setDonateAmount] = useState(0);

    const onCheckout = () => {
        const fakeFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(0);
            }, 1000);
        });

        toast
            .promise(
                fakeFetch,
                {
                    loading: <b>Đang thanh toán...</b>,
                    success: <b>Bạn đã thanh toán thành công !</b>,
                    error: <b>Lỗi</b>,
                },
                {
                    style: {
                        padding: "2rem 2rem",
                        backgroundColor: "var(--color-1)",
                        color: "white",
                        fontWeight: "bold",
                    },
                    iconTheme: {
                        primary: "white",
                        secondary: "var(--dark)",
                    },
                    duration: 2000,
                }
            )
            .then(() => {
                navigate("/");
            });
    };

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <Layout>
            <div className="container py-6 checkout">
                <div className="columns ">
                    <div className="column is-8 ">
                        <CheckoutForm
                            donateAmount={donateAmount}
                            setDonateAmount={setDonateAmount}
                        />
                    </div>

                    <div className="column is-4">
                        <CheckoutCart
                            products={products}
                            onCheckout={onCheckout}
                            donateAmount={donateAmount}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
