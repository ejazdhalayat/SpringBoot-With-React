import React from 'react'
import { useState } from 'react'


function ListEmployee() {
    const [employees, setEmployees] = useState([])

  return (
    <div className='container'>
        <h2 className='text-center'>ListEmployee</h2>

        {/* Employee Table */}
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email ID</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key = {employee.id}>
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.emailId} </td>

                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployee