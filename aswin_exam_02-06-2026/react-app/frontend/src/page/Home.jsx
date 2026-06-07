import React, { useEffect, useState } from "react";
import { createUser, readUsers, updateUser, deleteUser } from "../api/apiUser";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await readUsers();
      setUsers(response.data || []);
      console.log(response);

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create or update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await updateUser(editId, formData);
        setEditId(null);
      } else {
        await createUser(formData);
      }
      setFormData({ name: "", description: "" });
      fetchUsers();

    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Set form values for editing
  const handleEdit = (data) => {
    setEditId(data._id);
    setFormData({
      name: data.name,
      description: data.description,
    });
  };

  // Delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>User CRUD App</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />

        <button type="submit">
          {editId ? "Update User" : "Create User"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setFormData({ name: "", description: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (
        <table border="1" cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th width="180">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>
                  <button onClick={() => handleEdit(data)}>Edit</button>

                  <button
                    onClick={() => handleDelete(data._id)}
                    style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
                  >
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