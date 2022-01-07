import React, {Fragment, useState} from 'react'
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { createProduct } from "../api/product";

const AdminProductModel = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [categories, setCategories] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [produtData, setProdutData] = useState({
        productImage: null,
        productName: "",
        productDesc: "",
        productPrice: "",
        productCategory: "",
        productQty: "",
      });

      const {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        productQty,
      } = produtData;
    


    const handleMessages = (event) => {
        setErrorMsg("");
        setSuccessMsg("");
      };

      const handleProductSubmit = (event) => {
        event.preventDefault();
    
        if (productImage === null) {
          setErrorMsg("Please select an image");
        }
        if (isEmpty(productName) || isEmpty(productDesc) || isEmpty(productPrice)) {
          setErrorMsg("all fields are required");
        } else if (isEmpty(productCategory)) {
          setErrorMsg("please select a category");
        } else if (isEmpty(productQty)) {
          setErrorMsg("please select a quantity");
        } else {
          let formDate = new FormData();
    
          formDate.append("productImage", productImage);
          formDate.append("productName", productName);
          formDate.append("productDesc", productDesc);
          formDate.append("productPrice", productPrice);
          formDate.append("productCategory", productCategory);
          formDate.append("productQty", productQty);
    
          createProduct(formDate)
            .then((response) => {
              setProdutData({
                productImage: null,
                productName: "",
                productDesc: "",
                productPrice: "",
                productCategory: "",
                productQty: "",
              });
              setSuccessMsg(response.data.successMessage)
            })
            .catch((error) => {
              console.log(error);
              setErrorMsg(error.response.data.errorMessage)
            });
        }
      };

      const handleProductImage = (event) => {
        setProdutData({
          ...produtData,
          [event.target.name]: event.target.files[0],
        });
      };
    
      const handleProductChange = (event) => {
        setProdutData({
          ...produtData,
          [event.target.name]: event.target.value,
        });
      };


    return (
            <div className="modal fade" id="addFoodModal" onClick={handleMessages}>
              <div className="modal-dialog modal-dialog-centered modal-lg ">
                <div className="modal-content">
                  <form onSubmit={handleProductSubmit}>
                    <div className="modal-header bg-warning text-white">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Food
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body my-2">
                      {errorMsg && showErrorMsg(errorMsg)}
                      {successMsg && showSuccessMsg(successMsg)}
        
                      {loading ? (
                        <div className="text-center"> {showLoading()} </div>
                      ) : (
                        <Fragment>
                          <div className="custom-file mb-2">
                            <input
                              type="file"
                              className="form-control"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                              name="productImage"
                              onChange={handleProductImage}
                            />
                            {/* <label className='input-group-text' for="inputGroupFile02" >
                                Choose File
        
                              </label> */}
                          </div>
                          <div className="form-group">
                            <label className="text-secondary">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="productName"
                              value={productName}
                              onChange={handleProductChange}
                            />
                          </div>
                          <div className=" form-group">
                            <label className="text-secondary">Description</label>
                            <textarea
                              className="form-control"
                              rows="3"
                              name="productDesc"
                              value={productDesc}
                              onChange={handleProductChange}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label className="text-secondary">Price</label>
                            <input
                              type="text"
                              className="form-control"
                              name="productPrice"
                              value={productPrice}
                              onChange={handleProductChange}
                            />
                          </div>
                          <div className="row g-2">
                            <div className="col-md">
                              <div className="form-floating">
                                <select
                                  className="form-select"
                                  id="floatingSelectGrid"
                                  aria-label="Floating label select example"
                                  name="productCategory"
                                  onChange={handleProductChange}
                                >
                                  <option value="">select one</option>
                                  {categories &&
                                    categories.map((ele) => (
                                      <option key={ele._id} value={ele._id}>
                                        {ele.category}{" "}
                                      </option>
                                    ))}
                                </select>
                                <label htmlFor="floatingSelectGrid">Category</label>
                              </div>
                            </div>
                            <div className="col-md">
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="floatingInputGrid"
                                  min="0"
                                  max="1000"
                                  name="productQty"
                                  value={productQty}
                                  onChange={handleProductChange}
                                />
                                <label htmlFor="floatingInputGrid">Quantity</label>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-warning">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
    
}

export default AdminProductModel
