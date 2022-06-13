import { FirebaseError } from "firebase/app";
import { AuthError, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { ErrorInfo, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Button1 from "../../components/Button/Button1";
import Button4 from "../../components/Button/Button4";
import FacebookSocialButton from "../../components/Button/FacebookSocialButton";
import GithubSocialButton from "../../components/Button/GithubSocialButtont";
import GoogleSocialButton from "../../components/Button/GoogleSocialButton";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { auth, collectionUsers, db } from "../../firebase";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const { token, setToken } = useToken();
    const {isMobile} = useViewport();

    if (token) {
        return <Navigate to='/' />
    }

    const onSignUp = async (body: any) => {
        const {username, email, password, confirmPassword} = body;

        // check password twice
        if(password != confirmPassword) {
            toast.error("Mật khẩu phải giống nhau");
            return;
        }

        // create user
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            const userRef = doc(db, 'users', uid);
            await setDoc(userRef, {
                id: uid,
                username,
                email
            })
            // const document = await addDoc(userRef, {
            //     id: uid,
            //     username,
            //     email
            // });
            setToken(uid);

            // noty to user
            toast.success("Đăng kí thành công");
            // navigate('/');
            setTimeout(() => {
                return <Navigate to='/' />
            }, 1000);
        }  catch(e: FirebaseError | any) {
            if(e.code === 'auth/email-already-in-use') {
                toast.error('Email đã được sử dụng');
            }
            console.error('error', e.message);
        }
    }

    return (
        <Layout>
            <div className='login full-width'>
                <div className="columns full-width full-height m-0">
                    <div className="column is-6 p-0">
                        <div className="full-height is-flex is-flex-direction-column mx-auto" style={{maxWidth: '400px', marginTop: '6rem'}}>
                                <div className="block">
                                    <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                                        Đăng kí
                                    </h1>
                                    <p className="is-size-7">
                                        Bạn có muốn tham gia cùng chúng tôi chung tay bảo vệ môi trường ?
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSignUp)}>
                                    <div className="field">
                                        <div className="control">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder="Tên hiển thị"
                                                    {...register("username")}
                                                />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Email"
                                                {...register("email")}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Mật khẩu"
                                                {...register("password")}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                type="password"
                                                className="input"
                                                placeholder="Nhập lại mật khẩu"
                                                {...register("confirmPassword")}
                                            />
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <Button4 className='login-button'>Đăng kí</Button4>
                                    </div>
                                </form>

                        </div>
                    </div>
                    <div className="column is-6 p-0 is-relative">
                        <div className="login-background is-flex is-align-items-center">
                        </div>
                        <div className='full-width full-height has-text-centered is-flex is-flex-direction-column is-align-items-center' style={{marginTop: '6rem'}}>
                            <h1 className="is-size-2 has-text-white has-text-weight-bold ">LAVIE</h1>
                            <h1 className="is-size-6 has-text-white has-text-white mb-6">Cùng chung tay bảo vệ môi trường</h1>
                            <img src="/assets/login.svg" alt="" style={{height: '60%'}} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
