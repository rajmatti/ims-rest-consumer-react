import axios from 'axios'; // For API calls, we will be using Axios - npm install axios

const API_URL='http://localhost:8085/ims/api/dealer';
const API_URL1='http://localhost:8085/ims/api/dealers';

class AuthenticationService{

    loginDealer(dealer){

          return axios.post(API_URL,dealer);
    }

} 
//Create an object of AuthenticationService.
export default new AuthenticationService();