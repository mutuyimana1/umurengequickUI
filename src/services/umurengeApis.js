import axios from "axios";

const UMURENGE_QUICK_APIS_URL = "http://localhost:3030";

var config = {
  headers: {
    "Content-Type": "application/json",
  },
};

class Application {
  async createAccount(data) {
    try {
      const response = await axios.post(
        UMURENGE_QUICK_APIS_URL + "/user/register",
        data,
        config
      );
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response
      
    }
  }
  async getAllUsers() {
    try {
      const response = await axios.get(
        UMURENGE_QUICK_APIS_URL + "/user/all",
        config
      );
      return response;
    } catch (error) {
      console.log(error.response);
      
    }
  }
  async getAllSchedule() {
    try {
      const response = await axios.get(
        UMURENGE_QUICK_APIS_URL + "/schedule/all",
        config
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new Application();
