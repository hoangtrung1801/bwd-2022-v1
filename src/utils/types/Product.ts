export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    categories: string[];
    size?: string[];
    images: string[];
    comments?: {
        username: string;
        comment: string;
        createdAt: string;
    }[];
}
