import React, { Fragment, useState } from "react";
import { createCategory } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";

const AdminDashboard = () => {
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setErrorMsg('')
    setSuccessMsg('')
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    

    if (isEmpty(category)) {
        setErrorMsg('Please enter a category')

    } else {
        const data = { category };
        setLoading(true)
        createCategory(data)
            .then(response => {
                setLoading(false);
                setSuccessMsg(response.data.successMessage)
            })
            .catch(error =>{
                setLoading(false)
                setErrorMsg(error.response.data.errorMessage)
            })

    }

  };

  // !==================================
  //VIEWS
  // !=============================
  const showHeader = () => (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i className="fas fa-home"> Dashboard</i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );

  const showActionBtn = () => (
    <div className="bg-light ">
      <div className="container">
        <div className="row p-3">
          <div className="col-md-4 mb-1">
            <button
              className="btn btn-outline-info btn-block"
              data-bs-toggle="modal"
              data-bs-target="#addCategoryModal"
            >
              <i className="fas fa-plus"> Add Category</i>
            </button>
          </div>
          <div className="col-md-4 mb-1">
            <button className="btn btn-outline-warning btn-block">
              <i className="fas fa-plus"> Add Food</i>
            </button>
          </div>
          <div className="col-md-4 mb-1">
            <button className="btn btn-outline-success btn-block">
              <i className="fas fa-money-check-alt"> View Orders</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = () => (
    <div className="modal fade" id="addCategoryModal">
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

              {
                  loading ? showLoading() : <Fragment>

              <label className="text-secondary">Category</label>
              <input
                type="text"
                className="form-control"
                onChange={handleCategoryChange}
                name="category"
                value={category}
              />
                  </Fragment>

              }
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
  );
  // !==================================
  //RENDER
  // !=============================
  return (
    <section>
      {showHeader()}
      {showActionBtn()}
      {showCategoryModal()}
    </section>
  );
};

export default AdminDashboard;
