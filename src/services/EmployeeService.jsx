import axios from 'axios'

const REST_API = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(REST_API)
    }

    createEmployee(employee){
        return axios.post(REST_API, employee)   
    }
}

export default new EmployeeService();