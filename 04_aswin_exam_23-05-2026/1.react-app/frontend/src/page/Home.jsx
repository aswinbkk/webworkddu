import { useState } from "react";
import { createUser } from "../api/apiUser";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUser(formData);

      console.log(result);

      alert("User created successfully");

      setFormData({
        name: "",
        email: "",
        age: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Student Registration Form
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Name
          </label>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Age
          </label>

          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>
    </div>
  );
};

export default Home;