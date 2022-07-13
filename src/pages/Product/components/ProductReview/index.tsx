import { Star } from "phosphor-react";
import { useState } from "react";
import { updateDoc } from "swr-firestore-v9";
import Button4 from "../../../../components/Button/Button4";
import useToken from "../../../../utils/hook/useToken";
import useUser from "../../../../utils/hook/useUser";
import { Product } from "../../../../utils/types/Product";

interface ProductReivewProps {
    onPostComment: (comment: string) => void;
    comments: {
        username: string;
        comment: string;
        createAt: string;
    }[];
}

const ProductReivew: React.FC<ProductReivewProps> = ({
    onPostComment,
    comments,
}) => {
    const { token } = useToken();

    return (
        <div className="" style={{ marginTop: "8rem" }}>
            <div>
                <p className="is-size-3 has-text-weight-bold is-uppercase">
                    Đánh giá
                </p>
                <hr />
            </div>

            {token ? (
                <CommentField onPostComment={onPostComment} />
            ) : (
                <div className="block">
                    <i className="has-text-grey">
                        Bạn cần đăng nhập để có thể bình luận sản phẩm !
                    </i>
                </div>
            )}
            <div>
                {comments.map((comment, id) => (
                    <article
                        className="media"
                        key={id}
                        style={{ border: "none" }}
                    >
                        <figure className="media-left">
                            <p className="image is-64x64">
                                {/* <img src="https://bulma.io/images/placeholders/128x128.png" /> */}
                                <img src="/assets/avatar.png" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="">
                                <div className="mb-1">
                                    <p className="mb-1">
                                        <strong>{comment.username}</strong>{" "}
                                        <small className="ml-2 is-italic is-size-7 has-text-grey">
                                            {/* {comment.createAt.toLocaleDateString()} */}
                                            {new Date(
                                                comment.createAt
                                            ).toLocaleDateString()}
                                        </small>
                                    </p>
                                    <div>
                                        {Array(5)
                                            .fill(0)
                                            .map((_, id) => (
                                                <Star
                                                    key={id}
                                                    weight="fill"
                                                    color="#ffd700"
                                                />
                                            ))}
                                    </div>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

interface InputFieldProps {
    onPostComment?: (text: string) => void;
}

const CommentField: React.FC<InputFieldProps> = ({ onPostComment }) => {
    const [inputText, setInputText] = useState("");

    const onClick = () => {
        setInputText("");
        onPostComment(inputText);
    };

    return (
        <div className="full-width block">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        {/* <img src="https://bulma.io/images/placeholders/128x128.png" /> */}
                        <img src="/assets/avatar.png" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="field">
                        <p className="control">
                            <textarea
                                className="textarea"
                                placeholder="Nhập bình luận của bạn tại đây..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>
                        </p>
                    </div>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item is-justify-content-flex-start">
                                {/* <a className="button is-info">Submit</a> */}
                                <Button4 onClick={() => onClick()}>
                                    Đăng
                                </Button4>
                            </div>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
};

export default ProductReivew;
