import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Product } from '../types/Product';

const getProduct = async (idProduct: string): Promise<Product> => {
    const productRef = doc(db, 'products', idProduct || "");
    const productSnap = await getDoc(productRef);
    const product: Product = {
        ...(await productSnap.data() as Product),
        id: productSnap.id
    };

    if(!productSnap.exists()) {
        return {} as Product;
    }

    return product;
};

export default getProduct;