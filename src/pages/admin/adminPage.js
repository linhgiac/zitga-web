import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminUser from "./adminPages/user/adminUser"
import AdminCareer from "./adminPages/career/adminCareer"
import AdminNews from "./adminPages/news/adminNews"

const AdminPage = () => {
  return (
    <Routes>
      <Route path="/admin/user" element={<AdminUser /> }/>
      <Route path="/admin/news" element={<AdminNews /> }/>
      <Route path="/admin/career" element={<AdminCareer /> }/>
    </Routes>
  )
};
export default AdminPage;