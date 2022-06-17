import React, { useState } from "react";
import axios from "axios";
import "./adminUser.css"

const url = "localhost/mvc/?controller=...";

const AdminUser = () => {
  const [file, setFile] = useState();
  const fakeData = [{
    id: 1,
    username: 'admin',
    mail: 'admin@gmail.com',
    password: 'password'
  }]

  const uploadFile = async (file) => {
    const formData = new FormData();

    formData.append('avatar', file)

    return await axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await uploadFile(file);
    console.log(response.data);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="admin-user-container">
      <div className="admin-user-avatar">
        <form onSubmit={handleSubmit}>
          <h1>Upload Image</h1>
          <input type="file" onChange={handleChange} accept=".jpg, .png" />
          <button type="submit">Upload File</button>
        </form>
      </div>
      <div className="admin-user-information">

      </div>
    </div>
  )
}
export default AdminUser;