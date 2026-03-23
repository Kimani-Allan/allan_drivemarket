import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MakePaymentComponent = () => {

    const { product } = useLocation().state || {};
    console.log(product)

    const img_url = "https://allank.alwaysdata.net/static/images/"

    let [Phone, setPhone] = useState("")
    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading("");
        setSuccess("");
        setLoading("Please wait");
        try {
            const data = new FormData();

            data.append("amount", product.product_cost)
            data.append("phone", Phone)

            const response = await axios.post("https://allank.alwaydata.net/api/mpesa_payment", data)
            console.log(response)
            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)
                setPhone("")
            }

        } catch (error) {
            setLoading("")
            setError(error.message)

        }

    }
    return (
        <div className="row justify-content-center mt-4">
            <h2>LIPA NA M-PESA</h2>
            <div className="col-md-3">
                <img src={img_url + product.product_image} alt="" className="rounded img-thumbnail" />
            </div>
            <div className="col-md-3">
                <h3 className="text-dark">{product.product_name}</h3>
                <h5 className="text-primary">{product.product_category} </h5>
                <p className="text-muted">{product.product_description}</p>
                <h3 className="text-warning">{product.product_cost}</h3>

                <hr />

                <h6 className="text-warning">{loading}</h6>
                <h6 className="text-danger">{error} </h6>
                <h6 className="text-success">{success}</h6>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Amount"
                        readOnly
                        value={product.product_cost}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mpesa n.o 254XXXXXXXXX"
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                    <br />
                    <button className="btn btn-dark">
                        Pay Now
                    </button>
                </form>
            </div>

        </div>
    );
}
export default MakePaymentComponent;