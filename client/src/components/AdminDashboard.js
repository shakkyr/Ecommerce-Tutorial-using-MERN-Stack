import React, { Fragment, useState, useEffect } from "react";
import { createCategory , getCategories } from "../api/category";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { response } from "express";

const AdminDashboard = () => {
  const [categories, setCategories] = useState(null)
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // !============= lifecycle methods ===============
  useEffect(()=> {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    await getCategories()
          .then( response => {
            setCategories(response.data.categories)
          })
          .catch(error => {
            console.log(error);
          })
  }

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
            <button
              className="btn btn-outline-warning btn-block"
              data-bs-toggle="modal"
              data-bs-target="#addFoodModal"
            >
              <i className="fas fa-plus"> Add Food</i>
            </button>
          </div>
          <div className="col-md-4 mb-1">
            <button
              className="btn btn-outline-success btn-block"
              data-bs-toggle="modal"
              data-bs-target="#viewOrdersModal"
            >
              <i className="fas fa-money-check-alt"> View Orders</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const showCategoryModal = () => (
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
  );
  // const showCategoryModal = () => (
  //   <div className="modal fade" id="addCategoryModal" onClick={handleMessages}>
  //     <div className="modal-dialog modal-dialog-centered modal-lg ">
  //       <div className="modal-content">
  //         <form onSubmit={handleCategorySubmit}>
  //           <div className="modal-header bg-info text-white">
  //             <h5 className="modal-title" id="exampleModalLabel">
  //               Add Category
  //             </h5>
  //             <button
  //               type="button"
  //               className="btn-close"
  //               data-bs-dismiss="modal"
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //           <div className="modal-body my-2">
  //             {errorMsg && showErrorMsg(errorMsg)}
  //             {successMsg && showSuccessMsg(successMsg)}

  //             {
  //                 loading ? <div className="text-center" > {showLoading()} </div> : <Fragment>

  //             <label className="text-secondary">Category</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               onChange={handleCategoryChange}
  //               name="category"
  //               value={category}
  //             />
  //                 </Fragment>

  //             }
  //           </div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               data-bs-dismiss="modal"
  //             >
  //               Close
  //             </button>
  //             <button type="submit" className="btn btn-info">
  //               Submit
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  const showFoodModal = () => (
    <div className="modal fade" id="addFoodModal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg ">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
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
                    />
                    {/* <label className='input-group-text' for="inputGroupFile02" >
                        Choose File

                      </label> */}
                  </div>
                  <div className="form-group">
                    <label className="text-secondary">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className=" form-group">
                    <label className="text-secondary">Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="text-secondary">Price</label>
                    <input type="text" className="form-control"></input>
                  </div>
                  <div className="row g-2">
                    <div className="col-md">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelectGrid"
                          aria-label="Floating label select example"
                        >
                          <option defaultValue>select one</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">
                          Category
                        </label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInputGrid"
                          min='0'
                          max='1000'
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
  // !==================================
  //RENDER
  // !=============================
  return (
    <section>
      {showHeader()}
      {showActionBtn()}
      {showCategoryModal()}
      {showFoodModal()}
    </section>
  );
};

export default AdminDashboard;
