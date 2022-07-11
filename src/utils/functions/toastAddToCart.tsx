import toast from "react-hot-toast";

export default function (func: Promise<unknown>) {
    toast.promise(
        func,
        {
            loading: <b>Đang thêm...</b>,
            success: <b> Đã thêm vào giỏ</b>,
            error: <b>Lỗi</b>,
        },
        {
            style: {
                width: "200px",
                padding: "1rem",
                background: "var(--green-0)",
                color: "var(--text)",
            },
        }
    );
}
