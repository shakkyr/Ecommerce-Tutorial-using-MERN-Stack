import React,{Fragment, useState} from 'react'
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import isEmpty from "validator/lib/isEmpty";
import { createCategory } from "../api/category";

const AdminCategoryModel = () => {
    const [category, setCategory] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);


    const handleMessages = (event) => {
        setErrorMsg("");
        setSuccessMsg("");
      };

      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setErrorMsg("");
        setSuccessMsg("");
      };
    
      const handleCategorySubmit = (event) => {
        event.preventDefault();
    
        if (isEmpty(category)) {
          setErrorMsg("Please enter a category");
        } else {
          const data = { category };
          setLoading(true);
          createCategory(data)
            .then((response) => {
              setLoading(false);
              setSuccessMsg(response.data.successMessage);
              setCategory("");
            })
            .catch((error) => {
              setLoading(false);
              setErrorMsg(error.response.data.errorMessage);
            });
        }
      };

    return (
        <div className="modal fade" id="addCategoryModal" onClick={handleMessages}>
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div className="modal-content">
              <form onSubmit={handleCategorySubmit}>
                <div className="modal-header bg-info text-white">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Category
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
                      <label className="text-secondary">Category</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleCategoryChange}
                        name="category"
                        value={category}
                      />
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
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
};

export default AdminCategoryModel