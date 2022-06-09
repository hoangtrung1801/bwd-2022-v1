import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button1 from "../../components/Button/Button1";
import FacebookSocialButton from "../../components/Button/FacebookSocialButton";
import GithubSocialButton from "../../components/Button/GithubSocialButtont";
import GoogleSocialButton from "../../components/Button/GoogleSocialButton";
import Header from "../../components/Header";
import { auth } from "../../firebase";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const { token, setToken } = useToken();
    const {isMobile} = useViewport();

    if (token) {
        navigate("/");
    }

    // useEffect(() => {
    //     signOut(auth);
    // })

    const onLogin = async (body: any) => {
        const {email, password} = body;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        setToken(userCredential.user.uid);

        // setToken(userCredential.user.getIdToken);)
        // const result = await axios.post('/api/login', body);
        // const { token } = result;

        // setToken(token);

        navigate("/");
    };

    return (
        <div>
            <Header />
            <main className="main">
                <div className="login" style={{padding: isMobile ? '1rem' : '6rem 5rem'}}>
                    <div className="columns full-height">
                        <div className="column is-half">
                            <div className="login-column full-height p-6 has-text-centered">
                                <div className="block">
                                    <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                                        Đăng nhập
                                    </h1>
                                    <p className="is-size-7">
                                        Chào mừng bạn! Hãy đăng nhập vào tài
                                        khoản
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onLogin)}>
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
                                    <div className="my-5">
                                        <Button1 >Đăng nhập</Button1>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="is-italic has-text-grey"
                                        >
                                            Bạn quên mật khẩu ?
                                        </a>
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

export default Login;
