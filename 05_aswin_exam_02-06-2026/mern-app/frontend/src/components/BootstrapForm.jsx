import { useState } from 'react'
import { createUser } from "../api/apiUser";

const BootstrapForm = () => {

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">

              <h3 className="text-center mb-4">
                Student Registration Form
              </h3>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">
                    Nationality
                  </label>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="nationality"
                      value="indian"
                      checked={formData.nationality === "indian"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Indian
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="nationality"
                      value="non-indian"
                      checked={formData.nationality === "non-indian"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      Non-Indian
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">
                    Hobbies
                  </label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="coding"
                      checked={formData.hobbies.includes("coding")}
                      onChange={handleCheckbox}
                    />
                    <label className="form-check-label">
                      Coding
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="music"
                      checked={formData.hobbies.includes("music")}
                      onChange={handleCheckbox}
                    />
                    <label className="form-check-label">
                      Music
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="reading"
                      checked={formData.hobbies.includes("reading")}
                      onChange={handleCheckbox}
                    />
                    <label className="form-check-label">
                      Reading
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapForm