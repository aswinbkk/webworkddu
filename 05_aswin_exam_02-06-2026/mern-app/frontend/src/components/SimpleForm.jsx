import { useState } from 'react'
import { createUser } from "../api/apiUser";

const SimpleForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    nationality: "",
    hobbies: [],
    address: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, value],
      });
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const result = await createUser(formData);
      console.log(result);
      alert("User created successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        nationality: "",
        hobbies: [],
        address: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Student Registration Form</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter Phone Number'
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="not selected">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>

        <label>Nationality</label>
        <div>
          <label>Indian</label>
          <input
            type="radio"
            name="nationality"
            value="indian"
            checked={formData.nationality === "indian"}
            onChange={handleChange}
          />
          <label style={{ paddingLeft: '10px' }}>Non-Indian</label>
          <input
            type="radio"
            name="nationality"
            value="non-indian"
            checked={formData.nationality === "non-indian"}
            onChange={handleChange}
          />
        </div>

        <label>Hobbies</label>
        <div>
          <label>Coding</label>
          <input
            type="checkbox"
            value="coding"
            checked={formData.hobbies.includes("coding")}
            onChange={handleCheckbox}
          />
          <label style={{ paddingLeft: '10px' }}>Music</label>
          <input
            type="checkbox"
            value="music"
            checked={formData.hobbies.includes("music")}
            onChange={handleCheckbox}
          />
          <label style={{ paddingLeft: '10px' }}>Reading</label>
          <input
            type="checkbox"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleCheckbox}
          />
        </div>

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        ></textarea>

        <button
          type='submit'
        >Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm