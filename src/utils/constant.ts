import { Category } from "./types/Cattegory"

export const bannerImages = [
    '/assets/banner-1.jpg',
]

export const donateImages = [
    '/assets/donate-1.jpg',
    '/assets/donate-1.jpg',
]

export const bannerSection = [
    {
        image: '/assets/banner-1.jpg',
        title: 'We can change the world together',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed unde doloremque ipsum iure sapiente voluptatem'
    }
]

export const donateSection = [
    {
        image: '/assets/donate-1.jpg',
        title: 'We can change the world together',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed unde doloremque ipsum iure sapiente voluptatem'
    }, {
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
        name: 'gây quỹ',
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