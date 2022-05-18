export interface Category {
    name: string,
    href: string,
    subcategories ?: Category[],
}