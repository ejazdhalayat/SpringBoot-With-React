import React from 'react'
import { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function AddEmployee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailid, setEmailid] = useState('')
    const navigate = useNavigate()

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailid}

        EmployeeService.createEmployee(employee).then((response) =>{
            
            console.log(response.data)
            navigate('/employees')
            

        }).catch(error => {

            console.log(error)

        })
    }

  return (
    <div>
        <br /> <br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                           <div className='form-group mb-2'>
                           <label className='form-label'> First Name : </label>
                           <input 
                                type='text'
                                placeholder='Enter first name'
                                name='firstName'
                                className='form-control'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                           />
                           </div>

                           <div className='form-group mb-2'>
                           <label className='form-label'> Last Name : </label>
                           <input 
                                type='text'
                                placeholder='Enter last name'
                                name='lastName'
                                className='form-control'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                           />
                           </div>

                           <div className='form-group mb-2'>
                           <label className='form-label'> Email ID : </label>
                           <input 
                                type='text'
                                placeholder='Enter emailid'
                                name='emailid'
                                className='form-control'
                                value={emailid}
                                onChange={(e) => setEmailid(e.target.value)}
                           />
                           </div>

                           <button className='btn btn-success' onClick = {(e) => saveEmployee(e)}>Submit</button>
                           <Link to='/employees' className='btn btn-danger'>Cancel</Link>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AddEmployee