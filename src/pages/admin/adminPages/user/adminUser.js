import React from "react";
import "./adminUser.css"

const AdminUser = () => {
  const fakeData = [{
    id: 1,
    username: 'admin',
    mail: 'admin@gmail.com',
    password: 'password'
  }]
  return (
    <div className="admin-user-container">
      <div className="admin-user-avatar">

      </div>
      <div className="admin-user-information">
        
      </div>
    </div>
  )
}
export default AdminUser;