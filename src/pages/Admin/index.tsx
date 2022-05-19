import { addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import ProductCard from "../../components/ProductCard";
import storage, { collectionProdutcs } from "../../firebase";
import removeVietnameseTones from "../../utils/functions/removeVietnameseTones";
import { Product } from "../../utils/types/Product";
import Select from 'react-select';
import { categories } from "../../utils/constant";

const Admin = () => {

    const {register, handleSubmit} = useForm();
    const [products, setProducts] = useState<Product[]>([]);
    const [categoriesForm, setCategoriesForm] = useState([]);

    const onSubmit = (data: any) => {
        try {
            const images = [...data.images];
            const imagesName = images.map((image, id) => `${removeVietnameseTones(data.name).split(' ').join('-')}-${id}`);

            data.images = imagesName;
            data.categories = [data.categories];
            data.price = Number.parseFloat(data.price);
            data.categories = categoriesForm;

            const fun1 = new Promise((resolve, reject) => {
                addDoc(collectionProdutcs, data).then(productRef => {
                    console.log('add product successfull ' + productRef.id)
                    resolve(true);
                });
            })

            const fun2 = new Promise((resolve, reject) => {
                images.forEach((image : any, id) => {
                    const imageRef = ref(storage, `images/${imagesName[id]}`);
                    uploadBytes(imageRef, image).then((snapshot) => {
                        console.log(
                            "Upload image " +
                                snapshot.metadata.name +
                                " successfull"
                        );
                        if(id == images.length-1) resolve(true);
                    });
                });
            })

            Promise.all([fun1, fun2]).then(e => {
                alert("successfull");
                location.reload();
            })

        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const fetchData = async() => {
            const result = await getDocs(collectionProdutcs);
            const productsArray: Product[] = [];
            result.forEach(_ => {
                const data = _.data();
                const product: Product = {
                    name: data.name,
                    description: data.description,
                    price: typeof data.price === 'string' ? Number.parseFloat(data.price) : data.price ,
                    categories: [data.categories],
                    images: [...data.images]
                }
                productsArray.push(product);
            })
            setProducts(productsArray);
            console.log(productsArray);
        }
        fetchData().catch(e => console.log(e));
    },[])

    return (
        <div className="container">
            <h1 className="has-text-weight-bold is-size-3">ADMIN</h1>
            <div style={{width: '500px'}}>
                <h2 className="has-text-weight-semibold is-size-4">Add product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input required className="input" type="text" placeholder="Text input" {...register('name')}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input required className="input" type="text" placeholder="Text input" {...register('description')}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input required className="input" type="number" placeholder="Text input" {...register("price")}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Categories</label>
                        <div className="control">
                            <Select options={categories} isMulti={true} onChange={(data:any) => setCategoriesForm(data.map(e => e.value))}/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="images" className="label">Images</label>
                        <div className="control">
                            <input required type="file" className="input" placeholder="Images" multiple {...register('images')}/>
                        </div>
                    </div>

                    <button className="button">Submit</button>

                </form>

            </div>

            <div className="columns is-flex-wrap-wrap">
                {
                    products.map((product, id) => (
                        <div className="column is-3" key={id}>
                            <ProductCard product={product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Admin;