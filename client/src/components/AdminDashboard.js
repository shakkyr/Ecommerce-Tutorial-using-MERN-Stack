import React, { useEffect } from "react";

//components
import AdminHeader from './AdminHeader'
import AdminActionBtn from "./AdminActionBtn";
import AdminCategoryModel from "./AdminCategoryModel";
import AdminProductModel from "./AdminProductModel";

const AdminDashboard = () => {


  return (
    <section>
      <AdminHeader />
      <AdminActionBtn/>
      <AdminCategoryModel />
      <AdminProductModel />
    </section>
  );
};

export default AdminDashboard;
