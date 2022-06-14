import CategoryItem from "./types/CategoryItem";
import { Category } from "./types/Cattegory"

export const DONATENOW = "Quyên góp ngay";
export const DONATE = "Quyên góp";

export const bannerSection = [
    {
        image: '/assets/banner-2.jpeg',
        title: 'Thay đổi thế giới',
        body: 'Chúng ta cần bắt đầu thay đổi thế giới ngay hôm nay, không phải ngày mai. Chúng ta cần phải hành động và ngừng phàn nàn về những điều tồi tệ hiện tại để chúng ta có cơ hội làm cho chúng tốt hơn. Hãy cùng chung tay với chúng tôi?',
        button: 'Tìm hiểu thêm'
    },
    {
        image: '/assets/banner-3.jpeg',
        title: 'Tái sử dụng, vì tiềm năng của rác là vô hạn',
        body: 'Bạn đang cố gắng trở nên xanh và thân thiện với môi trường, nhưng không biết làm thế nào bạn có thể tiết kiệm tài nguyên của môi trường? Hãy tái sử dụng rác thải có thể tái chế.',
        button: "Tìm hiểu thêm"
    }
]

export const donateSection = [
    {
        image: '/assets/donate-3.webp',
        title: 'Bảo vệ môi trường',
        body: 'Cùng nhau chung tay bảo vệ môi trường vì tương lai của thế giới, hãy giữ lấy màu xanh và làm sạch môi trường',
        button: "QUYÊN GÓP NGAY"
    },
    {
        image: '/assets/donate-1.jpg',
        title: 'Cùng chung tay quyên góp bảo vệ môi trường',
        body: 'Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.',
        button: "QUYÊN GÓP NGAY"
    }
]

export const currency = {
    en: '$',
    vn: '₫',
}

export const categories: CategoryItem[] = [
    { value: 'canvas', label: 'Vải'},
    { value: 'bamboo', label: 'Tre'},
    { value: 'disposable-nilon', label: 'Túi phân hủy'},
    { value: 'toothbrush', label: 'Bàn chải'},
    { value: 'straw', label: 'Ống hút'},
    { value: 'bottle', label: 'Chai'},
    { value: 'cup', label: 'Ly'},
    { value: 'others', label: 'Khác'},
    { value: "new", label: "Mới"},
    { value: "hot", label: "Nổi bật"},
    { value: "common", label: "Phổ biến"}
]

export const routes: Category[] = [
    {
        name: 'Trang chủ',
        href: '/'
    },
    {
        name: 'Danh mục',
        href: '/category',
        subcategories: [
            {
                name: 'Vải',
                href: '/category?type=canvas'
            },
            {
                name: 'Tre',
                href: '/category?type=bamboo',
            },
            {
                name: 'Túi phân hủy',
                href: '/category?type=disposable-nilon'

            },
            {
                name: 'Bàn chải',
                href: '/category?type=toothbrush'
            },
            {
                name: 'Ống hút',
                href: '/category?type=straw'
            },
            {
                name: 'Chai',
                href: '/category?type=bottle'
            },
            {
                name: 'Ly',
                href: '/category?type=cup'
            },
            {
                name: 'Khác',
                href: '/category?type=others'
            }
        ]
    },
    {
        name: DONATE,
        href: '/donate'
    },
    {
        name: 'Về chúng tôi',
        href: '/about-me'
    }
]

export const categoriesEN: Category[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'categories',
        href: '/category',
        subcategories: [
            {
                name: 'canvas',
                href: '/category?type=canvas'
            },
            {
                name: 'bamboo',
                href: '/category?type=bamboo'
            },
            {
                name: 'disposable nilon',
                href: '/category?type=disposable-nilon'
            },
            {
                name: 'tooth brush',
                href: '/category?type=toothbrush'
            },
            {
                name: 'straw',
                href: '/category?type=straw'
            },
            {
                name: 'glass bottle',
                href: '/category?type=bottle'
            },
            {
                name: 'cup',
                href: '/category?type=cup'
            },
            {
                name: 'others',
                href: '/category?type=others'
            }
        ]
    },
    {
        name: 'donate',
        href: 'donate'
    },
    {
        name: 'about me',
        href: '/about-me'
    }
]

export const donateValueSections = [
    {
        title: " Bảo vệ rừng",
        content:
            "Những năm gần đây, diện tích rừng tự nhiên ở Việt Nam ngày càng giảm nhanh, chất lượng rừng suy thoái ảnh hưởng nặng nề đến đời sống của người dân , không những thế còn dẫn đến nguy cơ ô nhiễm môi trường cao.",
    },
    {
        title: "Bảo vệ nước",
        content:
            "Những năm gần đây, ô nhiễm nguồn nước đang là một trong những thách thức môi trường lớn nhất đối với Việt Nam. Tỉ lệ người dân không có nước sạch để uống và sinh hoạt cao đe dọa đến sức khỏe và sinh kế của hàng triệu người.",
    },
    {
        title: "Sản phẩm tái chế",
        content:
            "Mỗi năm, hàng trăm ngàn tấn rác thải các loại được thải ra ảnh hưởng nghiêm trọng cho môi trường. Vì vậy, việc sử dụng sản phẩm tái chế từ túi nhựa, chai nước, giấy các loại... là biện pháp hiệu quả để bảo vệ môi trường chúng ta. ",
    },
];

export const donateActionSection = {
    image: '/assets/donate-action.jpg',
    title: 'Quyên góp',
    content: 'Số tiền của bạn có thế cứu lấy thế giới. Hãy cùng chúng tôi tiếp tục chung tay góp phần bảo vệ môi trường.'
}

export const members = [
    {
        name: "Lê Kim Hoàng Trung",
        description: "Tôi là người năng động, luôn thích thú, chủ động tìm những công nghệ mới hiện nay. Vì là người năng động nên cả ngày tôi chỉ cười, có lúc không.",
        facebook: "https://www.facebook.com/trung181",
        github: "https://github.com/hoangtrung1801 ",
        instagram: "https://www.instagram.com/hoangtrung1801",
        image: "/assets/member-1.jpg",
        role: 'Đội trưởng'
    },
    {
        name: "Hà Cảnh Hồng Phúc",
        description: "Là một phần của thế hệ GenZ, tôi tin rằng không có bất kỳ mục tiêu không thể nào không được công nhận. Nếu chúng ta đủ kiên định, tương lai là của chúng ta.",
        facebook: "https://www.facebook.com/hch.phusc.17",
        github: "https://github.com/LilPhusc ",
        instagram: "https://www.instagram.com/_.aliz.hngphc/",
        image: "/assets/member-2.jpg",
        role: 'Thành viên'
    },
    {
        name: "Võ Văn Tuấn",
        description: "Tôi là một người có tổ chức và luôn tập trung vào việc tạo ra kết quả. Trong khi đặt ra mục tiêu tôi luôn rất thực tế, tôi luôn nỗ lực phát triển các cách để hoàn thành được công việc một cách hiệu quả và thậm chí thường đạt được nhiều hơn những gì tôi mong đợi.",
        facebook: "https://www.facebook.com/profile.php?id=100013422558737",
        github: "",
        instagram: "",
        image: "/assets/member-3.jpg",
        role: 'Thành viên'
    },
    {
        name: "Trương Đình Dũng",
        description: "Tôi là người năng động, thân thiên. Lúc rãnh rỗi, tôi thường đọc báo và nghe nhạc.",
        facebook: " https://www.facebook.com/andrew.td2003/",
        github: "https://github.com/gitdung",
        instagram: "",
        image: '/assets/member-4.jpg',
        role: 'Thành viên'
    },
];