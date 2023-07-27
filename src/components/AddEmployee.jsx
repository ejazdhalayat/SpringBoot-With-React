import React from "react";
import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailid, setEmailid] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailid };

    if (id) {
      EmployeeService.updateEmployee(employee).then((response) => {
        console.log(response.data);
        navigate("/employees");
      });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailid(response.data.emailid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name : </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name : </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email ID : </label>
                  <input
                    type="text"
                    placeholder="Enter emailid"
                    name="emailid"
                    className="form-control"
                    value={emailid}
                    onChange={(e) => setEmailid(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
