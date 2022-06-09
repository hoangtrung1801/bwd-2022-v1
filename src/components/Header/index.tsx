import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import Logo from "../../logo.png";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";
import User from "../../utils/types/User";
import "./header.css";
import HeaderMenuDesktop from "./HeaderMenuDesktop";
import HeaderMenuMobile from "./HeaderMenuMobile";

const Header = () => {
    const {token} = useToken();
    const { isDesktop } = useViewport();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetch = async(): Promise<User | null> => {
            const userRef = doc(db, 'users', token);
            const userSnap = await getDoc(userRef);
            const userData = await userSnap.data();

            if(userData) {
                const user: User = {
                    username: userData.username,
                    email: userData.email,
                    id: userData.id
                }

                return user;
            }
            return null;
        }

        fetch().then(( user: User | null ) => {
            if(user) setUser(user);
        })

    })

    return (
        <header>
            <div className="header is-flex is-justify-content-space-between is-align-items-stretch px-6">
                <div className="is-size-1 has-text-weight-bold is-uppercase">
                    <Link to="/" className="header-logo is-unselectable">
                        <figure className="image is-2by1">
                            <img src={Logo} alt="" />
                        </figure>
                    </Link>
                </div>
                {isDesktop ? (
                    <HeaderMenuDesktop user={user} />
                ) : (
                    <HeaderMenuMobile user={user} />
                )}
            </div>
        </header>
    );
};

export default Header;
