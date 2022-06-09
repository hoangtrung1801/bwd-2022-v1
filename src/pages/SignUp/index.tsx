import { FirebaseError } from "firebase/app";
import { AuthError, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { ErrorInfo, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button1 from "../../components/Button/Button1";
import FacebookSocialButton from "../../components/Button/FacebookSocialButton";
import GithubSocialButton from "../../components/Button/GithubSocialButtont";
import GoogleSocialButton from "../../components/Button/GoogleSocialButton";
import Header from "../../components/Header";
import { auth, collectionUsers } from "../../firebase";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const { token, setToken } = useToken();
    const {isMobile} = useViewport();

    if (token) {
        navigate("/");
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

            const doc = await addDoc(collectionUsers, {
                id: uid,
                username,
                email
            });
            setToken(doc.id);

            // noty to user
            // toast.success("Đăng kí thành công");
            navigate('/');
        }  catch(e: FirebaseError | any) {
            if(e.code === 'auth/email-already-in-use') {
                toast.error('Email đã được sử dụng');
            }
            console.error('error', e.message);
        }
    }

    return (
        <div>
            <div>
                <Toaster position="top-right" />
            </div>

            <Header />
            <main className="main">
                <div className="login" style={{padding: isMobile ? '1rem' : '6rem 5rem'}}>
                    <div className="columns full-height">
                        <div className="column is-half">
                            <div className="login-column full-height p-6 has-text-centered">
                                <div className="block">
                                    <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                                        Đăng kí
                                    </h1>
                                    {/* <p className="is-size-7">
                                        Chào mừng bạn! Hãy đăng nhập vào tài
                                        khoản
                                    </p> */}
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
                                        <Button1 >Đăng kí</Button1>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="login-column full-height p-6 has-text-centered">
                                <h1 className="is-size-3 has-text-weight-bold block is-uppercase">
                                    hoặc
                                </h1>
                                {
                                    isMobile ? (
                                        <div className="social-btn-mobile">
                                            <FacebookLogo className="btn-facebook"/>
                                            <GoogleLogo className="btn-google"/>
                                            <GithubLogo className='btn-github'/>
                                        </div>
                                    ) : (
                                        <div>
                                            <FacebookSocialButton />
                                            <GoogleSocialButton />
                                            <GithubSocialButton />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;
