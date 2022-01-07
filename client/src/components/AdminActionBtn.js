import React from 'react'

const AdminActionBtn = () => (
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

export default AdminActionBtn
