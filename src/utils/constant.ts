import { Category } from "./types/Cattegory"

export const bannerImages = [
    '/assets/banner1.jpg',
]

// export const categories = [
//     'bamboo',
//     'canvas',
//     'disposable nilon',
//     'tooth brushe',
//     'straw',
//     'glass bottle',
//     'cup',
//     'new',
// ]

export const categories: Category[] = [
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