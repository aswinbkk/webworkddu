import React, { useEffect, useState } from "react";
import { createUser, getViewAll, updateUser, deleteUser } from "../api/apiUser";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    const data = await getViewAll();
    if (data) {
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateUser(editId, formData);
      setEditId(null);
    }else {
      await createUser(formData);
    }
    setFormData({ name: "", description: "" });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setFormData({ name: user.name, description: user.description });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Data</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required />

        <input
          type="description"
          name="description"
          placeholder="Enter description"
          value={formData.email}
          onChange={handleChange}
          required />

        <button type="submit"> {editId ? "Update User" : "Create User"} </button>
      </form>
      <hr />
      <h2>All Users</h2>
      {users.length === 0 ? ( <p>No Users Found</p> )
      : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.description}</td>

                <td>
                  <button onClick={() => handleEdit(user)}> Edit </button>
                  <button
                    onClick={() => handleDelete(user._id)} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;