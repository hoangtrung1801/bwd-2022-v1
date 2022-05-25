import { FacebookLogo, GithubLogo, InstagramLogo } from "phosphor-react";
import { useViewport } from "../../utils/hook/useViewport";
import "./footer.css";

const members = [
    {
        name: "Lê Kim Hoàng Trung",
        code: "21IT052",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Hà Cảnh Hồng Phúc",
        code: "21IT038",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Võ Văn Tuấn",
        code: "21IT055",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
    {
        name: "Trương Đình Dũng",
        code: "21IT013",
        facebook: "https:/fb.com/trung181",
        github: "https://github.com/hoangtrung1801",
        instagram: "#",
    },
];

const Footer = () => {
    const { isMobile } = useViewport();

    return (
        <div className="footer-wrap">
            <div className="footer ">
                {!isMobile && (
                    <div className="mb-6 px-6">
                        <p
                            className="has-text-weight-bold mb-3"
                            style={{ fontSize: "1.1rem" }}
                        >
                            Thành viên
                        </p>
                        <div className="tile is-ancestor">
                            {members.map((member, id) => (
                                <div className="tile is-parent is-3" key={id}>
                                    <div
                                        className="tile is-child"
                                        style={{ letterSpacing: "0.2px" }}
                                    >
                                        <p className="mb-1">{member.name}</p>
                                        <p className="mb-1">
                                            MSV: {member.code}
                                        </p>
                                        <a href={member.facebook}>
                                            <FacebookLogo
                                                size={30}
                                                className="mr-3"
                                            />
                                        </a>
                                        <a href={member.github}>
                                            <GithubLogo
                                                size={30}
                                                className="mr-3"
                                            />
                                        </a>
                                        <a href={member.instagram}>
                                            <InstagramLogo
                                                size={30}
                                                className="mr-3"
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column has-text-centered has-text-weight-semibold">
                    <p>
                        Copyright © 2022 - Trường Đại học Công nghệ Thông tin &
                        Truyền Thông Việt - Hàn, Đại học Đà Nẵng
                    </p>
                    <p>
                        Địa chỉ: 470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành
                        Sơn, Đà Nẵng{" "}
                    </p>
                    <figure className="image mt-4" style={{ width: "100px" }}>
                        <img src="/assets/vku.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Footer;
