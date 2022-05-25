import { getDocs } from 'firebase/firestore';
import { collectionProdutcs } from '../../firebase';
import { Product } from '../types/Product';

const getAllProducts = async () : Promise<Product[]>  => {
    const querySnapshot = await getDocs(collectionProdutcs);
    let products : Product[] = [];
    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id} as Product);
    })
    console.log('get all products', products);
    return products;
}

export default getAllProducts;