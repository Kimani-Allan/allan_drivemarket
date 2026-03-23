import axios from "axios";
import { useState } from "react";

const AddProductComponent = () => {

    let [product_name, setProductName] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_category, setProductCategory] = useState("");
    let [product_description, setProductDescription] = useState("");
    let [product_image, setProductImage] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(" Adding Product.... Please wait")
        setError("")
        setSuccess("")
 
        try {
            const product_data = new FormData()
            product_data.append("product_name", product_name)
            product_data.append("product_cost", product_cost)
            product_data.append("product_category", product_category)
            product_data.append("product_description", product_description)
            product_data.append("product_image", product_image)

            const response = await axios.post(
                "https://allank.alwaysdata.net/api/add_product", product_data
            );
            console.log(response)
            if (response.status === 200) {
                setSuccess(response.data.message)
                setError("")
                setLoading("")
            }



        } catch (error) {
            console.log(error)
            setLoading("")
            setError(error.message)
        }

    }
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                <h6 className="text-warning">{loading} </h6>
                <h6 className="text-sucess">{success} </h6>
                <h6 className="text-danger">{error} </h6>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        value={product_name}
                        onChange={(e) => {
                            setProductName(e.target.value);


                        }}

                    /><br />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter product cost"
                        value={product_cost}
                        onChange={(e) => {
                            setProductCost(e.target.value)
                        }}
                    /><br />
                    <select
                        className="form-select"
                        value={product_category}
                        onChange={(e) => {
                            setProductCategory(e.target.value)
                        }}
                    >
                        <option value="">Car Category</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>

                    </select>
                    <br />
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Enter product description"
                        value={product_description}
                        onChange={(e) => {
                            setProductDescription(e.target.value)
                        }}
                    ></textarea>
                    <br />

                    <label
                        htmlFor=""
                        className="form-label"
                    >
                        Product Image
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => {
                            setProductImage(e.target.files[0])
                        }}
                    />
                    <br />
                    <button className="btn btn-outline-secondary">Submit</button>
                    <br />

                </form>
            </div>
        </div>
    );

}
export default AddProductComponent;