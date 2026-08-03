import React from "react";

const Form = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">

              <h2 className="text-center mb-4">
                Student Registration
              </h2>

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">
                    Phone
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="form-control"
                  />
                </div>


                <div className="mb-3">
                  <label className="form-label d-block">
                    Gender
                  </label>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                    />
                    <label className="form-check-label">
                      Male
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                    />
                    <label className="form-check-label">
                      Female
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                    />
                    <label className="form-check-label">
                      Other
                    </label>
                  </div>
                </div>


                <div className="mb-3">
                  <label className="form-label">
                    Nationality
                  </label>

                  <select className="form-select">
                    <option>Select Nationality</option>
                    <option>Indian</option>
                    <option>Non‑Indian</option>
                  </select>
                </div>


                <div className="mb-3">
                  <label className="form-label d-block">
                    Hobbies
                  </label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label className="form-check-label">
                      Reading
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label className="form-check-label">
                      Music
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label className="form-check-label">
                      Coding
                    </label>
                  </div>
                </div>


                <div className="mb-3">
                  <label className="form-label">
                    Address
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter address"
                  ></textarea>
                </div>


                <div className="mb-4 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />

                  <label className="form-check-label">
                    I confirm that all the above information is correct
                  </label>
                </div>


                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>

                  <button
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Reset
                  </button>
                  
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Form;