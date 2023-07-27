import axios from "axios";

const REST_API = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(REST_API);
  }

  createEmployee(employee) {
    return axios.post(REST_API, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(REST_API + "/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.get(REST_API + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId){
    return axios.delete(REST_API + '/' + employeeId)
  }
}

export default new EmployeeService();
