import { addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import ProductCard from "../../components/ProductCard";
import storage, { collectionProdutcs } from "../../firebase";
import { categories } from "../../utils/constant";
import removeVietnameseTones from "../../utils/functions/removeVietnameseTones";
import useProducts from "../../utils/hook/useProducts";

const Admin = () => {
    const { products, isLoading, error } = useProducts();
    const { register, handleSubmit } = useForm();
    const [categoriesForm, setCategoriesForm] = useState([]);

    const onSubmit = (data: any) => {
        try {
            const images = [...data.images];
            const imagesName = images.map(
                (image, id) =>
                    `${removeVietnameseTones(data.name)
                        .split(" ")
                        .join("-")}-${id}`
            );
            data.images = imagesName;
            data.categories = [data.categories];
            data.price = Number.parseFloat(data.price);
            data.categories = categoriesForm;
            const fun1 = new Promise((resolve, reject) => {
                addDoc(collectionProdutcs, data).then((productRef) => {
                    console.log("add product successfull " + productRef.id);
                    resolve(true);
                });
            });
            const fun2 = new Promise((resolve, reject) => {
                images.forEach((image: any, id) => {
                    const imageRef = ref(storage, `images/${imagesName[id]}`);
                    uploadBytes(imageRef, image)
                        .then((snapshot) => {
                            console.log(
                                "Upload image " +
                                    snapshot.metadata.name +
                                    " successfull"
                            );
                            if (id == images.length - 1) resolve(true);
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                });
            });
            Promise.all([fun1, fun2]).then((e) => {
                alert("successfull");
                location.reload();
            });
        } catch (e) {
            console.log(e);
        }
    };

    if (isLoading) return <div>loading...</div>;
    if (error) return <div>error</div>;

    return (
        <div className="container">
            <h1 className="has-text-weight-bold is-size-3">ADMIN</h1>
            <div style={{ width: "500px" }}>
                <h2 className="has-text-weight-semibold is-size-4">
                    Add product
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Text input"
                                {...register("name")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Text input"
                                {...register("description")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input
                                required
                                className="input"
                                type="number"
                                placeholder="Text input"
                                {...register("price")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Categories</label>
                        <div className="control">
                            <Select
                                options={categories}
                                isMulti={true}
                                onChange={(data: any) =>
                                    setCategoriesForm(
                                        data.map((e: any) => e.value)
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="images" className="label">
                            Images
                        </label>
                        <div className="control">
                            <input
                                required
                                type="file"
                                className="input"
                                placeholder="Images"
                                multiple
                                {...register("images")}
                            />
                        </div>
                    </div>

                    <button className="button">Submit</button>
                </form>
            </div>

            <div className="columns is-flex-wrap-wrap">
                {products.map((product, id) => (
                    <div className="column is-3" key={id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
