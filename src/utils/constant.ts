import { Category } from "./types/Cattegory"

export const DONATENOW = "Quyên góp ngay";
export const DONATE = "Quyên góp";

export const bannerSection = [
    {
        image: '/assets/banner-1.jpg',
        title: 'We can change the world together',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed unde doloremque ipsum iure sapiente voluptatem'
    },
    {
        image: '/assets/banner-2.jpeg',
    }
]

export const donateSection = [
    {
        image: '/assets/donate-3.webp',
        title: 'Bảo vệ môi trường',
        body: 'Cùng nhau chung tay bảo vệ môi trường vì tương lai của thế giới, hãy giữ lấy màu xanh và làm sạch môi trường'
    },
    {
        image: '/assets/donate-1.jpg',
        title: 'We can change the world together',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed unde doloremque ipsum iure sapiente voluptatem'
    }
]

export const currency = {
    en: '$',
    vn: '₫',
}

export const categories = [
    { value: 'canvas', label: 'Vải'},
    { value: 'bamboo', label: 'Tre'},
    { value: 'disposable-nilon', label: 'Túi phân hủy'},
    { value: 'toothbrush', label: 'Bàn chải'},
    { value: 'straw', label: 'Ống hút'},
    { value: 'bottle', label: 'Chai'},
    { value: 'cup', label: 'Ly'},
    { value: 'others', label: 'Khác'},
    { value: "new", label: "Mới"}
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
                href: ''
            },
            {
                name: 'Tre',
                href: ''
            },
            {
                name: 'Túi phân hủy',
                href: ''
            },
            {
                name: 'Bàn chải',
                href: ''
            },
            {
                name: 'Ống hút',
                href: ''
            },
            {
                name: 'Chai',
                href: ''
            },
            {
                name: 'Ly',
                href: ''
            },
            {
                name: 'Khác',
                href: ''
            }
        ]
    },
    {
        name: DONATE,
        href: '/donate'
    },
    {
        name: 'about me',
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
                href: ''
            },
            {
                name: 'bamboo',
                href: ''
            },
            {
                name: 'disposable nilon',
                href: ''
            },
            {
                name: 'tooth brushe',
                href: ''
            },
            {
                name: 'straw',
                href: ''
            },
            {
                name: 'glass bottle',
                href: ''
            },
            {
                name: 'cup',
                href: ''
            },
            {
                name: 'others',
                href: ''
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