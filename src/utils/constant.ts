import { Category } from "./types/Cattegory"

export const bannerImages = [
    '/assets/banner1.jpg',
]

export const currency = {
    en: '$',
    vn: '₫',
}

export const categories: Category[] = [
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
        href: 'donate'
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