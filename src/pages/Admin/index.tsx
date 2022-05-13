import { addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import storage, { collectionProdutcs } from "../../firebase";
import removeVietnameseTones from "../../utils/functions/removeVietnameseTones";
import { categories } from "../../utils/constant";
import { ref, uploadBytes } from "firebase/storage";
import { removeListener } from "@reduxjs/toolkit";

const Admin = () => {

    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        try {
            const images = [...data.images];
            const imagesName = images.map((image, id) => `${removeVietnameseTones(data.name).split(' ').join('-')}-${id}`);

            data.images = imagesName;

            const fun1 = new Promise((resolve, reject) => {
                addDoc(collectionProdutcs, data).then(productRef => {
                    console.log('add product successfull ' + productRef.id)
                    resolve(true);
                });
            })

            const fun2 = new Promise((resolve, reject) => {
                images.forEach((image, id) => {
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

    return (
        <div className="container">
            <h1 className="has-text-weight-bold is-size-3">ADMIN</h1>
            <div style={{width: '500px'}}>
                <h2 className="has-text-weight-semibold is-size-4">Add product</h2>
                <form action="" onSubmit={handleSubmit(submit)}>
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
                        <div className="select">
                            <select {...register('categories')} required>
                                <option value="">Select category</option>
                                {
                                    categories.map(item => (
                                        <option value={item}>{item}</option>
                                    ))
                                }
                            </select>
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
        </div>
    )
}

export default Admin;